/* src/app.js */
import AOS from 'aos';
import Rellax from 'rellax';
import Sticky from 'sticky-js';
import Swiper from 'swiper/swiper-bundle.min';
import 'velocity-animate';
import './assets/scripts/backend.js';

// Styles
import 'Styles/_app.scss';



let swiper;
let settings;

$(document).ready(() => {
	const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	require('Scripts/sliders');

	if ($('.fullpage-slider').length) {
		settings = {
			slidesPerView: 2,
			centeredSlides: true,
			simulateTouch: false,
			speed: 1000,
			loop: true,
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
	          <image id="image${index + 1}" width="1086" height="930" xlink:href="assets/images/pagin-${index + 1}.png"/>
	        </pattern></defs></svg></div>`;
				},
			},
			on: {
				slideChangeTransitionStart: function () {
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
		swiper = new Swiper('.fullpage-slider', settings);
	}

	require('Scripts/header');
	require('Scripts/showMore');
	require('Scripts/filtering');
	require('Scripts/select');
	require('Scripts/popup');

	if (screenWidth > 1150 && $('.sticky').length) {
		const sticky = new Sticky('.sticky');
	}

	require('Scripts/input');
	require('Scripts/server');
});



// scroll
$(window).scroll(() => {
});
// scroll

$(window).on('load', function () {


	// PAGE: mission

	if ($('.page-mission').length) {
		const highlight = {
			delay: 500,
			count: 0,
			timeGap: 300
		};

		const timer = setTimeout(() => {
			$('.page-mission__mission-highlight').each(function () {
				const timer = setTimeout(
					() => {
						$(this).addClass('page-mission__mission-highlight--active');

						clearTimeout(timer);
					},
					highlight.timeGap * highlight.count++
				);
			});

			clearTimeout(timer);
		}, highlight.delay);
	}


	// PAGE: about-us

	if ($('.page-about-us').length) {
		$('.page-about-us__slider').each(function () {
			const component = $(this);

			const container = component.find('.swiper-container');
			const pagination = component.find('.page-about-us__slider-pagination');
			const prev = component.find('.page-about-us__slider-btn--prev');
			const next = component.find('.page-about-us__slider-btn--next');
			const paginationItems = component.find('.page-about-us__slider-pagination-item');

			const swiper = new Swiper(container[0], {
				allowTouchMove: false,
				speed: 300,

				navigation: {
					prevEl: prev[0],
					nextEl: next[0]
				},

				pagination: {
					el: pagination[0],
					type: 'custom',
					renderCustom: function (swiper, current, total) {
						paginationItems.removeClass('page-about-us__slider-pagination-item--active');
						paginationItems.eq(current - 1).addClass('page-about-us__slider-pagination-item--active');
					}
				}
			});

			paginationItems.on('click', function () {
				const index = $(this).index();
				swiper.slideTo(index);
			});
		});
	}
});



// MAIN PAGE: loader

$(() => {
	const loaderCounter = $('.loader span');
	const loaderLayer = $('.loader__layer');
	
	const getMainUrl = window.location.pathname === '/' || window.location.pathname === '/index' || window.location.pathname === '/index.html';
	console.log(getMainUrl);
	
	if (process.env.NODE_ENV === 'production' || $('.summerdream').length) {
		setTimeout(function () {
			window.scrollTo(0, 0);
		}, 200);
	}


	if ($('.summerdream').length) {
		$('.index-loader').css('display', 'none');
		$('body').css('overflow', 'hidden');


		// параметры прелоадера
		const
			// информация об изображениях
			img = {
				elem: $('img'),
				count: $('img').length
			},
			// информация о загрузке изображений
			load = {
				counter: 0,
				startTime: null,
				endTime: null,
				time: null,
				progress: null,
				TAIL: {
					MIN_TIME: 200,
					MAX_TIME: 500,
					PARTS: 5,
					BREAKPOINT: 0.6 + 0.2 * Math.random()
				}
			}

		// загрузка одного изображения (тэг img)
		img.elem.on('load', () => {
			load.counter++

			if (!load.startTime) {
				load.startTime = (new Date()).getTime()
			}

			load.progress = load.counter / img.count
			load.progress = (load.progress < load.TAIL.BREAKPOINT) ? load.progress : load.TAIL.BREAKPOINT

			preloaderUpdate(load.progress * 0.5)
		})

		// загрузка всей страницы (всех изображений)
		$(window).on('load', () => {
			load.progress = (load.progress <= 0) ? load.TAIL.BREAKPOINT : load.progress

			if (load.progress >= 1) {
				preloaderClose()
			} else {
				load.endTime = (new Date()).getTime()

				load.time = load.endTime - load.startTime
				load.time = (load.time > 0) ? load.time : 0

				const tail = {
					time: null,
					partCounter: 0,
					partTime: null,
					interval: null
				}

				tail.time = (load.time / load.progress) * (1 - load.progress)
				tail.time = (tail.time < load.TAIL.MAX_TIME) ? ((tail.time < load.TAIL.MIN_TIME) ? load.TAIL.MIN_TIME : tail.time) : load.TAIL.MAX_TIME

				tail.partCounter = 0
				tail.partTime = tail.time / load.TAIL.PARTS
				tail.interval = setInterval(() => {
					tail.partCounter++

					if (tail.partCounter < load.TAIL.PARTS) {
						preloaderUpdate(load.progress + (1 - load.progress) / load.TAIL.PARTS * tail.partCounter)
					} else {
						preloaderClose()

						clearInterval(tail.interval)
					}
				}, tail.partTime);
			}
		})

		// обновление прелоадера (отображение прогресса)
		function preloaderUpdate(loadProgress) {
			const loadProgressPercent = Math.round(loadProgress * 100)

			loaderCounter.text(loadProgressPercent);
			loaderLayer.css('width', loadProgressPercent + '%');
		}

		// закрытие прелоадера
		function preloaderClose() {
			$('.index-loader').css('display', '');
			loaderCounter.text('100');
			loaderLayer.css('width', '100%');


			// OLD CODE START

			$('body').css('overflow', 'visible');
			$('.summerdream').addClass('hidden');

			setTimeout(() => {
				$('.fullpage-block').addClass('active');
				$('.summerdream').addClass('hideIt');
				$('.fullpage-desc span:first-child').addClass('active');
				setTimeout(() => {
					$('.fullpage-desc span:nth-child(3)').addClass('active');
					setTimeout(() => {
						$('.fullpage-desc span:last-child').addClass('active');
					}, 300);
				}, 300);
				swiper.autoplay.start();
			}, 500);

			setTimeout(() => {
				AOS.init({ offset: 50 });
			}, 500);

			if ($('.rellax').length) {
				// eslint-disable-next-line no-new
				new Rellax('.rellax');
			}

			// OLD CODE END
		}


	} else {
		$('body').css('overflow', 'hidden');

		setTimeout(() => {
			$('.loading').addClass('hideIt');
			$('body').css('overflow', 'visible');

			AOS.init({ offset: 50 });

			if ($('.rellax').length) {
				// eslint-disable-next-line no-new
				new Rellax('.rellax');
			}
		}, 500);
	}
})
