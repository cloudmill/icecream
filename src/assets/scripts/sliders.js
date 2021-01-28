import Swiper from 'swiper/swiper-bundle.min';


if ($('.fullpage-slider').length) {
	const img = $('.fullpage-slider').data('image-pagination');
	const settings = {
		slidesPerView: 2,
		centeredSlides: true,
		simulateTouch: false,
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.fullpage-slider .swiper-pagination',
			clickable: true,
			renderBullet: (index, className) => {
				return `<div class="${className}"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	        <mask id="mask${index + 1}" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">
	        <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>
	        </mask>
	        <g mask="url(#mask${index + 1})">
	          <rect x="1" y="8" width="117" height="103" fill="url(#pattern${index + 1})"/>
	          <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>
	          <path class="red" d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>
	        </g>
	        <defs>
	        <pattern id="pattern${index + 1}" patternContentUnits="objectBoundingBox" width="1" height="1">
	          <use xlink:href="#image${index + 1}" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>
	          <image id="image${index + 1}" width="1086" height="930" xlink:href="${img[index]}"/>
	        </pattern></defs></svg></div>`;
			},
		},
		on: {
			slideChangeTransitionStart: function() {
				$('.fullpage-title').removeClass('active');
				$('.fullpage-title').addClass('remove');
				const getTitle = $('.fullpage-slider .swiper-slide-active').data('title');
				const activeSlide = $('.fullpage-slider .swiper-slide-active');
				const slide = $('.fullpage-slider .swiper-slide:not(.swiper-slide-active)');
				slide.addClass('remove');
				activeSlide.addClass('active');
				$('.fullpage-slider').removeClass('active');

				setTimeout(() => {
					slide.removeClass('active');
					$('.fullpage-title h2').html(getTitle);
					$('.fullpage-title').addClass('active');
					setTimeout(() => {
						$('.fullpage-title').removeClass('remove');
						$('.fullpage-slider').addClass('active');
						slide.removeClass('remove');
					}, 600);
				}, 800);
			},
		},
	};
	const swiper = new Swiper('.fullpage-slider', settings);
}

if ($('.carousel').length) {
	const pagin = ['Интернет–магазин', 'Экскурсия на фабрику «Чистая линия»', 'О!Эскимо', 'Смотровая площадка PANORAMA360'];
	const carousel = new Swiper('.carousel', {
		slidesPerView: 1,
		effect: 'fade',
		simulateTouch: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.carousel .swiper-pagination',
			clickable: true,
			renderBullet: (index, className) => {
				return '<div class="' + className + '"><div class="circle"><svg id="svg" width="20" height="20" viewport="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
          '    <circle r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle>' +
          '    <circle id="bar" r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle>' +
          '</svg></div>' + pagin[index] + '</div>';
			},
		},
		on: {
			slideChangeTransitionStart: function(slider) {
				$('.slider-image img').removeClass('active');
				const slide = $('.slider-image');
				const currentSlideF = $(slide[0]).find('img')[slider.realIndex];
				const currentSlideS = $(slide[1]).find('img')[slider.realIndex];
				const previousSlide = $('.carousel .swiper-slide')[slider.previousIndex];
				$(previousSlide).addClass('hideIt');
				$(currentSlideF).addClass('active');
				$(currentSlideS).addClass('active');

				setTimeout(() => $(previousSlide).removeClass('hideIt'), 800);

			},
		},
	});
}
/*
if ($('.slideshow').length) {
	const slideshow = new Swiper('.slideshow', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.slideshow-container .swiper-next',
			prevEl: '.slideshow-container .swiper-prev',
		},
		pagination: {
			el: '.slideshow-container .swiper-pagination',
			clickable: true,
			renderBullet: (index, className) => {
				return `<div class="${className}"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask${index + 1}" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">
          <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>
          </mask>
          <g mask="url(#mask${index + 1})">
            <rect x="-3" y="6" width="122" height="103" fill="url(#pattern${index + 1})"/>
            <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>
          </g>
          <defs>
          <pattern id="pattern${index + 1}" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image${index + 1}" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>
            <image id="image${index + 1}" width="1086" height="930" xlink:href="assets/images/interests/pagin-${index + 1}.png"/>
          </pattern></defs></svg></div>`;
			},
		},
	});
}*/

if ($('.rollerIt').length) {
	const roller = new Swiper('.rollerIt', {
		slidesPerView: 'auto',
		spaceBetween: 40,
		navigation: {
			nextEl: '.card-slider .swiper-next',
			prevEl: '.card-slider .swiper-prev',
		}
	});
}

$('.slider-aside').each(function() {
	const component = $(this);

	const container = component.find('.swiper-container');
	const prev = component.find('.slider-aside__button--prev');
	const next = component.find('.slider-aside__button--next');

	const swiper = new Swiper(container[0], {
		allowTouchMove: false,

		navigation: {
			prevEl: prev[0],
			nextEl: next[0]
		}
	});
});


if ($('.main-slider').length) {
	const mainSliderSelector = '.main-slider';
	const interleaveOffset = 0.5;
  const img = $('.main-slider').data('image-pagination');

	const mainSliderOptions = {
		loop: true,
		speed: 1000,
		loopAdditionalSlides: 10,
		grabCursor: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.slideshow-container .swiper-next',
			prevEl: '.slideshow-container .swiper-prev',
		},
		pagination: {
			el: '.slideshow-container .swiper-pagination',
			clickable: true,
			renderBullet: (index, className) => {
				return `<div class="${className}"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask${index + 1}" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">
          <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>
          </mask>
          <g mask="url(#mask${index + 1})">
            <rect x="-3" y="6" width="122" height="103" fill="url(#pattern${index + 1})"/>
            <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>
          </g>
          <defs>
          <pattern id="pattern${index + 1}" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image${index + 1}" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>
            <image id="image${index + 1}" width="1086" height="930" xlink:href="${img[index]}"/>
          </pattern></defs></svg></div>`;
			},
		},
		on: {
			init: function() {
			},
			imagesReady: function() {
			},
			progress: function() {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
				  console.log(swiper.slides[i].progress);
					const slideProgress = swiper.slides[i].progress;
					const innerOffset = swiper.width * interleaveOffset;
					const innerTranslate = slideProgress * innerOffset;
					console.log(innerTranslate);

					swiper.slides[i].querySelector('.slide-bgimg').style.transform =
            'translateX(' + innerTranslate + 'px)';
				}
			},
			touchStart: function() {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = '';
				}
			},
			setTransition: function(sw, speed) {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + 'ms';
					swiper.slides[i].querySelector('.slide-bgimg').style.transition =
            speed + 'ms';
				}
			}
		}
	};
	const mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
}
