!function(t){function e(e){for(var i,o,l=e[0],r=e[1],c=e[2],p=0,u=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(d&&d(e);u.length;)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={0:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;s.push([7,1,2]),a()}([,,,,,,,function(t,e,a){"use strict";a.r(e),function(t){var e=a(2),i=a.n(e),n=a(3),s=a.n(n),o=a(5),l=a.n(o),r=a(1),c=a.n(r);a(10),a(11),a(12),a(13),a(0),a(14);t(document).ready((function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(a(15),a(16),a(17),a(18),a(19),a(22),a(23),e>1150&&t(".sticky").length)new l.a(".sticky");t(".backLink").mouseover((function(){var e=t(this).width(),a=t(this).find(".nextBlock--ico").width();t(this).find(".nextBlock--ico").css("left",-(e/2-2.5*a))})).mouseleave((function(){t(this).find(".nextBlock--ico").css("left",0)})),t(".anchor").on("click","a",(function(e){e.preventDefault();var a=t(this).attr("href"),i=t(a).offset().top;t("body,html").animate({scrollTop:i+40},1e3)})),a(25),a(27)})),t(window).scroll((function(){})),t(window).on("load",(function(){if(t(".page-mission").length){var e={delay:500,minWidth:null,count:0,timeGap:300};t(".page-mission__mission-highlight").each((function(){(null===e.minWidth||t(this).width()<e.minWidth)&&(e.minWidth=t(this).width())}));var a=setTimeout((function(){t(".page-mission__mission-highlight").each((function(){var a=this,i=setTimeout((function(){var n=t(a).width(),s=parseFloat(getComputedStyle(t(a)[0]).transitionDuration)*(n/e.minWidth);t(a).css("transition",s+"s"),t(a).addClass("page-mission__mission-highlight--active"),clearTimeout(i)}),e.timeGap*e.count++)})),clearTimeout(a)}),e.delay)}t(".page-about-us").length&&t(".page-about-us__slider").each((function(){var e=t(this),a=e.find(".swiper-container"),i=e.find(".page-about-us__slider-pagination"),n=e.find(".page-about-us__slider-btn--prev"),s=e.find(".page-about-us__slider-btn--next"),o=e.find(".page-about-us__slider-pagination-item"),l=new c.a(a[0],{allowTouchMove:!1,speed:300,loop:!0,navigation:{prevEl:n[0],nextEl:s[0]},pagination:{el:i[0],type:"custom",renderCustom:function(t,e,a){o.removeClass("page-about-us__slider-pagination-item--active"),o.eq(e-1).addClass("page-about-us__slider-pagination-item--active")}}});o.on("click",(function(){var e=t(this).index();l.slideTo(e+1)}))}))})),t((function(){var e=t(".loader span"),a=t(".loader__layer"),n="/"===window.location.pathname||"/index"===window.location.pathname||"/index.html"===window.location.pathname;if(console.log(n),setTimeout((function(){window.scrollTo(0,0)}),200),t(".summerdream").length){var o=function(t){var i=Math.round(100*t);e.text(i),a.css("width",i+"%")},l=function(){t(".index-loader").css("display",""),e.text("100"),a.css("width","100%"),t("body").css("overflow","visible"),t(".summerdream").addClass("hidden"),setTimeout((function(){t(".fullpage-block").addClass("active"),t(".summerdream").addClass("hideIt"),t(".fullpage-desc span:first-child").addClass("active"),setTimeout((function(){t(".fullpage-desc span:nth-child(3)").addClass("active"),setTimeout((function(){t(".fullpage-desc span:last-child").addClass("active")}),300)}),300)}),500),setTimeout((function(){i.a.init({offset:50})}),500),t(".rellax").length&&new s.a(".rellax")};t(".index-loader").css("display","none"),t("body").css("overflow","hidden");var r={elem:t("img"),count:t("img").length},c={counter:0,startTime:null,endTime:null,time:null,progress:null,TAIL:{MIN_TIME:200,MAX_TIME:500,PARTS:5,BREAKPOINT:.6+.2*Math.random()}};r.elem.on("load",(function(){c.counter++,c.startTime||(c.startTime=(new Date).getTime()),c.progress=c.counter/r.count,c.progress=c.progress<c.TAIL.BREAKPOINT?c.progress:c.TAIL.BREAKPOINT,o(.5*c.progress)})),t(window).on("load",(function(){if(c.progress=c.progress<=0?c.TAIL.BREAKPOINT:c.progress,c.progress>=1)l();else{c.endTime=(new Date).getTime(),c.time=c.endTime-c.startTime,c.time=c.time>0?c.time:0;var t={time:null,partCounter:0,partTime:null,interval:null};t.time=c.time/c.progress*(1-c.progress),t.time=t.time<c.TAIL.MAX_TIME?t.time<c.TAIL.MIN_TIME?c.TAIL.MIN_TIME:t.time:c.TAIL.MAX_TIME,t.partCounter=0,t.partTime=t.time/c.TAIL.PARTS,t.interval=setInterval((function(){t.partCounter++,t.partCounter<c.TAIL.PARTS?o(c.progress+(1-c.progress)/c.TAIL.PARTS*t.partCounter):(l(),clearInterval(t.interval))}),t.partTime)}}))}else t("body").css("overflow","hidden"),setTimeout((function(){t(".loading").addClass("hideIt"),t("body").css("overflow","visible"),i.a.init({offset:50}),t(".rellax").length&&new s.a(".rellax")}),500)})),t((function(){if(0!==t(".fullpage-block").length){t(window).scrollTop()<1&&t(".fullpage-block").addClass("fullpage-block--start"),t(window).one("scroll",(function e(){t(window).scrollTop()>=1?t(".fullpage-block").removeClass("fullpage-block--start"):t(".fullpage-block").addClass("fullpage-block--start");var a=setTimeout((function(){t(window).scrollTop()>=1?t(".fullpage-block").removeClass("fullpage-block--start"):t(".fullpage-block").addClass("fullpage-block--start"),t(window).one("scroll",e),clearTimeout(a)}),250)}))}}))}.call(this,a(0))},,,,function(t,e,a){(function(t){function e(e){t.ajax({type:"post",url:window.location.pathname,dataType:"html",data:e,success:function(e){var a=t(e).find("[data-type=items_block]"),i=t(e).find("[data-type=pagenav_block]"),n=t(e).find("[data-type-title=kind] option"),s=t(e).find("[data-type-title=flavors] option");filterOptions.remove(),itemsBlock.remove(),pagenavBlock.remove(),selectKind.append(n),selectFlavors.append(s),filterBlock.after(a),a.after(i),filterSelects.each((function(){t(this).val(t(this).find("[selected]").val()).trigger("change")}))}})}function a(e){t.ajax({type:"post",url:window.location.pathname,dataType:"html",data:e,success:function(e){var a=t(e).find("[data-type=items_block]"),i=t(e).find("[data-type=pagenav_block]"),n=t(e).find("[data-title-type=type] option"),s=t(e).find("[data-title-type=products] option"),o=t(e).find("[data-title-type=time] option");filterOptions.remove(),itemsBlock.remove(),pagenavBlock.remove(),typeBlockSelect.append(n),productsBlockSelect.append(s),timeBlockSelect.append(o),appendItems.append(a),a.after(i),filterSelects.each((function(){t(this).val(t(this).find("[selected]").val()).trigger("change")}))}})}t((function(){t(document).on("click","[data-type=show_more_click]",(function(e){e.preventDefault();var a=t(this).parents("[data-type=main_container]"),i=a.find("[data-type=items_block]"),n=t(this).attr("data-url"),s=a.find("[data-type=pagenav_block]"),o=null,l=window.location.pathname.split("/");o="catalog"==l[1]||"recipes"==l[1]?JSON.parse(a.find("[data-type=show_more_click]").attr("data-filter")):{ajax:!0},void 0!==n&&(s.remove(),t.ajax({type:"POST",url:n,dataType:"html",data:o,success:function(e){var a=t(e).find("[data-type=item]"),n=t(e).find("[data-type=pagenav_block]");i.append(a),i.after(n)}}))})),kind=null,flavors=null,data=null,container=null,itemsBlock=null,filterBlock=null,pagenavBlock=null,filterSelects=null,filterOptions=null,selectKind=null,selectFlavors=null,t("[data-type=reset_filters_catalog]").on("click",(function(){container=t(this).parents(["data-type=catalog_container"]),itemsBlock=container.find("[data-type=items_block]"),filterBlock=container.find("[data-type=catalog_filter_block]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects=container.find("[data-type=change_filter_catalog]"),filterOptions=container.find("[data-type=change_filter_catalog] option"),selectKind=container.find("[data-type-title=kind]"),selectFlavors=container.find("[data-type-title=flavors]"),data={ajax:!0,kind:"",flavors:""},e(data)})),t("[data-type=change_filter_catalog]").on("select2:select",(function(){container=t(this).parents(["data-type=catalog_container"]),itemsBlock=container.find("[data-type=items_block]"),filterBlock=container.find("[data-type=catalog_filter_block]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects=container.find("[data-type=change_filter_catalog]"),filterOptions=container.find("[data-type=change_filter_catalog] option"),selectKind=container.find("[data-type-title=kind]"),selectFlavors=container.find("[data-type-title=flavors]"),filterSelects.each((function(){"kind"==t(this).attr("data-type-title")&&(kind=t(this).val()),"flavors"==t(this).attr("data-type-title")&&(flavors=t(this).val())})),data={ajax:!0,kind:kind,flavors:flavors},e(data)})),type=null,products=null,time=null,data=null,container=null,appendItems=null,itemsBlock=null,filterSelects=null,filterOptions=null,typeBlockSelect=null,productsBlockSelect=null,timeBlockSelect=null,pagenavBlock=null,t("[data-type=reset_filters_recipes]").on("click",(function(){container=t(this).parents(["data-type=container_recipes"]),appendItems=container.find("[data-type=append_items]"),itemsBlock=container.find("[data-type=items_block]"),filterSelects=container.find("[data-type=change_filter_recipes]"),filterOptions=container.find("[data-type=change_filter_recipes] option"),typeBlockSelect=container.find("[data-title-type=type]"),productsBlockSelect=container.find("[data-title-type=products]"),timeBlockSelect=container.find("[data-title-type=time]"),pagenavBlock=container.find("[data-type=pagenav_block]"),data={ajax:!0,type:"",products:"",time:""},a(data)})),t("[data-type=change_filter_recipes]").on("select2:select",(function(){container=t(this).parents(["data-type=container_recipes"]),appendItems=container.find("[data-type=append_items]"),itemsBlock=container.find("[data-type=items_block]"),filterSelects=container.find("[data-type=change_filter_recipes]"),filterOptions=container.find("[data-type=change_filter_recipes] option"),typeBlockSelect=container.find("[data-title-type=type]"),productsBlockSelect=container.find("[data-title-type=products]"),timeBlockSelect=container.find("[data-title-type=time]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects.each((function(){"type"==t(this).attr("data-title-type")&&(type=t(this).val()),"products"==t(this).attr("data-title-type")&&(products=t(this).val()),"time"==t(this).attr("data-title-type")&&(time=t(this).val())})),data={ajax:!0,type:type,products:products,time:time},a(data)}))}))}).call(this,a(0))},function(t,e,a){(function(t){t((function(){t(".map").length&&ymaps.ready((function(){t("[data-type=region_select]").on("select2:select",(function(){var e=t(this).parents("[data-type=map_container]"),a=e.find("[data-type=shops_container]"),i=e.find("[data-type=shops_block]"),n=t(this).val();t.ajax({type:"post",url:"/world/oeskimo/",data:{ajax:!0,region:n},success:function(e){var n=t(e).find("[data-type=shops_block]");i.remove(),a.append(n)}})}));var e=new ymaps.Map("map",{center:[66.413951,94.241942],zoom:3,controls:[]}),a=ymaps.templateLayoutFactory.createClass('<div class="map__clusterer">{{ properties.geoObjects.length }}</div>'),i=ymaps.templateLayoutFactory.createClass('<address class="address-map" ><p><b>$[properties.name]</b><br/><ul class="balloon-info" ><li><strong>Адрес:&nbsp;</strong>$[properties.address]</li></ul></address>'),n=new ymaps.Clusterer({clusterIcons:[{href:"/local/templates/main/assets/images/map-cluster.svg",size:[43,53],offset:[-21.5,-53]}],clusterIconContentLayout:a}),s={};t("[data-type=shop_select]").each((function(){var a=t(this).attr("data-coord-x"),o=t(this).attr("data-coord-y"),l=t(this).attr("data-id");s[l]=new ymaps.Placemark([a,o],{name:t(this).attr("data-name"),address:t(this).attr("data-address")},{balloonContentLayout:i,balloonOffset:[5,0],balloonCloseButton:!0,balloonMinWidth:150,balloonMaxWidth:200,balloonMinHeught:150,balloonMaxHeught:200,iconLayout:"default#image",iconImageHref:"/local/templates/main/assets/images/map-placemark.svg",iconImageSize:[43,53],iconImageOffset:[-21.5,-53]}),s[l].events.add("click",(function(a){var i=t(".map__item[data-id="+l+"]");t("[data-type=shop_select]").removeClass("map__item--active"),i.addClass("map__item--active"),e.setCenter(s[l].geometry.getCoordinates(),15)})),n.add(s[l])})),e.geoObjects.add(n),t(document).on("click","[data-type=shop_select]",(function(){var a=[];coordinateX=t(this).attr("data-coord-x"),coordinateY=t(this).attr("data-coord-y"),id=t(this).attr("data-id"),t(this).addClass("map__item--active").siblings().removeClass("map__item--active"),a.push(coordinateX),a.push(coordinateY),e.panTo([a],{flying:!0,checkZoomRange:!0}),e.setCenter(a,15),s[id].balloon.open()})),t(document).on("change","[data-type=region_select]",(function(){var a=t("[data-type=region_select] option:selected").text(),i=[],n=null;ymaps.geocode(a,{results:1}).then((function(t){var s=t.geoObjects.get(0);"Все"!=a?(i.push(s.geometry.getCoordinates()[0]),i.push(s.geometry.getCoordinates()[1]),n=10):(i=[66.413951,94.241942],n=3),e.panTo([i],{flying:!0,checkZoomRange:!0}),e.setCenter(i,n)}))}))}))}))}).call(this,a(0))},function(t,e,a){(function(t){window.addEventListener("load",(function(){if(0!==t(".tab-nav").length){if(window.matchMedia("( min-width: 1280px )").matches){var e=function(){a.hasClass("tab-nav--sticky")?a.scrollLeft(i.scrollLeft()):i.scrollLeft(a.scrollLeft()),a.toggleClass("tab-nav--sticky"),n.toggleClass("left-container--sticky")},a=t(".tab-nav"),i=a.clone(),n=t(".left-container--tab-nav");i.css("pointer-events","all"),n.append(i);var s=!1;t(window).scrollTop()+40>=a.position().top&&(s=!0,e()),t(window).on("scroll",(function(){s?t(window).scrollTop()+40<a.position().top&&(s=!1,e()):t(window).scrollTop()+40>=a.position().top&&(s=!0,e())}))}t(".tab-nav").scrollLeft(t(".tab-nav__item--active").offset().left-t(window).width()/2+t(".tab-nav__item--active").width()/2)}}))}).call(this,a(0))},function(t,e,a){},function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"mainSliderOptions",(function(){return w}));var i=a(1),n=a.n(i);if(t(".fullpage-slider").length){var s=t(".fullpage-slider").data("image-pagination"),o={slidesPerView:2,centeredSlides:!0,simulateTouch:!1,speed:1e3,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".fullpage-slider .swiper-pagination",clickable:!0,renderBullet:function(t,e){return'<div class="'.concat(e,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t        <mask id="mask').concat(t+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n\t        <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n\t        </mask>\n\t        <g mask="url(#mask').concat(t+1,')">\n\t          <rect x="1" y="8" width="117" height="103" fill="url(#pattern').concat(t+1,')"/>\n\t          <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n\t          <path class="red" d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n\t        </g>\n\t        <defs>\n\t        <pattern id="pattern').concat(t+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n\t          <use xlink:href="#image').concat(t+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n\t          <image id="image').concat(t+1,'" width="1086" height="930" xlink:href="').concat(s[t],'"/>\n\t        </pattern></defs></svg></div>')}},on:{slideChangeTransitionStart:function(){t(".fullpage-title").removeClass("active"),t(".fullpage-title").addClass("remove");var e=t(".fullpage-slider .swiper-slide-active").data("title"),a=t(".fullpage-slider .swiper-slide-active"),i=t(".fullpage-slider .swiper-slide:not(.swiper-slide-active)");i.addClass("remove"),a.addClass("active"),t(".fullpage-slider").removeClass("active"),setTimeout((function(){i.removeClass("active"),t(".fullpage-title h2").html(e),t(".fullpage-title").addClass("active"),setTimeout((function(){t(".fullpage-title").removeClass("remove"),t(".fullpage-slider").addClass("active"),i.removeClass("remove")}),600)}),800)}}};new n.a(".fullpage-slider",o)}if(t(".carousel").length){var l=["Интернет–магазин","Экскурсия на фабрику «Чистая линия»","О!Эскимо","Смотровая площадка PANORAMA360"];new n.a(".carousel",{slidesPerView:1,effect:"fade",simulateTouch:!1,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".carousel .swiper-pagination",clickable:!0,renderBullet:function(t,e){return'<div class="'+e+'"><div class="circle"><svg id="svg" width="20" height="20" viewport="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">    <circle r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle>    <circle id="bar" r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle></svg></div>'+l[t]+"</div>"}},on:{slideChangeTransitionStart:function(e){t(".slider-image img").removeClass("active");var a=t(".slider-image"),i=t(a[0]).find("img")[e.realIndex],n=t(a[1]).find("img")[e.realIndex],s=t(".carousel .swiper-slide")[e.previousIndex];t(s).addClass("hideIt"),t(i).addClass("active"),t(n).addClass("active"),setTimeout((function(){return t(s).removeClass("hideIt")}),800)}}})}if(t(".rollerIt").length)new n.a(".rollerIt",{slidesPerView:"auto",spaceBetween:40,navigation:{nextEl:".card-slider .swiper-next",prevEl:".card-slider .swiper-prev"}});if(t(".rollerItThree").length&&t(".rollerItThree").each((function(){var e=t(this),a=e.find(".rollerItCont"),i=new n.a(a[0],{slidesPerView:1,simulateTouch:!1,autoHeight:!0}),s=new n.a(".rollerItPag",{slidesPerView:"3",spaceBetween:20}),o=e.find(".fest__pagination-item");function l(){o.removeClass("fest__pagination-item--active");var t=i.realIndex;o.eq(t).addClass("fest__pagination-item--active")}i.on("slideChange",l),l(),o.on("click",(function(){var e=t(this).index();i.slideTo(e),l()})),e.find(".fest__button").on("click",(function(){t(this).hasClass("swiper-prev1")?(i.slidePrev(),s.slidePrev()):(i.slideNext(),s.realIndex<2&&s.slideNext()),l()}))})),t(".slider-aside").each((function(){var e=t(this),a=e.find(".swiper-container"),i=e.find(".slider-aside__button--prev"),s=e.find(".slider-aside__button--next");new n.a(a[0],{allowTouchMove:!1,navigation:{prevEl:i[0],nextEl:s[0]}})})),0!==t(".production__slider").length){var r=[250,145,105],c=r.map((function(t){return t/r[0]})),d=t(".my-slider__container").length,p=!1,u=0,f=-((3*d-1)*r[2]+r[1]+3*d*20),m=window.matchMedia("(min-width: 1024px)");m.matches&&(r[0]=450,c=r.map((function(t){return t/r[0]}))),m.addListener((function(){r[0]>=450?r[0]=250:r[0]=450,c=r.map((function(t){return t/r[0]})),t(".my-slider__container").each((function(){var e=t(this).index(),a=Math.abs(3*d-e),i=r[a]?r[a]:r[2],n=c[a]?c[a]:c[2];t(this).css("width","".concat(i,"px")),t(this).find(".my-slider__slide").css("transform","scale(".concat(n,")"))}))}));for(var h=0;h<6;h++)for(var v=0;v<d;v++)t(".my-slider__wrapper").append(t(".my-slider__container").eq(v).clone());t(".my-slider__container").each((function(){var e=t(this).index(),a=Math.abs(3*d-e),i=r[a]?r[a]:r[2],n=c[a]?c[a]:c[2];t(this).css("width","".concat(i,"px")),t(this).find(".my-slider__slide").css("transform","scale(".concat(n,")"))})),t(".my-slider__wrapper").css("transform","translateX(".concat(f,"px)"));var g=new n.a(".production__slider-main",{speed:750,loop:!0,allowTouchMove:!1,effect:"fade",fadeEffect:{crossFade:!0},autoHeight:!0,spaceBetween:20});t(".production__slider-btn--prev").on("click",(function(){if(!p){p=!0,t(".my-slider__container").each((function(){var e=t(this).index(),a=Math.abs(3*d-1-e),i=r[a]?r[a]:r[2],n=c[a]?c[a]:c[2];t(this).css("width","".concat(i,"px")),t(this).find(".my-slider__slide").css("transform","scale(".concat(n,")"))})),f+=r[2]+20,t(".my-slider__wrapper").css("transform","translateX(".concat(f,"px)")),g.slidePrev();var e=setTimeout((function(){t(".my-slider__container").last().detach().prependTo(t(".my-slider__wrapper")),u-=r[2]+20,t(".my-slider__main").css("transform","translateX(".concat(u,"px)")),p=!1,clearTimeout(e)}),750)}})),t(".production__slider-btn--next").on("click",(function(){if(!p){p=!0,t(".my-slider__container").each((function(){var e=t(this).index(),a=Math.abs(3*d+1-e),i=r[a]?r[a]:r[2],n=c[a]?c[a]:c[2];t(this).css("width","".concat(i,"px")),t(this).find(".my-slider__slide").css("transform","scale(".concat(n,")"))})),f-=r[2]+20,t(".my-slider__wrapper").css("transform","translateX(".concat(f,"px)")),g.slideNext();var e=setTimeout((function(){t(".my-slider__container").first().detach().appendTo(t(".my-slider__wrapper")),u+=r[2]+20,t(".my-slider__main").css("transform","translateX(".concat(u,"px)")),p=!1,clearTimeout(e)}),750)}}))}var y=t(".main-slider").data("image-pagination"),w={loop:!0,speed:1e3,loopAdditionalSlides:10,grabCursor:!0,watchSlidesProgress:!0,navigation:{nextEl:".slideshow-container .swiper-next",prevEl:".slideshow-container .swiper-prev"},pagination:{el:".slideshow-container .swiper-pagination",clickable:!0,renderBullet:function(t,e){return'<div class="'.concat(e,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <mask id="mask').concat(t+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n          <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n          </mask>\n          <g mask="url(#mask').concat(t+1,')">\n            <rect x="-3" y="6" width="122" height="103" fill="url(#pattern').concat(t+1,')"/>\n            <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n          </g>\n          <defs>\n          <pattern id="pattern').concat(t+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n            <use xlink:href="#image').concat(t+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n            <image id="image').concat(t+1,'" width="1086" height="930" xlink:href="').concat(y[t],'"/>\n          </pattern></defs></svg></div>')}},on:{init:function(){},imagesReady:function(){},progress:function(){for(var t=0;t<this.slides.length;t++){var e=this.slides[t].progress*(.5*this.width);this.slides[t].querySelector(".slide-bgimg").style.transform="translateX("+e+"px)"}},touchStart:function(){for(var t=0;t<this.slides.length;t++)this.slides[t].style.transition=""},setTransition:function(t,e){for(var a=0;a<this.slides.length;a++)this.slides[a].style.transition=e+"ms",this.slides[a].querySelector(".slide-bgimg").style.transition=e+"ms"}}};if(t(".main-slider").length)new n.a(".main-slider",w);t((function(){t(".history").length>0&&t(".history").each((function(){var e=t(this),a=e.find(".swiper-container"),i=new n.a(a[0],{loop:!0,speed:500,allowTouchMove:!1});i.on("slideChange",o);var s=e.find(".history__pagination-item");function o(){s.removeClass("history__pagination-item--active");var t=i.realIndex;s.eq(t).addClass("history__pagination-item--active")}o(),s.on("click",(function(){var e=t(this).index()+1;i.slideTo(e),o()})),e.find(".history__button").on("click",(function(){t(this).hasClass("history__button--prev")?i.slidePrev():i.slideNext(),o()}))}))}))}.call(this,a(0))},function(t,e,a){(function(t){t(".page-header").mousemove((function(e){var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0);t(".bubble").css("left",0),a<=1025?t(".bubble").css("top",e.clientY-125):t(".bubble").css("top",e.clientY-160)})),t(".page-header").mouseout((function(){t(".bubble").css("left","-50px")})),t(".mobile-nav--js").click((function(){t("body").toggleClass("activated"),t(".page-header").toggleClass("active"),t(this).hasClass("active")&&t(".page-header, .catalogFilter").removeClass("active"),t(this).toggleClass("active")})),t(".catalogFilter--js").click((function(){t("body").toggleClass("activated"),t(".mobile-nav--js").toggleClass("active"),t(".catalogFilter").toggleClass("active")})),t(document).click((function(e){var a=t(".page-header.active"),i=t(".mobile-nav--js"),n=t(".catalogFilter--js");0===i.has(e.target).length&&0===a.has(e.target).length&&0===n.has(e.target).length&&0===t(".catalogFilter").has(e.target).length&&(t("body").removeClass("activated"),a.removeClass("active"),i.removeClass("active"),t(".catalogFilter").removeClass("active"))}))}).call(this,a(0))},function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"showMore",(function(){return s}));var i=a(2),n=a.n(i);function s(){var e=t(".moreDetail--js").data("num"),a=t(".moreDetail--js").data("more"),i=t(".moreDetail--js .more__item--js"),s=a||3,o=t(".showMore--js"),l=i.length;o.hide(),i.velocity("slideUp",{duration:300});var r=e||8;l>r&&o.show(),i.slice(0,r).slideDown(),o.click((function(){var t=i.filter(":visible").length;return i.slice(t-1,t+s).slideDown(),i.filter(":visible").length>=l&&o.hide(),setTimeout((function(){n.a.refresh({offset:50})}),400),!1}))}t(document).on("click",".accordion__item--sm",(function(e){var a=this;t(this).hasClass("active")?0===t(e.target).closest(".accordion-body").length&&(t(".accordion-body").removeClass("shown"),t(".accordion__item").removeClass("active"),t(this).removeClass("active").find(".accordion-body").removeClass("shown"),setTimeout((function(){t(a).find(".accordion-body").removeClass("ellipses")}),350),setTimeout((function(){n.a.refresh({offset:50})}),400)):(t(".accordion-body").removeClass("shown"),t(".accordion__item").removeClass("active"),t(this).removeClass("active"),t(this).addClass("active").find(".accordion-body").addClass("shown ellipses"),setTimeout((function(){n.a.refresh({offset:50})}),400))})),t(document).on("click",".accordion__item--js",(function(e){0===t(e.target).closest(".accordion-body").length&&(t(this).hasClass("active")?(t(".accordion__item").removeClass("active"),t(this).removeClass("active").find(".accordion-body").slideUp()):(t(".accordion__item").removeClass("active").find(".accordion-body").slideUp(),t(this).removeClass("active"),t(this).addClass("active").find(".accordion-body").slideDown()),setTimeout((function(){n.a.refresh({offset:50})}),400))})),s()}.call(this,a(0))},function(t,e,a){"use strict";a.r(e),function(t){var e=a(2),i=a.n(e);function n(e,a){var n=t(".filter__item--js");t(".btn--js").hide(),n.velocity({opacity:0,translateY:"-20px"},{display:"none"},{duration:500}),"*"===e?n.velocity({opacity:1,translateY:"0px"},{display:"block"},{duration:500}):(t(n).filter((function(a,i){return t(i)[0].dataset.text.startsWith(e)})).velocity({opacity:1,translateY:"0px"},{display:"block"},{delay:300,duration:500}),setTimeout((function(){i.a.refresh({offset:50})}),500)),t(".filter--js li").removeClass("active"),a.addClass("active")}t(".filter--js").on("click","li:not(.last)",(function(){t(this).hasClass("active")||n(t(this).data("text"),t(this))})),t(".filter--js").on("click","li.last",(function(){var e=t(".filter--js li:first-child");e.hasClass("active")||n(e.data("text"),e)}))}.call(this,a(0))},function(t,e,a){"use strict";a.r(e),function(t){a(20),a(21);function e(e){return void 0!==e.element&&void 0!==e.element.dataset.img?t('<span><img src="'+e.element.dataset.img+'" class="img-flag" /> '+e.text+"</span>"):t("<span>"+e.text+"</span>")}function i(e,a){var i,n=t(a.prevObject).closest(".select2").prev().data("title");return(i=void 0!==e.element&&void 0!==e.element.dataset.img?t('<span><img class="img-flag" /> <span></span></span>'):t('<span><span class="select2-selection-text"></span></span>')).find("span").html('<span class="title">'.concat(n,"</span>").concat(e.text)),i.find("img").attr("src",e.element.dataset.img),i}t((function(){t(".select-template").each((function(){var a=t(this),n=0!==a.closest(".catalogFilter__item").length?a.closest(".catalogFilter__item"):a.closest(".map__select-wrapper");"static"===getComputedStyle(n[0]).position&&n.css("position","relative"),a.select2({minimumResultsForSearch:1/0,theme:a.data("theme"),dropdownParent:n,selectOnClose:!0,templateResult:e,templateSelection:i}),a.on("select2:select",(function(e){t(".catalogFilter--js span").text(e.params.data.text)})),a.on("select2:open",(function(){n.css("z-index","100000");var t=n.find(".select2-dropdown");t.hide();var e=setTimeout((function(){t.slideDown({duration:500,easing:"easeInOutCubic"}),clearTimeout(e)}),0)})),a.on("select2:closing",(function(t){t.preventDefault();var s=n.find(".select2-dropdown"),o=setTimeout((function(){n.css("z-index",""),n.find(".select2").addClass("closing"),s.slideUp(500,(function(){var t=setTimeout((function(){a.select2("destroy"),a.select2({minimumResultsForSearch:1/0,theme:a.data("theme"),dropdownParent:n,selectOnClose:!0,width:"100%",templateResult:e,templateSelection:i}),a.removeClass("closing"),n.css("z-index",""),clearTimeout(t)}),200)})),clearTimeout(o)}),0)}))}))}))}.call(this,a(0))},,,function(t,e,a){"use strict";a.r(e),function(t){var e=a(4),i=a.n(e),n=a(1),s=a.n(n);new i.a("Image"),t(".myModal").each((function(){var e=t(this).attr("href"),a=new i.a("Modal",{attach:t(this),content:t(e),closeButton:!1,addClass:t(this).data("class"),onOpen:function(){if(t(".main-slider").length&&"block"===t(e).css("display")){var a=t(e).find(".main-slider"),i=t(e).find(".main-slider").data("image-pagination"),n=parseFloat(t(e).find(".main-slider").data("num")),o=t(e).find(".swiper-prev"),l=t(e).find(".swiper-next"),r=t(e).find(".swiper-pagination"),c={loop:!0,speed:1e3,loopAdditionalSlides:10,grabCursor:!0,watchSlidesProgress:!0,navigation:{nextEl:l[0],prevEl:o[0]},pagination:{el:r[0],clickable:!0,renderBullet:function(t,e){return'<div class="'.concat(e,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <mask id="mask').concat(t+n+21,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n                  <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n                  </mask>\n                  <g mask="url(#mask').concat(t+n+21,')">\n                    <rect x="-3" y="6" width="122" height="103" fill="url(#pattern').concat(t+n+21,')"/>\n                    <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n                  </g>\n                  <defs>\n                  <pattern id="pattern').concat(t+n+21,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n                    <use xlink:href="#image').concat(t+n+21,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n                    <image id="image').concat(t+n+21,'" width="1086" height="930" xlink:href="').concat(i[t],'"/>\n                  </pattern></defs></svg></div>')}},on:{progress:function(){for(var t=0;t<this.slides.length;t++){var e=this.slides[t].progress*(.5*this.width);this.slides[t].querySelector(".slide-bgimg").style.transform="translateX("+e+"px)"}},touchStart:function(){for(var t=0;t<this.slides.length;t++)this.slides[t].style.transition=""},setTransition:function(t,e){for(var a=0;a<this.slides.length;a++)this.slides[a].style.transition=e+"ms",this.slides[a].querySelector(".slide-bgimg").style.transition=e+"ms"}}};setTimeout((function(){new s.a(a[0],c)}),100)}},onCloseComplete:function(){t(".main-slider").length}});t(".close-popup--js").click((function(){a.close()}))}))}.call(this,a(0))},function(t,e,a){"use strict";a.r(e),function(t){a(24);function e(t){var e="textContent"in document?"textContent":"innerText",a=t.value;t.parentNode.getElementsByTagName("output")[0][e]=a}t("#play").click((function(){var e=t("#video");t(this).fadeOut("500"),e.get(0).play(),e.attr("controls","")})),t('input[type="range"]').rangeslider({polyfill:!1,onInit:function(){e(this.$element[0])}}),t(document).on("input",'input[type="range"]',(function(a){e(a.target);var i=t(this).closest(".referral__calc-block").find("output"),n=i[0].innerText*i[1].innerText*.1;"summ"===a.target.id&&(t(".result__block").removeClass("active"),a.target.value<250?t(".result__block:first-child").addClass("active"):parseInt(a.target.value,10)>=250&&parseInt(a.target.value,10)<5e3?t(".result__block:nth-child(2)").addClass("active"):t(".result__block:nth-child(3)").addClass("active")),t(".result__block--js .result .sum").text(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))}))}.call(this,a(0))},,function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"validateEmail",(function(){return l})),a.d(e,"validatePhone",(function(){return r})),a.d(e,"validateField",(function(){return c}));var i=a(6),n=a.n(i),s=a(2),o=a.n(s);function l(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}function r(t){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(t)}function c(t,e){var a,i=t.attr("required"),n=".control-error",s="checkbox"===t.attr("type"),o=e;return""===t.val()?(t.closest(".input").removeClass("input--filled"),a=!1):(t.closest(".input").addClass("input--filled"),a=!0),o&&("email"===t.prop("type")?l(o)?(t.closest(".input").removeClass("error"),t.closest(".input").find(n).text(""),a=!0):(t.closest(".input").addClass("error"),t.closest(".input").find(n).text("Поле заполнено некорректно"),a=!1):"phone"===t.prop("name")?r(o)?(t.closest(".input").removeClass("error"),t.closest(".input").find(n).text(""),a=!0):(t.closest(".input").addClass("error"),t.closest(".input").find(n).text("Поле заполнено некорректно"),a=!1):(t.closest(".input").removeClass("error"),t.closest(".input").find(n).text(""),a=!0)),s&&i&&(t.prop("checked")?(t.closest(".checkbox").find(n).text(""),a=!0):(t.closest(".checkbox").find(n).text("Для отправки сообщения необходимо согласие"),a=!1)),!o&&i&&(t.closest(".input").addClass("error"),t.closest(".input").find(n).text("Пожалуйста, заполните поле"),a=!1),"file"===t.prop("type")&&(a=!0),a}n()({mask:"+7 (999) 999-99-99"}).mask("input[name=phone]"),t(".form--js").on("click",(function(e){e.preventDefault();var a=window.location.pathname.split("/"),i=[];if(t(this).closest("form").find("input, textarea").each((function(){var e=t(this)[0];i.push(c(t(this),e.value))})),i.includes(!1))return!1;var n=t(this).closest("form"),s=n.find("input[name=name]"),l=n.find("input[name=email]"),r=n.find("input[name=phone]"),d=n.find("input[name=birth]"),p=n.find("textarea[name=content]"),u=n.attr("data-type-title"),f=t(this),m=null,h=null;"/contacts/"===window.location.pathname&&(m="/local/templates/main/include/ajax/contact/contact.php",h={name:s.val(),email:l.val(),text:p.val(),phone:r.val(),type:u}),"/press-center/news/"!==window.location.pathname&&"/press-center/press/"!==window.location.pathname&&"/for-buyer/interesting/"!==window.location.pathname&&"/recipes/"!==window.location.pathname&&"recipes"!=a[1]&&"news"!=a[2]||(m="/local/templates/main/include/ajax/side/subscribe.php",h={email:l.val()}),"/for-buyer/faq/"===window.location.pathname&&(m="/local/templates/main/include/ajax/side/faq.php",h={email:l.val(),text:p.val()}),"/for-buyer/reviews/"===window.location.pathname&&(m="/local/templates/main/include/ajax/side/review.php",h={name:s.val(),email:l.val(),text:p.val(),phone:r.val(),type:u}),"ref"==a[1]&&(m="/local/templates/main/include/ajax/contact/application.php",h={name:s.val(),birthdate:d.val(),email:l.val(),phone:r.val(),type:u}),t.ajax({type:"POST",url:m,dataType:"json",data:h,success:function(e){if(!0===e.success){var a=matchMedia("(min-width: 1024px)");a.matches?f.closest(".form-inner").css("visibility","hidden").css("opacity",0).next().slideDown(500).css("display","flex"):f.closest(".form-inner").css("display","none").next().css("display","flex"),o.a.refresh(),t(".form-back--js").one("click",(function(){var e=t(this).closest("form");return e.trigger("reset"),e.find("input").parent().removeClass("input--filled"),a.matches?t(this).closest(".form-send").hide().prev().css("visibility","").css("opacity",1):t(this).closest(".form-send").hide().prev().css("display",""),o.a.refresh(),!1})),t(".form-response").addClass("shown activated"),t(".reset--js").one("click",(function(){return t(".form-response").removeClass("shown"),setTimeout((function(){t(".form-response").removeClass("activated")}),500),!1}))}}})}))}.call(this,a(0))},,function(t,e){}]);