import 'select2';
import 'jquery.easing';

function formatState(state) {
	if (!state.id) {
		return state.text;
	}

	const $state = $(
		'<span><img src="' + state.element.dataset.img + '" class="img-flag" /> ' + state.text + '</span>'
	);
	return $state;
}

function formatStateSelection(state, e) {
	if (!state.id) {
		return state.text;
	}
	const title = $(e.prevObject).closest('.select2').prev().data('title');
	const $state = $(
		'<span><img class="img-flag" /> <span></span></span>'
	);

	$state.find('span').html(`<span class="title">${title}</span>${state.text}`);
	$state.find('img').attr('src', state.element.dataset.img);

	return $state;
}

$('.select-template').select2({
	selectOnClose: true,
	templateResult: formatState,
	templateSelection: formatStateSelection,
	minimumResultsForSearch: Infinity
});

$('.select-template').on('select2:select', function(e) {
	$('.catalogFilter--js span').text(e.params.data.text);
});
$('.select-template').on('select2:open', function() {
	$('.select2-dropdown').hide();
	setTimeout(function() {
		$('.select2-dropdown').slideDown({ duration: 500, easing: 'easeInOutCubic' });
	}, 200);
});
$('.select-template').on('select2:closing', function(e) {
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

$('.reset-filter--js').click(function() {
	$('.select-template').val('filter-1').trigger('change');
});


// main

function formatStateMain(state) {
	if (!state.id) {
		return state.text;
	}

	const $state = $(
		'<span>' + state.text + '</span>'
	);
	return $state;
}

function formatStateSelectionMain(state, e) {
	if (!state.id) {
		return state.text;
	}
	const title = $(e.prevObject).closest('.select2').prev().data('title');
	const $state = $(
		'<span><span></span></span>'
	);

	$state.find('span').html(`<span class="title">${title}</span>${state.text}`);

	return $state;
}

$('.select-main').select2({
	selectOnClose: true,
	templateResult: formatStateMain,
	templateSelection: formatStateSelectionMain,
	minimumResultsForSearch: Infinity,
	theme: 'main'
});

$('.map__select').select2({
	selectOnClose: true,
	templateResult: formatStateMain,
	templateSelection: formatStateSelectionMain,
	minimumResultsForSearch: Infinity,
	theme: 'main'
});

$('.select-main').on('select2:open', function() {
	$('.select2-dropdown').hide();
	setTimeout(function() {
		$('.select2-dropdown').slideDown({ duration: 500, easing: 'easeInOutCubic' });
	}, 200);
});
$('.select-main').on('select2:closing', function(e) {
	e.preventDefault();
	setTimeout(function() {
		$('.select2').addClass('closing');
		$('.select2-dropdown').slideUp(500, function() {
			$('.select-main').select2('destroy');
			$('.select-main').select2({
				selectOnClose: true,
				templateResult: formatStateMain,
				templateSelection: formatStateSelectionMain,
				minimumResultsForSearch: Infinity,
				theme: 'main'
			});
			$('.select-main').removeClass('closing');
		});
	}, 0);
});

$('.reset-filter--js').click(function() {
	$('.select-main').val('filter-1').trigger('change');
});
