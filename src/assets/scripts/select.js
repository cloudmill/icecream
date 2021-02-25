import 'select2';
import 'jquery.easing';

// Dropdown result template
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

// Selection result template
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

// Init select on page
$('.select-template').select2({
	selectOnClose: true,
	templateResult: formatState,
	templateSelection: formatStateSelection,
	minimumResultsForSearch: Infinity,
	theme: $(this).data('theme')
});

$('.select-template').each(function () {
	$(this).on('select2:select', function(e) {
		console.log('Select', this);

		$('.catalogFilter--js span').text(e.params.data.text);
	});
	$(this).on('select2:open', function() {
		console.log('Open', this);

		$('.select2-dropdown').hide();
		setTimeout(function() {
			$('.select2-dropdown').slideDown({ duration: 500, easing: 'easeInOutCubic' });
		}, 200);
	});
	$(this).on('select2:closing', function(e) {
		console.log('Closing', this);

		e.preventDefault();
		setTimeout(function() {
			$('.select2').addClass('closing');
			$('.select2-dropdown').slideUp(500, function() {
				setTimeout(function() {
					$('.select-template').select2('destroy');
					$('.select-template').select2({
						selectOnClose: true,
						templateResult: formatState,
						templateSelection: formatStateSelection,
						minimumResultsForSearch: Infinity
					});
					$('.select-template').removeClass('closing');
				}, 500);
			});
		}, 0);
	});
});
