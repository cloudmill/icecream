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
	// require('Scripts/slidersClass');
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


// load
// $(document).load(() => {});
// load

// scroll
$(window).scroll(() => {
});
// scroll

$(window).on('load', function() {
	let counter = 0;
	const loaderCounter = $('.loader span');
	const loaderLayer = $('.loader__layer');
	const getMainUrl = window.location.pathname === '/' || window.location.pathname === '/index' || window.location.pathname === '/index.html';

	if (process.env.NODE_ENV === 'production' || $('.summerdream').length) {
		setTimeout(function() {
			window.scrollTo(0, 0);
		}, 200);
	}
	console.log(getMainUrl);

	if ($('.summerdream').length) {
		$('body').css('overflow', 'hidden');
		// swiper.destroy();

		const loaderTimer = setInterval(() => {
			counter++;
			loaderCounter.text(counter);
			loaderLayer.css('width', counter + '%');
			if (counter === 100) {
				clearInterval(loaderTimer);

				$('body').css('overflow', 'visible');
				$('.summerdream').addClass('hidden');
				// $('.index-loader').addClass('active');

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
					AOS.init({offset: 50});
				}, 500);

				// setTimeout(() => {
				// 	$('.index-loader').addClass('hidden');
				//
				// }, 2000);

				if ($('.rellax').length) {
					// eslint-disable-next-line no-new
					new Rellax('.rellax');
				}
			}
		}, 16);
	} else {
		$('body').css('overflow', 'hidden');
		setTimeout(() => {
			$('.loading').addClass('hideIt');
			$('body').css('overflow', 'visible');
			AOS.init({offset: 50});
			if ($('.rellax').length) {
				// eslint-disable-next-line no-new
				new Rellax('.rellax');
			}
		}, 500);
	}


	// PAGE: mission

	if ($('.page-mission').length) {
		const highlight = {
			delay: 500,
			count: 0,
			timeGap: 300
		};

		const timer = setTimeout(() => {
			$('.page-mission__mission-highlight').each(() => {
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
		$('.page-about-us__slider').each(function() {
			const component = $(this);

			const container = component.find('.swiper-container');
			const pagination = component.find('.page-about-us__slider-pagination');
			const prev = component.find('.page-about-us__slider-btn--prev');
			const next = component.find('.page-about-us__slider-btn--next');
			const paginationItems = component.find('.page-about-us__slider-pagination-item');

			const slider = new Swiper(container[0], {
				allowTouchMove: false,
				speed: 300,

				navigation: {
					prevEl: prev[0],
					nextEl: next[0]
				},

				pagination: {
					el: pagination[0],
					type: 'custom',
					renderCustom: function(sliderSw, current) {
						paginationItems.removeClass('page-about-us__slider-pagination-item--active');
						paginationItems.eq(current - 1).addClass('page-about-us__slider-pagination-item--active');
					}
				}
			});

			paginationItems.on('click', function() {
				const index = $(this).index();
				swiper.slideTo(index);
			});
		});
	}
});
