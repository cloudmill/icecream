!function(e){function t(t){for(var n,l,o=t[0],r=t[1],c=t[2],p=0,u=[];p<o.length;p++)l=o[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&u.push(i[l][0]),i[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(d&&d(t);u.length;)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var r=a[o];0!==i[r]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},i={0:0},s=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=r;s.push([7,1,2]),a()}([,,,,,,,function(e,t,a){"use strict";a.r(t),function(e){var t=a(1),n=a.n(t),i=a(3),s=a.n(i),l=a(4),o=a.n(l),r=a(2),c=a.n(r);a(10),a(11),a(12),a(13);e(document).ready((function(){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(a(14),a(15),a(16),a(17),a(18),a(21),t>1150&&e(".sticky").length)new o.a(".sticky");e(".backLink").mouseover((function(){var t=e(this).width(),a=e(this).find(".nextBlock--ico").width();e(this).find(".nextBlock--ico").css("left",-(t/2-2.5*a))})).mouseleave((function(){e(this).find(".nextBlock--ico").css("left",0)})),a(22),a(24)})),e(window).scroll((function(){})),e(window).on("load",(function(){if(e(".page-mission").length)var t={delay:500,count:0,timeGap:300},a=setTimeout((function(){e(".page-mission__mission-highlight").each((function(){var a=this,n=setTimeout((function(){e(a).addClass("page-mission__mission-highlight--active"),clearTimeout(n)}),t.timeGap*t.count++)})),clearTimeout(a)}),t.delay);e(".page-about-us").length&&e(".page-about-us__slider").each((function(){var t=e(this),a=t.find(".swiper-container"),n=t.find(".page-about-us__slider-pagination"),i=t.find(".page-about-us__slider-btn--prev"),s=t.find(".page-about-us__slider-btn--next"),l=t.find(".page-about-us__slider-pagination-item"),o=new c.a(a[0],{allowTouchMove:!1,speed:300,navigation:{prevEl:i[0],nextEl:s[0]},pagination:{el:n[0],type:"custom",renderCustom:function(e,t,a){l.removeClass("page-about-us__slider-pagination-item--active"),l.eq(t-1).addClass("page-about-us__slider-pagination-item--active")}}});l.on("click",(function(){var t=e(this).index();o.slideTo(t)}))}))})),e((function(){var t=e(".loader span"),a=e(".loader__layer"),i="/"===window.location.pathname||"/index"===window.location.pathname||"/index.html"===window.location.pathname;if(console.log(i),setTimeout((function(){window.scrollTo(0,0)}),200),e(".summerdream").length){var l=function(e){var n=Math.round(100*e);t.text(n),a.css("width",n+"%")},o=function(){e(".index-loader").css("display",""),t.text("100"),a.css("width","100%"),e("body").css("overflow","visible"),e(".summerdream").addClass("hidden"),setTimeout((function(){e(".fullpage-block").addClass("active"),e(".summerdream").addClass("hideIt"),e(".fullpage-desc span:first-child").addClass("active"),setTimeout((function(){e(".fullpage-desc span:nth-child(3)").addClass("active"),setTimeout((function(){e(".fullpage-desc span:last-child").addClass("active")}),300)}),300)}),500),setTimeout((function(){n.a.init({offset:50})}),500),e(".rellax").length&&new s.a(".rellax")};e(".index-loader").css("display","none"),e("body").css("overflow","hidden");var r={elem:e("img"),count:e("img").length},c={counter:0,startTime:null,endTime:null,time:null,progress:null,TAIL:{MIN_TIME:200,MAX_TIME:500,PARTS:5,BREAKPOINT:.6+.2*Math.random()}};r.elem.on("load",(function(){c.counter++,c.startTime||(c.startTime=(new Date).getTime()),c.progress=c.counter/r.count,c.progress=c.progress<c.TAIL.BREAKPOINT?c.progress:c.TAIL.BREAKPOINT,l(.5*c.progress)})),e(window).on("load",(function(){if(c.progress=c.progress<=0?c.TAIL.BREAKPOINT:c.progress,c.progress>=1)o();else{c.endTime=(new Date).getTime(),c.time=c.endTime-c.startTime,c.time=c.time>0?c.time:0;var e={time:null,partCounter:0,partTime:null,interval:null};e.time=c.time/c.progress*(1-c.progress),e.time=e.time<c.TAIL.MAX_TIME?e.time<c.TAIL.MIN_TIME?c.TAIL.MIN_TIME:e.time:c.TAIL.MAX_TIME,e.partCounter=0,e.partTime=e.time/c.TAIL.PARTS,e.interval=setInterval((function(){e.partCounter++,e.partCounter<c.TAIL.PARTS?l(c.progress+(1-c.progress)/c.TAIL.PARTS*e.partCounter):(o(),clearInterval(e.interval))}),e.partTime)}}))}else e("body").css("overflow","hidden"),setTimeout((function(){e(".loading").addClass("hideIt"),e("body").css("overflow","visible"),n.a.init({offset:50}),e(".rellax").length&&new s.a(".rellax")}),500)}))}.call(this,a(0))},,,,function(e,t,a){(function(e){function t(t){e.ajax({type:"post",url:"/catalog/",dataType:"html",data:t,success:function(t){var a=e(t).find("[data-type=items_block]"),n=e(t).find("[data-type=pagenav_block]"),i=e(t).find("[data-type-title=kind] option"),s=e(t).find("[data-type-title=flavors] option");filterOptions.remove(),itemsBlock.remove(),pagenavBlock.remove(),selectKind.append(i),selectFlavors.append(s),filterBlock.after(a),itemsBlock.after(n),filterSelects.each((function(){e(this).val(e(this).find("[selected]").val()).trigger("change")}))}})}function a(t){e.ajax({type:"post",url:"/recipes/",dataType:"html",data:t,success:function(t){var a=e(t).find("[data-type=items_block]"),n=e(t).find("[data-type=pagenav_block]"),i=e(t).find("[data-title-type=type] option"),s=e(t).find("[data-title-type=products] option"),l=e(t).find("[data-title-type=time] option");filterOptions.remove(),itemsBlock.remove(),pagenavBlock.remove(),typeBlockSelect.append(i),productsBlockSelect.append(s),timeBlockSelect.append(l),appendItems.append(a),itemsBlock.after(n),filterSelects.each((function(){e(this).val(e(this).find("[selected]").val()).trigger("change")}))}})}e((function(){e(document).on("click","[data-type=show_more_click]",(function(t){t.preventDefault();var a=e(this).parents("[data-type=main_container]"),n=a.find("[data-type=items_block]"),i=e(this).attr("data-url"),s=a.find("[data-type=pagenav_block]");void 0!==i&&e.ajax({type:"POST",url:i,dataType:"html",data:{ajax:!0},success:function(t){s.remove();var a=e(t).find("[data-type=item]"),i=e(t).find("[data-type=pagenav_block]");n.append(a),n.after(i)}})})),kind=null,flavors=null,data=null,container=null,itemsBlock=null,filterBlock=null,pagenavBlock=null,filterSelects=null,filterOptions=null,selectKind=null,selectFlavors=null,e("[data-type=reset_filters_catalog]").on("click",(function(){container=e(this).parents(["data-type=catalog_container"]),itemsBlock=container.find("[data-type=items_block]"),filterBlock=container.find("[data-type=catalog_filter_block]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects=container.find("[data-type=change_filter_catalog]"),filterOptions=container.find("[data-type=change_filter_catalog] option"),selectKind=container.find("[data-type-title=kind]"),selectFlavors=container.find("[data-type-title=flavors]"),data={ajax:!0,kind:"",flavors:""},t(data)})),e("[data-type=change_filter_catalog]").on("select2:select",(function(){container=e(this).parents(["data-type=catalog_container"]),itemsBlock=container.find("[data-type=items_block]"),filterBlock=container.find("[data-type=catalog_filter_block]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects=container.find("[data-type=change_filter_catalog]"),filterOptions=container.find("[data-type=change_filter_catalog] option"),selectKind=container.find("[data-type-title=kind]"),selectFlavors=container.find("[data-type-title=flavors]"),"kind"==e(this).attr("data-type-title")&&(kind=e(this).val()),"flavors"==e(this).attr("data-type-title")&&(flavors=e(this).val()),data={ajax:!0,kind:kind,flavors:flavors},t(data)})),type=null,products=null,time=null,data=null,container=null,appendItems=null,itemsBlock=null,filterSelects=null,filterOptions=null,typeBlockSelect=null,productsBlockSelect=null,timeBlockSelect=null,pagenavBlock=null,e("[data-type=reset_filters_recipes]").on("click",(function(){container=e(this).parents(["data-type=container_recipes"]),appendItems=container.find("[data-type=append_items]"),itemsBlock=container.find("[data-type=items_block]"),filterSelects=container.find("[data-type=change_filter_recipes]"),filterOptions=container.find("[data-type=change_filter_recipes] option"),typeBlockSelect=container.find("[data-title-type=type]"),productsBlockSelect=container.find("[data-title-type=products]"),timeBlockSelect=container.find("[data-title-type=time]"),pagenavBlock=container.find("[data-type=pagenav_block]"),data={ajax:!0,type:"",products:"",time:""},a(data)})),e("[data-type=change_filter_recipes]").on("select2:select",(function(){container=e(this).parents(["data-type=container_recipes"]),appendItems=container.find("[data-type=append_items]"),itemsBlock=container.find("[data-type=items_block]"),filterSelects=container.find("[data-type=change_filter_recipes]"),filterOptions=container.find("[data-type=change_filter_recipes] option"),typeBlockSelect=container.find("[data-title-type=type]"),productsBlockSelect=container.find("[data-title-type=products]"),timeBlockSelect=container.find("[data-title-type=time]"),pagenavBlock=container.find("[data-type=pagenav_block]"),"type"==e(this).attr("data-title-type")&&(type=e(this).val()),"products"==e(this).attr("data-title-type")&&(products=e(this).val()),"time"==e(this).attr("data-title-type")&&(time=e(this).val()),data={ajax:!0,type:type,products:products,time:time},a(data)})),e("[data-type=contact_form]").on("submit",(function(t){t.preventDefault();var a=e(this),n={name:a.find("input[name='name']").val(),mail:a.find("input[name='email']").val(),phone:a.find("input[name='phone']").val(),text:a.find("textarea[name='question']").val(),type:a.attr("data-type-title")};e.ajax({type:"post",url:"/local/templates/main/include/ajax/contact/contact.php",dataType:"json",data:n,success:function(e){}})}))}))}).call(this,a(0))},function(e,t,a){(function(e){e((function(){if(e(".map").length){ymaps.ready((function(){e("[data-type=region_select]").on("select2:select",(function(){var t=e(this).parents("[data-type=map_container]"),a=t.find("[data-type=shop_select]"),n=t.find("[data-type=shops_block]"),i=e(this).val();e.ajax({type:"post",url:"/world/oeskimo/",data:{ajax:!0,region:i},success:function(t){var i=e(t).find("[data-type=shop_select]");a.remove(),n.append(i)}})}));var t=new ymaps.Map("map",{center:[66.413951,94.241942],zoom:3,controls:[]}),a=ymaps.templateLayoutFactory.createClass('<div class="map__clusterer">{{ properties.geoObjects.length }}</div>'),n=ymaps.templateLayoutFactory.createClass('<address class="address-map" ><p><b>$[properties.name]</b><br/><ul class="balloon-info" ><li><strong>Адрес:&nbsp;</strong>$[properties.address]</li></ul></address>'),i=new ymaps.Clusterer({clusterIcons:[{href:"/local/templates/main/assets/images/map-cluster.svg",size:[43,53],offset:[-21.5,-53]}],clusterIconContentLayout:a}),s={};e("[data-type=shop_select]").each((function(){var t=e(this).attr("data-coord-x"),a=e(this).attr("data-coord-y"),l=e(this).attr("data-id");s[l]=new ymaps.Placemark([t,a],{name:e(this).attr("data-name"),address:e(this).attr("data-address")},{balloonContentLayout:n,balloonOffset:[5,0],balloonCloseButton:!0,balloonMinWidth:150,balloonMaxWidth:200,balloonMinHeught:150,balloonMaxHeught:200,iconLayout:"default#image",iconImageHref:"/local/templates/main/assets/images/map-placemark.svg",iconImageSize:[43,53],iconImageOffset:[-21.5,-53]}),i.add(s[l])})),t.geoObjects.add(i),e(document).on("click","[data-type=shop_select]",(function(){var a=[];coordinateX=e(this).attr("data-coord-x"),coordinateY=e(this).attr("data-coord-y"),id=e(this).attr("data-id"),a.push(coordinateX),a.push(coordinateY),t.panTo([a],{flying:!0,checkZoomRange:!0}),t.setCenter(a,15),s[id].balloon.open()}))}))}}))}).call(this,a(0))},function(e,t,a){},function(e,t,a){"use strict";a.r(t),function(e){var t=a(2),n=a.n(t);if(e(".fullpage-slider").length){var i=e(".fullpage-slider").data("image-pagination"),s={slidesPerView:2,centeredSlides:!0,simulateTouch:!1,speed:1e3,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".fullpage-slider .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'.concat(t,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t        <mask id="mask').concat(e+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n\t        <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n\t        </mask>\n\t        <g mask="url(#mask').concat(e+1,')">\n\t          <rect x="1" y="8" width="117" height="103" fill="url(#pattern').concat(e+1,')"/>\n\t          <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n\t          <path class="red" d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n\t        </g>\n\t        <defs>\n\t        <pattern id="pattern').concat(e+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n\t          <use xlink:href="#image').concat(e+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n\t          <image id="image').concat(e+1,'" width="1086" height="930" xlink:href="').concat(i[e],'"/>\n\t        </pattern></defs></svg></div>')}},on:{slideChangeTransitionStart:function(){e(".fullpage-title").removeClass("active"),e(".fullpage-title").addClass("remove");var t=e(".fullpage-slider .swiper-slide-active").data("title"),a=e(".fullpage-slider .swiper-slide-active"),n=e(".fullpage-slider .swiper-slide:not(.swiper-slide-active)");n.addClass("remove"),a.addClass("active"),e(".fullpage-slider").removeClass("active"),setTimeout((function(){n.removeClass("active"),e(".fullpage-title h2").html(t),e(".fullpage-title").addClass("active"),setTimeout((function(){e(".fullpage-title").removeClass("remove"),e(".fullpage-slider").addClass("active"),n.removeClass("remove")}),600)}),800)}}};new n.a(".fullpage-slider",s)}if(e(".carousel").length){var l=["Интернет–магазин","Экскурсия на фабрику «Чистая линия»","О!Эскимо","Смотровая площадка PANORAMA360"];new n.a(".carousel",{slidesPerView:1,effect:"fade",simulateTouch:!1,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".carousel .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'+t+'"><div class="circle"><svg id="svg" width="20" height="20" viewport="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">    <circle r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle>    <circle id="bar" r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle></svg></div>'+l[e]+"</div>"}},on:{slideChangeTransitionStart:function(t){e(".slider-image img").removeClass("active");var a=e(".slider-image"),n=e(a[0]).find("img")[t.realIndex],i=e(a[1]).find("img")[t.realIndex],s=e(".carousel .swiper-slide")[t.previousIndex];e(s).addClass("hideIt"),e(n).addClass("active"),e(i).addClass("active"),setTimeout((function(){return e(s).removeClass("hideIt")}),800)}}})}if(e(".rollerIt").length)new n.a(".rollerIt",{slidesPerView:"auto",spaceBetween:40,navigation:{nextEl:".card-slider .swiper-next",prevEl:".card-slider .swiper-prev"}});if(e(".slider-aside").each((function(){var t=e(this),a=t.find(".swiper-container"),i=t.find(".slider-aside__button--prev"),s=t.find(".slider-aside__button--next");new n.a(a[0],{allowTouchMove:!1,navigation:{prevEl:i[0],nextEl:s[0]}})})),0!==e(".production__slider").length){var o=function(t,a){e(".my-slider__container").each((function(){var a=e(this).index(),n=Math.abs(t-a),i=r[n];e(this).css("width",i+"px"),e(this).find(".my-slider__slide").css("transform","scale("+c[n]+")")})),e(".my-slider__wrapper").css("transform","translateX("+a+"px)")},r=[250,145,105],c=r.map((function(e){return e/250})),d=[165,125],p=window.matchMedia("(min-width: 1024px)");p.matches&&(c=(r=[450,145,105]).map((function(e){return e/450})));var u=0,f=0,m=!1;o(u,f),p.addListener((function(e){c=e.matches?(r=[450,145,105]).map((function(e){return e/450})):(r=[250,145,105]).map((function(e){return e/250})),o(u,f)}));var h=new n.a(".production__slider-main",{speed:750,allowTouchMove:!1,effect:"fade",fadeEffect:{crossFade:!0},autoHeight:!0,spaceBetween:20});e(".production__slider-btn--prev").on("click",(function(){if(!m&&u>0){o(--u,f+=d[u]),m=!0;var e=setTimeout((function(){m=!1,clearTimeout(e)}),750);h.slidePrev()}})),e(".production__slider-btn--next").on("click",(function(){if(!m&&u<2){o(++u,f-=d[u-1]),m=!0;var e=setTimeout((function(){m=!1,clearTimeout(e)}),750);h.slideNext()}}))}if(e(".main-slider").length){var v=e(".main-slider").data("image-pagination"),g={loop:!0,speed:1e3,loopAdditionalSlides:10,grabCursor:!0,watchSlidesProgress:!0,navigation:{nextEl:".slideshow-container .swiper-next",prevEl:".slideshow-container .swiper-prev"},pagination:{el:".slideshow-container .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'.concat(t,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <mask id="mask').concat(e+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n          <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n          </mask>\n          <g mask="url(#mask').concat(e+1,')">\n            <rect x="-3" y="6" width="122" height="103" fill="url(#pattern').concat(e+1,')"/>\n            <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n          </g>\n          <defs>\n          <pattern id="pattern').concat(e+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n            <use xlink:href="#image').concat(e+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n            <image id="image').concat(e+1,'" width="1086" height="930" xlink:href="').concat(v[e],'"/>\n          </pattern></defs></svg></div>')}},on:{init:function(){},imagesReady:function(){},progress:function(){for(var e=0;e<this.slides.length;e++){console.log(this.slides[e].progress);var t=this.slides[e].progress*(.5*this.width);console.log(t),this.slides[e].querySelector(".slide-bgimg").style.transform="translateX("+t+"px)"}},touchStart:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""},setTransition:function(e,t){for(var a=0;a<this.slides.length;a++)this.slides[a].style.transition=t+"ms",this.slides[a].querySelector(".slide-bgimg").style.transition=t+"ms"}}};new n.a(".main-slider",g)}}.call(this,a(0))},function(e,t,a){(function(e){e(".page-header").mousemove((function(t){var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(".bubble").css("left",0),a<=1025?e(".bubble").css("top",t.clientY-125):e(".bubble").css("top",t.clientY-160)})),e(".page-header").mouseout((function(){e(".bubble").css("left","-50px")})),e(".mobile-nav--js").click((function(){e("body").toggleClass("activated"),e(".page-header").toggleClass("active"),e(this).hasClass("active")&&e(".page-header, .catalogFilter").removeClass("active"),e(this).toggleClass("active")})),e(".catalogFilter--js").click((function(){e("body").toggleClass("activated"),e(".mobile-nav--js").toggleClass("active"),e(".catalogFilter").toggleClass("active")})),e(document).click((function(t){var a=e(".page-header.active"),n=e(".mobile-nav--js"),i=e(".catalogFilter--js");0===n.has(t.target).length&&0===a.has(t.target).length&&0===i.has(t.target).length&&0===e(".catalogFilter").has(t.target).length&&(e("body").removeClass("activated"),a.removeClass("active"),n.removeClass("active"),e(".catalogFilter").removeClass("active"))}))}).call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"showMore",(function(){return s}));var n=a(1),i=a.n(n);function s(){var t=e(".moreDetail--js").data("num"),a=e(".moreDetail--js").data("more"),n=e(".moreDetail--js .more__item--js"),s=a||3,l=e(".showMore--js"),o=n.length;l.hide(),n.velocity("slideUp",{duration:300});var r=t||8;o>r&&l.show(),n.slice(0,r).slideDown(),l.click((function(){var e=n.filter(":visible").length;return n.slice(e-1,e+s).slideDown(),n.filter(":visible").length>=o&&l.hide(),setTimeout((function(){i.a.refresh({offset:50})}),400),!1}))}e(".accordion__item--sm").click((function(){var t=this;return e(".accordion-body").removeClass("shown"),e(this).hasClass("active")?(e(".accordion__item").removeClass("active"),e(this).removeClass("active").find(".accordion-body").removeClass("shown"),setTimeout((function(){e(t).find(".accordion-body").removeClass("ellipses")}),350)):(e(".accordion__item").removeClass("active"),e(this).removeClass("active"),e(this).addClass("active").find(".accordion-body").addClass("shown ellipses")),setTimeout((function(){i.a.refresh({offset:50})}),400),!1})),e(".accordion__item--js").click((function(){return e(this).hasClass("active")?(e(".accordion__item").removeClass("active"),e(this).removeClass("active").find(".accordion-body").slideUp()):(e(".accordion__item").removeClass("active").find(".accordion-body").slideUp(),e(this).removeClass("active"),e(this).addClass("active").find(".accordion-body").slideDown()),setTimeout((function(){i.a.refresh({offset:50})}),400),!1})),s()}.call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){var t=a(1),n=a.n(t);function i(t,a){var i=e(".filter__item--js");e(".btn--js").hide(),i.velocity({opacity:0,translateY:"-20px"},{display:"none"},{duration:500}),"*"===t?i.velocity({opacity:1,translateY:"0px"},{display:"block"},{duration:500}):(e(i).filter((function(a,n){return e(n)[0].dataset.text.startsWith(t)})).velocity({opacity:1,translateY:"0px"},{display:"block"},{delay:300,duration:500}),setTimeout((function(){n.a.refresh({offset:50})}),500)),e(".filter--js li").removeClass("active"),a.addClass("active")}e(".filter--js").on("click","li:not(.last)",(function(){e(this).hasClass("active")||i(e(this).data("text"),e(this))})),e(".filter--js").on("click","li.last",(function(){var t=e(".filter--js li:first-child");t.hasClass("active")||i(t.data("text"),t)}))}.call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){a(19),a(20);function t(t){return t.id?e('<span><img src="'+t.element.dataset.img+'" class="img-flag" /> '+t.text+"</span>"):t.text}function n(t,a){if(!t.id)return t.text;var n=e(a.prevObject).closest(".select2").prev().data("title"),i=e('<span><img class="img-flag" /> <span></span></span>');return i.find("span").html('<span class="title">'.concat(n,"</span>").concat(t.text)),i.find("img").attr("src",t.element.dataset.img),i}function i(t){return t.id?e("<span>"+t.text+"</span>"):t.text}function s(t,a){if(!t.id)return t.text;var n=e(a.prevObject).closest(".select2").prev().data("title"),i=e("<span><span></span></span>");return i.find("span").html('<span class="title">'.concat(n,"</span>").concat(t.text)),i}e(".select-template").select2({selectOnClose:!0,templateResult:t,templateSelection:n,minimumResultsForSearch:1/0}),e(".select-template").on("select2:select",(function(t){e(".catalogFilter--js span").text(t.params.data.text)})),e(".select-template").on("select2:open",(function(){e(".select2-dropdown").hide(),setTimeout((function(){e(".select2-dropdown").slideDown({duration:500,easing:"easeInOutCubic"})}),200)})),e(".select-template").on("select2:closing",(function(a){a.preventDefault(),setTimeout((function(){e(".select2").addClass("closing"),e(".select2-dropdown").slideUp(500,(function(){setTimeout((function(){e(".select-template").select2("destroy"),e(".select-template").select2({selectOnClose:!0,templateResult:t,templateSelection:n,minimumResultsForSearch:1/0}),e(".select-template").removeClass("closing")}),500)}))}),0)})),e(".select-main").select2({selectOnClose:!0,templateResult:i,templateSelection:s,minimumResultsForSearch:1/0,theme:"main"}),e(".map__select").select2({selectOnClose:!0,templateResult:i,templateSelection:s,minimumResultsForSearch:1/0,theme:"main"}),e(".select-main").on("select2:open",(function(){e(".select2-dropdown").hide(),setTimeout((function(){e(".select2-dropdown").slideDown({duration:500,easing:"easeInOutCubic"})}),200)})),e(".select-main").on("select2:closing",(function(t){t.preventDefault(),setTimeout((function(){e(".select2").addClass("closing"),e(".select2-dropdown").slideUp(500,(function(){e(".select-main").select2("destroy"),e(".select-main").select2({selectOnClose:!0,templateResult:i,templateSelection:s,minimumResultsForSearch:1/0,theme:"main"}),e(".select-main").removeClass("closing")}))}),0)}))}.call(this,a(0))},,,function(e,t,a){"use strict";a.r(t);var n=a(5);new(a.n(n).a)("Image")},function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"validateEmail",(function(){return i})),a.d(t,"validatePhone",(function(){return s})),a.d(t,"validateField",(function(){return l}));var n=a(6);function i(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function s(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}function l(e,t){var a,n=e.attr("required"),l=".control-error",o="checkbox"===e.attr("type"),r=t;return""===e.val()?(e.closest(".input").removeClass("input--filled"),a=!1):(e.closest(".input").addClass("input--filled"),a=!0),r&&("email"===e.prop("type")?i(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(l).text(""),a=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(l).text("Поле заполнено некорректно"),a=!1):"phone"===e.prop("name")?s(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(l).text(""),a=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(l).text("Поле заполнено некорректно"),a=!1):(e.closest(".input").removeClass("error"),e.closest(".input").find(l).text(""),a=!0)),o&&n&&(console.log(e.prop("checked")),e.prop("checked")?(e.closest(".checkbox").removeClass("error"),a=!0):(e.closest(".checkbox").find(l).text("Для отправки сообщения необходимо согласие"),a=!1)),!r&&n&&(e.closest(".input").addClass("error"),e.closest(".input").find(l).text("Пожалуйста, заполните поле"),a=!1),"file"===e.prop("type")&&(a=!0),a}a.n(n)()({mask:"+7 (999) 999-99-99"}).mask("input[name=phone]"),e(".form--js").click((function(t){t.preventDefault();var a=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];a.push(l(e(this),t.value))})),a.includes(!1))return!1;var n=e(this).closest("form"),i=n.find("input[name=name]"),s=n.find("input[name=email]"),o=n.find("textarea[name=content]"),r=e(this);e.ajax({type:"POST",url:"send.php",dataType:"json",data:{name:i.val(),email:s.val(),message:o.val()},success:function(e){console.log(e.success),"true"===e.success&&r.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form-back--js").click((function(){var t=e(this).closest("form");return t.trigger("reset"),t.find("input").parent().removeClass("input--filled"),e(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,a(0))},,function(e,t,a){(function(e){e(".test--js").click((function(){return e(".form-response").addClass("shown activated"),!1})),e(".reset--js").click((function(){return e(".form-response").removeClass("shown"),setTimeout((function(){e(".form-response").removeClass("activated")}),500),!1}))}).call(this,a(0))}]);