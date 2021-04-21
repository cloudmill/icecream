import jBox from 'jbox';
import Swiper from 'swiper/swiper-bundle.min';

// eslint-disable-next-line no-new
new jBox('Image');

$('.myModal').each(function() {
	let swiper;
	const id = $(this).attr('href');
	const myModal = new jBox('Modal', {
		attach: $(this),
		content: $(id),
		closeButton: false,
		addClass: $(this).data('class'),
		onOpen: () => {
			$(id).parent().animate({scrollTop: 0}, 100);
			if ($('.main-slider').length) {
			  if($(id).css('display') === 'block') {
					const component = $(id).find('.main-slider');
					const interleaveOffset = 0.5;
					const img = $(id).find('.main-slider').data('image-pagination');
					const num = parseFloat($(id).find('.main-slider').data('num'));
					const prev = $(id).find('.swiper-prev');
					const next = $(id).find('.swiper-next');
					const pagin = $(id).find('.swiper-pagination');
					const mainSliderOptions = {
						loop: true,
						speed: 1000,
						loopAdditionalSlides: 10,
						grabCursor: true,
						watchSlidesProgress: true,
						navigation: {
							nextEl: next[0],
							prevEl: prev[0],
						},
						pagination: {
							el: pagin[0],
							clickable: true,
							renderBullet: (index, className) => {
								return `<div class="${className}"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <mask id="mask${index + num + 21}" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">
                  <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask${index + num + 21})">
                    <rect x="-3" y="6" width="122" height="103" fill="url(#pattern${index + num + 21})"/>
                    <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>
                  </g>
                  <defs>
                  <pattern id="pattern${index + num + 21}" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image${index + num + 21}" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>
                    <image id="image${index + num + 21}" width="1086" height="930" xlink:href="${img[index]}"/>
                  </pattern></defs></svg></div>`;
							},
						},
						on: {
							progress: function() {
								for (let i = 0; i < this.slides.length; i++) {
									const slideProgress = this.slides[i].progress;
									const innerOffset = this.width * interleaveOffset;
									const innerTranslate = slideProgress * innerOffset;

									this.slides[i].querySelector('.slide-bgimg').style.transform =
                    'translateX(' + innerTranslate + 'px)';
								}
							},
							touchStart: function() {
								for (let i = 0; i < this.slides.length; i++) {
									this.slides[i].style.transition = '';
								}
							},
							setTransition: function(sw, speed) {
								for (let i = 0; i < this.slides.length; i++) {
									this.slides[i].style.transition = speed + 'ms';
									this.slides[i].querySelector('.slide-bgimg').style.transition =
                    speed + 'ms';
								}
							}
						}
					};

					setTimeout(() => {
						swiper = new Swiper(component[0], mainSliderOptions);
					}, 100);
				}
			}
		},
		onCloseComplete: () => {
			if ($('.main-slider').length) {
				// swiper.destroy(false, true);
			}
		}
	});
	$('.close-popup--js').click(function() {
		myModal.close();
	});
});

let ajaxModal = new jBox('Modal', {
  attach: '.get-programm-academy',
  ajax: {
    type: 'post',
    url: '/local/templates/main/include/ajax/fest/programm_academy.php',
    data: '',
    getData: 'data-id',
    reload: 'strict',
    setContent: false,
    success: function (response) {
      this.setContent(response);

      $('.close-popup--js').click(function() {
        ajaxModal.close();
      });
    },
  }
});
