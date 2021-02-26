import 'select2';
import 'jquery.easing';

function formatState(state) {
	let $state;

	if (state.element !== undefined && state.element.dataset.img !== undefined) {
		$state = $(
			'<span><img src="' + state.element.dataset.img + '" class="img-flag" /> ' + state.text + '</span>'
		);
	} else {
		$state = $(
			'<span>' + state.text + '</span>'
		);
	}

	return $state;
}

function formatStateSelection(state, e) {
	const title = $(e.prevObject).closest('.select2').prev().data('title');

	let $state;
	if (state.element !== undefined && state.element.dataset.img !== undefined) {
		$state = $(
			'<span><img class="img-flag" /> <span></span></span>'
		);
	} else {
		$state = $(
			'<span><span class="select2-selection-text"></span></span>'
		);
	}

	$state.find('span').html(`<span class="title">${title}</span>${state.text}`);
	$state.find('img').attr('src', state.element.dataset.img);

	return $state;
}

$(() => {
	$('.select-template').each(function () {
		const select = $(this);

			const selectWrapper = select.closest('.catalogFilter__item').length !== 0 ?
				select.closest('.catalogFilter__item')
				:
				select.closest('.map__select-wrapper');
		const selectWrapperStyles = getComputedStyle(selectWrapper[0]);
		if (selectWrapperStyles.position === 'static') {
			selectWrapper.css('position', 'relative');
		}

		select.select2({
			minimumResultsForSearch: Infinity,
			theme: select.data('theme'),
			dropdownParent: selectWrapper,
			selectOnClose: true,
			templateResult: formatState,
			templateSelection: formatStateSelection,
		});

		select.on('select2:select', event => {
			$('.catalogFilter--js span').text(event.params.data.text);
		});

		select.on('select2:open', () => {
			selectWrapper.css('z-index', '100000');

			const selectDropdown = selectWrapper.find('.select2-dropdown');

			selectDropdown.hide();
			const timeout = setTimeout(() => {
				selectDropdown.slideDown({ duration: 500, easing: 'easeInOutCubic' });

				clearTimeout(timeout);
			}, 0);
		});

		select.on('select2:closing', event => {
			event.preventDefault();

			const selectDropdown = selectWrapper.find('.select2-dropdown');

			const timeout = setTimeout(() => {
				selectWrapper.css('z-index', '');

				const select2 = selectWrapper.find('.select2');

				select2.addClass('closing');
				selectDropdown.slideUp(500, () => {
					const timeout = setTimeout(() => {
						select.select2('destroy');
						select.select2({
							minimumResultsForSearch: Infinity,
							theme: select.data('theme'),
							dropdownParent: selectWrapper,
							selectOnClose: true,
							width: '100%',
							templateResult: formatState,
							templateSelection: formatStateSelection,
						});
						select.removeClass('closing');

						selectWrapper.css('z-index', '');

						clearTimeout(timeout);
					}, 200);
				});

				clearTimeout(timeout);
			}, 0);
		});
	});
});