import 'rangeslider.js';

$('#play').click(function() {
	const $video = $('#video');
	$(this).fadeOut('500');
	$video.get(0).play();
	$video.attr('controls', '');
});


function valueOutput(element) {
	const textContent = ('textContent' in document) ? 'textContent' : 'innerText';
	const value = element.value;
	const output = element.parentNode.getElementsByTagName('output')[0];
	output[textContent] = value;
}

$('input[type="range"]').rangeslider({
	polyfill: false,
	onInit: function() {
		valueOutput(this.$element[0]);
	},
});


$(document).on('input', 'input[type="range"]', function(e) {
	valueOutput(e.target);
	const regexp = /\B(?=(\d{3})+(?!\d))/g;
	const values = $(this).closest('.referral__calc-block').find('output');
	const res = values[0].innerText * values[1].innerText * 0.1;
	if(e.target.id === 'summ') {
		$('.result__block').removeClass('active');
		if (e.target.value < 250) {
			$('.result__block:first-child').addClass('active');
		} else if (parseInt(e.target.value, 10) >= 250 && parseInt(e.target.value, 10) < 5000) {
			$('.result__block:nth-child(2)').addClass('active');
		} else {
			$('.result__block:nth-child(3)').addClass('active');
		}
	}

	$('.result__block--js .result .sum').text(res.toString().replace(regexp, ' '));
});

