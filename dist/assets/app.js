!function(e){function t(t){for(var s,l,o=t[0],r=t[1],c=t[2],u=0,f=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(s=!1)}s&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var s={},i={0:0},a=[];function l(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=s,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(n,s,function(t){return e[t]}.bind(null,s));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=r;a.push([7,1,2]),n()}([,,,function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"swiper",(function(){return s})),n.d(t,"settings",(function(){return i}));var s,i,a=n(2),l=n.n(a);if(e(".fullpage-slider").length&&(i={slidesPerView:2,centeredSlides:!0,simulateTouch:!1,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,pagination:{el:".fullpage-slider .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'.concat(t,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <mask id="mask').concat(e+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n          <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n          </mask>\n          <g mask="url(#mask').concat(e+1,')">\n            <rect x="1" y="8" width="117" height="103" fill="url(#pattern').concat(e+1,')"/>\n            <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n          </g>\n          <defs>\n          <pattern id="pattern').concat(e+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n            <use xlink:href="#image').concat(e+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n            <image id="image').concat(e+1,'" width="1086" height="930" xlink:href="assets/images/pagin-').concat(e+1,'.png"/>\n          </pattern></defs></svg></div>')}},on:{slideChangeTransitionStart:function(){e(".fullpage-title").removeClass("active"),e(".fullpage-title").addClass("remove");var t=e(".swiper-container .swiper-slide-active").data("title"),n=e(".swiper-container .swiper-slide-active"),s=e(".swiper-container .swiper-slide:not(.swiper-slide-active)");s.addClass("remove"),n.addClass("active"),setTimeout((function(){s.removeClass("active"),setTimeout((function(){e(".fullpage-title h2").html(t),e(".fullpage-title").addClass("active"),setTimeout((function(){e(".fullpage-title").removeClass("remove")}),300),setTimeout((function(){s.removeClass("remove")}),800)}),500)}),500)}}},s=new l.a(".fullpage-slider",i)),e(".carousel").length){var o=["Интернет–магазин","Экскурсия на фабрику «Чистая линия»","О!Эскимо","Смотровая площадка PANORAMA360"];new l.a(".carousel",{slidesPerView:1,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".carousel .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'+t+'"><div class="circle"><svg id="svg" width="20" height="20" viewport="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">    <circle r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle>    <circle id="bar" r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle></svg></div>'+o[e]+"</div>"}}})}if(e(".slideshow").length)new l.a(".slideshow",{slidesPerView:1,navigation:{nextEl:".slideshow-container .swiper-next",prevEl:".slideshow-container .swiper-prev"},pagination:{el:".slideshow-container .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'.concat(t,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <mask id="mask').concat(e+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n          <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n          </mask>\n          <g mask="url(#mask').concat(e+1,')">\n            <rect x="-3" y="6" width="122" height="103" fill="url(#pattern').concat(e+1,')"/>\n            <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n          </g>\n          <defs>\n          <pattern id="pattern').concat(e+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n            <use xlink:href="#image').concat(e+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n            <image id="image').concat(e+1,'" width="1086" height="930" xlink:href="assets/images/interests/pagin-').concat(e+1,'.png"/>\n          </pattern></defs></svg></div>')}}});if(e(".rollerIt").length)new l.a(".rollerIt",{slidesPerView:"auto",spaceBetween:40,navigation:{nextEl:".card-slider .swiper-next",prevEl:".card-slider .swiper-prev"}})}.call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"showMore",(function(){return a}));var s=n(1),i=n.n(s);function a(){var t=e(".moreDetail--js").data("num"),n=e(".moreDetail--js").data("more"),s=e(".moreDetail--js .more__item--js"),a=n||3,l=e(".showMore--js"),o=s.length;l.hide(),s.velocity("slideUp",{duration:300});var r=t||8;o>r&&l.show(),s.slice(0,r).slideDown(),l.click((function(){var e=s.filter(":visible").length;return s.slice(e-1,e+a).slideDown(),s.filter(":visible").length>=o&&l.hide(),setTimeout((function(){i.a.refresh({offset:50})}),400),!1}))}e(".accordion__item").click((function(){var t=this;return e(".accordion-body").removeClass("shown"),e(this).hasClass("active")?(e(this).removeClass("active").find(".accordion-body").removeClass("shown"),setTimeout((function(){e(t).find(".accordion-body").removeClass("ellipses")}),350)):(e(this).removeClass("active"),e(this).addClass("active").find(".accordion-body").addClass("shown ellipses")),setTimeout((function(){i.a.refresh({offset:50})}),400),!1})),a()}.call(this,n(0))},,,function(e,t,n){"use strict";n.r(t),function(e){var t=n(1),s=n.n(t),i=n(5),a=n.n(i),l=n(3),o=n(2),r=n.n(o);n(9),n(10);e(document).ready((function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(n(3),n(11),n(4),n(12),n(13),e>1150)new a.a(".sticky");n(15),n(17)})),e(window).scroll((function(){})),e(window).on("load",(function(){var t=0,n=e(".loader span"),i=e(".loader__layer"),a="/"===window.location.pathname||"/index"===window.location.pathname||"/index.html"===window.location.pathname;if(setTimeout((function(){window.scrollTo(0,0)}),200),console.log(a),e(".summerdream").length){e("body").css("overflow","hidden"),l.swiper.destroy();var o=setInterval((function(){t++,n.text(t),i.css("width",t+"%"),100===t&&(clearInterval(o),e("body").css("overflow","visible"),e(".summerdream").addClass("hidden"),e(".index-loader").addClass("active"),setTimeout((function(){e(".fullpage-block").addClass("active"),e(".fullpage-desc span:first-child").addClass("active"),setTimeout((function(){e(".fullpage-desc span:nth-child(3)").addClass("active"),setTimeout((function(){e(".fullpage-desc span:last-child").addClass("active")}),300)}),300)}),500),setTimeout((function(){s.a.init({offset:50})}),500),setTimeout((function(){e(".index-loader").addClass("hidden"),swiper=new r.a(".fullpage-slider",l.settings)}),2e3),e(".rellax").length)}),35)}else e("body").css("overflow","hidden"),setTimeout((function(){e(".loading").addClass("hideIt"),e("body").css("overflow","visible"),s.a.init({offset:50}),e(".rellax").length}),500)}))}.call(this,n(0))},,,function(e,t,n){},function(e,t,n){(function(e){e(".page-header").mousemove((function(t){var n=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(".bubble").css("left",0),n<=1025?e(".bubble").css("top",t.clientY-125):e(".bubble").css("top",t.clientY-160)})),e(".page-header").mouseout((function(){e(".bubble").css("left","-50px")})),e(".mobile-nav--js").click((function(){e("body").toggleClass("activated"),e(".page-header").toggleClass("active"),e(this).hasClass("active")&&e(".page-header, .catalogFilter").removeClass("active"),e(this).toggleClass("active")})),e(".catalogFilter--js").click((function(){e("body").toggleClass("activated"),e(".mobile-nav--js").toggleClass("active"),e(".catalogFilter").toggleClass("active")})),e(document).click((function(t){var n=e(".page-header.active"),s=e(".mobile-nav--js"),i=e(".catalogFilter--js");0===s.has(t.target).length&&0===n.has(t.target).length&&0===i.has(t.target).length&&0===e(".catalogFilter").has(t.target).length&&(e("body").removeClass("activated"),n.removeClass("active"),s.removeClass("active"),e(".catalogFilter").removeClass("active"))}))}).call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(4),s=n(1),i=n.n(s);function a(n,s){var a=e(".filter__item--js");e(".showMore--js").hide(),a.velocity("slideUp",{duration:300}),"*"===n?Object(t.showMore)():(e(a).filter((function(t,s){return e(s)[0].dataset.text.startsWith(n)})).velocity("slideDown",{duration:300,delay:200}),setTimeout((function(){i.a.refresh({offset:50})}),500)),e(".filter--js li").removeClass("active"),s.addClass("active")}e(".filter--js").on("click","li:not(.last)",(function(){e(this).hasClass("active")||a(e(this).data("text"),e(this))})),e(".filter--js").on("click","li.last",(function(){var t=e(".filter--js li:first-child");t.hasClass("active")||a(t.data("text"),t)}))}.call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){n(14);var t="assets/images/catalog/filter";function s(n){return n.id?e('<span><img src="'+t+"/"+n.element.value.toLowerCase()+'.svg" class="img-flag" /> '+n.text+"</span>"):n.text}function i(n,s){if(!n.id)return n.text;var i=e(s.prevObject).closest(".select2").prev().data("title"),a=e('<span><img class="img-flag" /> <span></span></span>');return a.find("span").html('<span class="title">'.concat(i,"</span>").concat(n.text)),a.find("img").attr("src",t+"/"+n.element.value.toLowerCase()+".svg"),a}e(".select-template").select2({selectOnClose:!0,templateResult:s,templateSelection:i,minimumResultsForSearch:1/0}),e(".select-template").on("select2:open",(function(){e(".select2-dropdown").hide(),setTimeout((function(){e(".select2-dropdown").slideDown(500)}),200)})),e(".select-template").on("select2:closing",(function(t){t.preventDefault(),setTimeout((function(){e(".select2").addClass("closing"),e(".select2-dropdown").slideUp(500,(function(){e(".select-template").select2("destroy"),e(".select-template").select2({selectOnClose:!0,templateResult:s,templateSelection:i,minimumResultsForSearch:1/0}),e(".select-template").removeClass("closing")}))}),0)})),e(".reset-filter--js").click((function(){e(".select-template").val("filter-1").trigger("change")}))}.call(this,n(0))},,function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"validateEmail",(function(){return i})),n.d(t,"validatePhone",(function(){return a})),n.d(t,"validateField",(function(){return l}));var s=n(6);function i(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function a(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}function l(e,t){var n,s=e.attr("required"),l=".control-error",o="checkbox"===e.attr("type"),r=t;return""===e.val()?(e.closest(".input").removeClass("input--filled"),n=!1):(e.closest(".input").addClass("input--filled"),n=!0),r&&("email"===e.prop("type")?i(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(l).text(""),n=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(l).text("Поле заполнено некорректно"),n=!1):"phone"===e.prop("name")?a(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(l).text(""),n=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(l).text("Поле заполнено некорректно"),n=!1):(e.closest(".input").removeClass("error"),e.closest(".input").find(l).text(""),n=!0)),o&&s&&(e.prop("checked")?(e.closest(".checkbox").removeClass("error"),n=!0):(e.closest(".checkbox").find(l).text("Для отправки сообщения необходимо согласие"),n=!1)),!r&&s&&(e.closest(".input").addClass("error"),e.closest(".input").find(l).text("Пожалуйста, заполните поле"),n=!1),"file"===e.prop("type")&&(n=!0),n}n.n(s)()({mask:"+7 (999) 999-99-99"}).mask("input[name=phone]"),e(document).on("blur",".input input, .input textarea",(function(t){l(e(this),t.target.value)})),e(document).on("change",".checkbox input",(function(t){l(e(this),t.target.value)})),e(".form--js").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(l(e(this),t.value))})),n.includes(!1))return!1;var s=e(this).closest("form"),i=s.find("input[name=name]"),a=s.find("input[name=email]"),o=s.find("textarea[name=content]"),r=e(this);e.ajax({type:"POST",url:"send.php",dataType:"json",data:{name:i.val(),email:a.val(),message:o.val()},success:function(e){console.log(e.success),"true"===e.success&&r.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form-back--js").click((function(){var t=e(this).closest("form");return t.trigger("reset"),t.find("input").parent().removeClass("input--filled"),e(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,n(0))},,function(e,t,n){(function(e){e(".test--js").click((function(){return e(".form-response").addClass("shown"),!1})),e(".reset--js").click((function(){return e(".form-response").removeClass("shown"),!1}))}).call(this,n(0))}]);