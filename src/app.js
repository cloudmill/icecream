/* src/app.js */
import AOS from 'aos';
import Rellax from 'rellax';
import Sticky from 'sticky-js';
import 'velocity-animate';

// Styles
import 'Styles/_app.scss';

$(document).ready(() => {
	const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	require('Scripts/sliders');
	require('Scripts/header');
	require('Scripts/showMore');
	require('Scripts/filtering');

	if (screenWidth > 1150) {
		const sticky = new Sticky('.sticky');
	}

	require('Scripts/demo');
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
	const getMainUrl = window.location.pathname === '/' || window.location.pathname === '/index';

	if (process.env.NODE_ENV === 'production') {
		setTimeout(function() {
			window.scrollTo(0, 0);
		}, 200);
	}

	if (getMainUrl) {
		$('body').css('overflow', 'hidden');
		const loaderTimer = setInterval(() => {
			counter++;
			loaderCounter.text(counter);
			loaderLayer.css('width', counter + '%');
			if (counter === 100) {
				clearInterval(loaderTimer);

				if (getMainUrl) {
					$('body').css('overflow', 'visible');
					$('.summerdream').addClass('hidden');
					$('.index-loader').addClass('active');

					setTimeout(() => {
						$('.fullpage-block').addClass('active');
						$('.fullpage-desc span:first-child').addClass('active');
						setTimeout(() => {
							$('.fullpage-desc span:nth-child(3)').addClass('active');
							setTimeout(() => {
								$('.fullpage-desc span:last-child').addClass('active');
							}, 300);
						}, 300);
					}, 300);

					setTimeout(() => {
						$('.index-loader').addClass('hidden');
					}, 2000);

					AOS.init({offset: 50});
					if ($('.rellax').length) {
						// eslint-disable-next-line no-new
						new Rellax('.rellax');
					}
				}
			}
		}, 35);
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

});
