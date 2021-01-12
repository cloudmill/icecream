import 'select2';

const baseUrl = 'assets/images/catalog/filter';

function formatState(state) {
	if (!state.id) {
		return state.text;
	}

	const $state = $(
		'<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
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
	$state.find('img').attr('src', baseUrl + '/' + state.element.value.toLowerCase() + '.svg');

	return $state;
}

$('.select-template').select2({
	selectOnClose: true,
	templateResult: formatState,
	templateSelection: formatStateSelection,
	minimumResultsForSearch: Infinity
});

$('.select-template').on('select2:open', function() {
	$('.select2-dropdown').hide();
	setTimeout(function() {
		$('.select2-dropdown').slideDown(500);
	}, 200);
});
$('.select-template').on('select2:closing', function(e) {
	e.preventDefault();
	setTimeout(function() {
		$('.select2').addClass('closing');
		$('.select2-dropdown').slideUp(500, function() {
			$('.select-template').select2('destroy');
			$('.select-template').select2({
				selectOnClose: true,
				templateResult: formatState,
				templateSelection: formatStateSelection,
				minimumResultsForSearch: Infinity
			});
			$('.select-template').removeClass('closing');
		});
	}, 0);
});

$('.reset-filter--js').click(function() {
	$('.select-template').val('filter-1').trigger('change');
});
