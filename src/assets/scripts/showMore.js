import AOS from 'aos';


$(document).on('click', '.accordion__item--sm', function (event) {
	if ($(this).hasClass('active')) {
		if ($(event.target).closest('.accordion-body').length === 0) {
			$('.accordion-body').removeClass('shown');

			$('.accordion__item').removeClass('active');
			$(this).removeClass('active').find('.accordion-body').removeClass('shown');
			setTimeout(() => {
				$(this).find('.accordion-body').removeClass('ellipses');
			}, 350);

			setTimeout(() => {
				AOS.refresh({
					offset: 50,
				});
			}, 400);
		}
	} else {
		$('.accordion-body').removeClass('shown');

		$('.accordion__item').removeClass('active');
		$(this).removeClass('active');
		$(this).addClass('active').find('.accordion-body').addClass('shown ellipses');

		setTimeout(() => {
			AOS.refresh({
				offset: 50,
			});
		}, 400);
	}
});
$(document).on('click', '.accordion__item--js', function (event) {
	if ($(event.target).closest('.accordion-body').length === 0) {
		if ($(this).hasClass('active')) {
			$('.accordion__item').removeClass('active');
			$(this).removeClass('active').find('.accordion-body').slideUp();
		} else {
			$('.accordion__item').removeClass('active').find('.accordion-body').slideUp();
			$(this).removeClass('active');
			$(this).addClass('active').find('.accordion-body').slideDown();
		}

		setTimeout(() => {
			AOS.refresh({
				offset: 50,
			});
		}, 400);
	}
});

export function showMore() {
	const num = $('.moreDetail--js').data('num');
	const more = $('.moreDetail--js').data('more');
	const list = $('.moreDetail--js .more__item--js');
	const numToShow = more || 3;
	const button = $('.showMore--js');
	const numInList = list.length;
	button.hide();
	list.velocity('slideUp', { duration: 300 });
	const spliceNum = num || 8;
	if (numInList > spliceNum) {
		button.show();
	}
	list.slice(0, spliceNum).slideDown();

	button.click(function () {
		const showing = list.filter(':visible').length;
		list.slice(showing - 1, showing + numToShow).slideDown();
		const nowShowing = list.filter(':visible').length;
		if (nowShowing >= numInList) {
			button.hide();
		}
		setTimeout(() => {
			AOS.refresh({
				offset: 50,
			});
		}, 400);

		return false;
	});
}

showMore();
