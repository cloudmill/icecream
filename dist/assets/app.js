!function(e){function t(t){for(var n,o,l=t[0],r=t[1],c=t[2],p=0,u=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(d&&d(t);u.length;)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={0:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;s.push([7,1,2]),a()}([,,,,,,,function(e,t,a){"use strict";a.r(t),function(e){var t=a(1),n=a.n(t),i=a(3),s=a.n(i),o=a(5),l=a.n(o),r=a(2),c=a.n(r);a(10),a(11),a(12),a(13),a(0),a(14);e(document).ready((function(){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(a(15),a(16),a(17),a(18),a(19),a(22),a(23),t>1150&&e(".sticky").length)new l.a(".sticky");e(".backLink").mouseover((function(){var t=e(this).width(),a=e(this).find(".nextBlock--ico").width();e(this).find(".nextBlock--ico").css("left",-(t/2-2.5*a))})).mouseleave((function(){e(this).find(".nextBlock--ico").css("left",0)})),a(25),a(27)})),e(window).scroll((function(){})),e(window).on("load",(function(){if(e(".page-mission").length){var t={delay:500,minWidth:null,count:0,timeGap:300};e(".page-mission__mission-highlight").each((function(){(null===t.minWidth||e(this).width()<t.minWidth)&&(t.minWidth=e(this).width())}));var a=setTimeout((function(){e(".page-mission__mission-highlight").each((function(){var a=this,n=setTimeout((function(){var i=e(a).width(),s=parseFloat(getComputedStyle(e(a)[0]).transitionDuration)*(i/t.minWidth);e(a).css("transition",s+"s"),e(a).addClass("page-mission__mission-highlight--active"),clearTimeout(n)}),t.timeGap*t.count++)})),clearTimeout(a)}),t.delay)}e(".page-about-us").length&&e(".page-about-us__slider").each((function(){var t=e(this),a=t.find(".swiper-container"),n=t.find(".page-about-us__slider-pagination"),i=t.find(".page-about-us__slider-btn--prev"),s=t.find(".page-about-us__slider-btn--next"),o=t.find(".page-about-us__slider-pagination-item"),l=new c.a(a[0],{allowTouchMove:!1,speed:300,loop:!0,navigation:{prevEl:i[0],nextEl:s[0]},pagination:{el:n[0],type:"custom",renderCustom:function(e,t,a){o.removeClass("page-about-us__slider-pagination-item--active"),o.eq(t-1).addClass("page-about-us__slider-pagination-item--active")}}});o.on("click",(function(){var t=e(this).index();l.slideTo(t+1)}))}))})),e((function(){var t=e(".loader span"),a=e(".loader__layer"),i="/"===window.location.pathname||"/index"===window.location.pathname||"/index.html"===window.location.pathname;if(console.log(i),setTimeout((function(){window.scrollTo(0,0)}),200),e(".summerdream").length){var o=function(e){var n=Math.round(100*e);t.text(n),a.css("width",n+"%")},l=function(){e(".index-loader").css("display",""),t.text("100"),a.css("width","100%"),e("body").css("overflow","visible"),e(".summerdream").addClass("hidden"),setTimeout((function(){e(".fullpage-block").addClass("active"),e(".summerdream").addClass("hideIt"),e(".fullpage-desc span:first-child").addClass("active"),setTimeout((function(){e(".fullpage-desc span:nth-child(3)").addClass("active"),setTimeout((function(){e(".fullpage-desc span:last-child").addClass("active")}),300)}),300)}),500),setTimeout((function(){n.a.init({offset:50})}),500),e(".rellax").length&&new s.a(".rellax")};e(".index-loader").css("display","none"),e("body").css("overflow","hidden");var r={elem:e("img"),count:e("img").length},c={counter:0,startTime:null,endTime:null,time:null,progress:null,TAIL:{MIN_TIME:200,MAX_TIME:500,PARTS:5,BREAKPOINT:.6+.2*Math.random()}};r.elem.on("load",(function(){c.counter++,c.startTime||(c.startTime=(new Date).getTime()),c.progress=c.counter/r.count,c.progress=c.progress<c.TAIL.BREAKPOINT?c.progress:c.TAIL.BREAKPOINT,o(.5*c.progress)})),e(window).on("load",(function(){if(c.progress=c.progress<=0?c.TAIL.BREAKPOINT:c.progress,c.progress>=1)l();else{c.endTime=(new Date).getTime(),c.time=c.endTime-c.startTime,c.time=c.time>0?c.time:0;var e={time:null,partCounter:0,partTime:null,interval:null};e.time=c.time/c.progress*(1-c.progress),e.time=e.time<c.TAIL.MAX_TIME?e.time<c.TAIL.MIN_TIME?c.TAIL.MIN_TIME:e.time:c.TAIL.MAX_TIME,e.partCounter=0,e.partTime=e.time/c.TAIL.PARTS,e.interval=setInterval((function(){e.partCounter++,e.partCounter<c.TAIL.PARTS?o(c.progress+(1-c.progress)/c.TAIL.PARTS*e.partCounter):(l(),clearInterval(e.interval))}),e.partTime)}}))}else e("body").css("overflow","hidden"),setTimeout((function(){e(".loading").addClass("hideIt"),e("body").css("overflow","visible"),n.a.init({offset:50}),e(".rellax").length&&new s.a(".rellax")}),500)}))}.call(this,a(0))},,,,function(e,t,a){(function(e){function t(t){e.ajax({type:"post",url:window.location.pathname,dataType:"html",data:t,success:function(t){var a=e(t).find("[data-type=items_block]"),n=e(t).find("[data-type=pagenav_block]"),i=e(t).find("[data-type-title=kind] option"),s=e(t).find("[data-type-title=flavors] option");filterOptions.remove(),itemsBlock.remove(),pagenavBlock.remove(),selectKind.append(i),selectFlavors.append(s),filterBlock.after(a),itemsBlock.after(n),filterSelects.each((function(){e(this).val(e(this).find("[selected]").val()).trigger("change")}))}})}function a(t){e.ajax({type:"post",url:window.location.pathname,dataType:"html",data:t,success:function(t){var a=e(t).find("[data-type=items_block]"),n=e(t).find("[data-type=pagenav_block]"),i=e(t).find("[data-title-type=type] option"),s=e(t).find("[data-title-type=products] option"),o=e(t).find("[data-title-type=time] option");filterOptions.remove(),itemsBlock.remove(),pagenavBlock.remove(),typeBlockSelect.append(i),productsBlockSelect.append(s),timeBlockSelect.append(o),appendItems.append(a),itemsBlock.after(n),filterSelects.each((function(){e(this).val(e(this).find("[selected]").val()).trigger("change")}))}})}e((function(){e(document).on("click","[data-type=show_more_click]",(function(t){t.preventDefault();var a=e(this).parents("[data-type=main_container]"),n=a.find("[data-type=items_block]"),i=e(this).attr("data-url"),s=a.find("[data-type=pagenav_block]");void 0!==i&&e.ajax({type:"POST",url:i,dataType:"html",data:{ajax:!0},success:function(t){s.remove();var a=e(t).find("[data-type=item]"),i=e(t).find("[data-type=pagenav_block]");n.append(a),n.after(i)}})})),kind=null,flavors=null,data=null,container=null,itemsBlock=null,filterBlock=null,pagenavBlock=null,filterSelects=null,filterOptions=null,selectKind=null,selectFlavors=null,e("[data-type=reset_filters_catalog]").on("click",(function(){container=e(this).parents(["data-type=catalog_container"]),itemsBlock=container.find("[data-type=items_block]"),filterBlock=container.find("[data-type=catalog_filter_block]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects=container.find("[data-type=change_filter_catalog]"),filterOptions=container.find("[data-type=change_filter_catalog] option"),selectKind=container.find("[data-type-title=kind]"),selectFlavors=container.find("[data-type-title=flavors]"),data={ajax:!0,kind:"",flavors:""},t(data)})),e("[data-type=change_filter_catalog]").on("select2:select",(function(){container=e(this).parents(["data-type=catalog_container"]),itemsBlock=container.find("[data-type=items_block]"),filterBlock=container.find("[data-type=catalog_filter_block]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects=container.find("[data-type=change_filter_catalog]"),filterOptions=container.find("[data-type=change_filter_catalog] option"),selectKind=container.find("[data-type-title=kind]"),selectFlavors=container.find("[data-type-title=flavors]"),filterSelects.each((function(){"kind"==e(this).attr("data-type-title")&&(kind=e(this).val()),"flavors"==e(this).attr("data-type-title")&&(flavors=e(this).val())})),data={ajax:!0,kind:kind,flavors:flavors},console.log(data),t(data)})),type=null,products=null,time=null,data=null,container=null,appendItems=null,itemsBlock=null,filterSelects=null,filterOptions=null,typeBlockSelect=null,productsBlockSelect=null,timeBlockSelect=null,pagenavBlock=null,e("[data-type=reset_filters_recipes]").on("click",(function(){container=e(this).parents(["data-type=container_recipes"]),appendItems=container.find("[data-type=append_items]"),itemsBlock=container.find("[data-type=items_block]"),filterSelects=container.find("[data-type=change_filter_recipes]"),filterOptions=container.find("[data-type=change_filter_recipes] option"),typeBlockSelect=container.find("[data-title-type=type]"),productsBlockSelect=container.find("[data-title-type=products]"),timeBlockSelect=container.find("[data-title-type=time]"),pagenavBlock=container.find("[data-type=pagenav_block]"),data={ajax:!0,type:"",products:"",time:""},a(data)})),e("[data-type=change_filter_recipes]").on("select2:select",(function(){container=e(this).parents(["data-type=container_recipes"]),appendItems=container.find("[data-type=append_items]"),itemsBlock=container.find("[data-type=items_block]"),filterSelects=container.find("[data-type=change_filter_recipes]"),filterOptions=container.find("[data-type=change_filter_recipes] option"),typeBlockSelect=container.find("[data-title-type=type]"),productsBlockSelect=container.find("[data-title-type=products]"),timeBlockSelect=container.find("[data-title-type=time]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects.each((function(){"type"==e(this).attr("data-title-type")&&(type=e(this).val()),"products"==e(this).attr("data-title-type")&&(products=e(this).val()),"time"==e(this).attr("data-title-type")&&(time=e(this).val())})),data={ajax:!0,type:type,products:products,time:time},a(data)}))}))}).call(this,a(0))},function(e,t,a){(function(e){e((function(){e(".map").length&&ymaps.ready((function(){e("[data-type=region_select]").on("select2:select",(function(){var t=e(this).parents("[data-type=map_container]"),a=t.find("[data-type=shops_container]"),n=t.find("[data-type=shops_block]"),i=e(this).val();e.ajax({type:"post",url:"/world/oeskimo/",data:{ajax:!0,region:i},success:function(t){var i=e(t).find("[data-type=shops_block]");n.remove(),a.append(i)}})}));var t=new ymaps.Map("map",{center:[66.413951,94.241942],zoom:3,controls:[]}),a=ymaps.templateLayoutFactory.createClass('<div class="map__clusterer">{{ properties.geoObjects.length }}</div>'),n=ymaps.templateLayoutFactory.createClass('<address class="address-map" ><p><b>$[properties.name]</b><br/><ul class="balloon-info" ><li><strong>Адрес:&nbsp;</strong>$[properties.address]</li></ul></address>'),i=new ymaps.Clusterer({clusterIcons:[{href:"/local/templates/main/assets/images/map-cluster.svg",size:[43,53],offset:[-21.5,-53]}],clusterIconContentLayout:a}),s={};e("[data-type=shop_select]").each((function(){var a=e(this).attr("data-coord-x"),o=e(this).attr("data-coord-y"),l=e(this).attr("data-id");s[l]=new ymaps.Placemark([a,o],{name:e(this).attr("data-name"),address:e(this).attr("data-address")},{balloonContentLayout:n,balloonOffset:[5,0],balloonCloseButton:!0,balloonMinWidth:150,balloonMaxWidth:200,balloonMinHeught:150,balloonMaxHeught:200,iconLayout:"default#image",iconImageHref:"/local/templates/main/assets/images/map-placemark.svg",iconImageSize:[43,53],iconImageOffset:[-21.5,-53]}),s[l].events.add("click",(function(a){var n=e(".map__item[data-id="+l+"]");e("[data-type=shop_select]").removeClass("map__item--active"),n.addClass("map__item--active"),t.setCenter(s[l].geometry.getCoordinates(),15)})),i.add(s[l])})),t.geoObjects.add(i),e(document).on("click","[data-type=shop_select]",(function(){var a=[];coordinateX=e(this).attr("data-coord-x"),coordinateY=e(this).attr("data-coord-y"),id=e(this).attr("data-id"),e(this).addClass("map__item--active").siblings().removeClass("map__item--active"),a.push(coordinateX),a.push(coordinateY),t.panTo([a],{flying:!0,checkZoomRange:!0}),t.setCenter(a,15),s[id].balloon.open()})),e(document).on("change","[data-type=region_select]",(function(){var a=e("[data-type=region_select] option:selected").text(),n=[],i=null;ymaps.geocode(a,{results:1}).then((function(e){var s=e.geoObjects.get(0);"Все"!=a?(n.push(s.geometry.getCoordinates()[0]),n.push(s.geometry.getCoordinates()[1]),i=10):(n=[66.413951,94.241942],i=3),t.panTo([n],{flying:!0,checkZoomRange:!0}),t.setCenter(n,i)}))}))}))}))}).call(this,a(0))},function(e,t,a){(function(e){window.addEventListener("load",(function(){if(0!==e(".tab-nav").length){if(window.matchMedia("( min-width: 1024px )").matches){var t=function(){a.hasClass("tab-nav--sticky")?a.scrollLeft(n.scrollLeft()):n.scrollLeft(a.scrollLeft()),a.toggleClass("tab-nav--sticky"),i.toggleClass("left-container--sticky")},a=e(".tab-nav"),n=a.clone(),i=e(".left-container--tab-nav");n.css("pointer-events","all"),i.append(n);var s=!1;e(window).scrollTop()+40>=a.position().top&&(s=!0,t()),e(window).on("scroll",(function(){s?e(window).scrollTop()+40<a.position().top&&(s=!1,t()):e(window).scrollTop()+40>=a.position().top&&(s=!0,t())}))}e(".tab-nav").scrollLeft(e(".tab-nav__item--active").offset().left-e(window).width()/2+e(".tab-nav__item--active").width()/2)}}))}).call(this,a(0))},function(e,t,a){},function(e,t,a){"use strict";a.r(t),function(e){var t=a(2),n=a.n(t);if(e(".fullpage-slider").length){var i=e(".fullpage-slider").data("image-pagination"),s={slidesPerView:2,centeredSlides:!0,simulateTouch:!1,speed:1e3,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".fullpage-slider .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'.concat(t,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t        <mask id="mask').concat(e+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n\t        <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n\t        </mask>\n\t        <g mask="url(#mask').concat(e+1,')">\n\t          <rect x="1" y="8" width="117" height="103" fill="url(#pattern').concat(e+1,')"/>\n\t          <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n\t          <path class="red" d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n\t        </g>\n\t        <defs>\n\t        <pattern id="pattern').concat(e+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n\t          <use xlink:href="#image').concat(e+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n\t          <image id="image').concat(e+1,'" width="1086" height="930" xlink:href="').concat(i[e],'"/>\n\t        </pattern></defs></svg></div>')}},on:{slideChangeTransitionStart:function(){e(".fullpage-title").removeClass("active"),e(".fullpage-title").addClass("remove");var t=e(".fullpage-slider .swiper-slide-active").data("title"),a=e(".fullpage-slider .swiper-slide-active"),n=e(".fullpage-slider .swiper-slide:not(.swiper-slide-active)");n.addClass("remove"),a.addClass("active"),e(".fullpage-slider").removeClass("active"),setTimeout((function(){n.removeClass("active"),e(".fullpage-title h2").html(t),e(".fullpage-title").addClass("active"),setTimeout((function(){e(".fullpage-title").removeClass("remove"),e(".fullpage-slider").addClass("active"),n.removeClass("remove")}),600)}),800)}}};new n.a(".fullpage-slider",s)}if(e(".carousel").length){var o=["Интернет–магазин","Экскурсия на фабрику «Чистая линия»","О!Эскимо","Смотровая площадка PANORAMA360"];new n.a(".carousel",{slidesPerView:1,effect:"fade",simulateTouch:!1,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".carousel .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'+t+'"><div class="circle"><svg id="svg" width="20" height="20" viewport="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">    <circle r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle>    <circle id="bar" r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle></svg></div>'+o[e]+"</div>"}},on:{slideChangeTransitionStart:function(t){e(".slider-image img").removeClass("active");var a=e(".slider-image"),n=e(a[0]).find("img")[t.realIndex],i=e(a[1]).find("img")[t.realIndex],s=e(".carousel .swiper-slide")[t.previousIndex];e(s).addClass("hideIt"),e(n).addClass("active"),e(i).addClass("active"),setTimeout((function(){return e(s).removeClass("hideIt")}),800)}}})}if(e(".rollerIt").length)new n.a(".rollerIt",{slidesPerView:"auto",spaceBetween:40,navigation:{nextEl:".card-slider .swiper-next",prevEl:".card-slider .swiper-prev"}});if(e(".slider-aside").each((function(){var t=e(this),a=t.find(".swiper-container"),i=t.find(".slider-aside__button--prev"),s=t.find(".slider-aside__button--next");new n.a(a[0],{allowTouchMove:!1,navigation:{prevEl:i[0],nextEl:s[0]}})})),0!==e(".production__slider").length){var l=[250,145,105],r=l.map((function(e){return e/l[0]})),c=e(".my-slider__container").length,d=!1,p=0,u=-((3*c-1)*l[2]+l[1]+3*c*20),f=window.matchMedia("(min-width: 1024px)");f.matches&&(l[0]=450,r=l.map((function(e){return e/l[0]}))),f.addListener((function(){l[0]>=450?l[0]=250:l[0]=450,r=l.map((function(e){return e/l[0]})),e(".my-slider__container").each((function(){var t=e(this).index(),a=Math.abs(3*c-t),n=l[a]?l[a]:l[2],i=r[a]?r[a]:r[2];e(this).css("width","".concat(n,"px")),e(this).find(".my-slider__slide").css("transform","scale(".concat(i,")"))}))}));for(var m=0;m<6;m++)for(var h=0;h<c;h++)e(".my-slider__wrapper").append(e(".my-slider__container").eq(h).clone());e(".my-slider__container").each((function(){var t=e(this).index(),a=Math.abs(3*c-t),n=l[a]?l[a]:l[2],i=r[a]?r[a]:r[2];e(this).css("width","".concat(n,"px")),e(this).find(".my-slider__slide").css("transform","scale(".concat(i,")"))})),e(".my-slider__wrapper").css("transform","translateX(".concat(u,"px)"));var v=new n.a(".production__slider-main",{speed:750,loop:!0,allowTouchMove:!1,effect:"fade",fadeEffect:{crossFade:!0},autoHeight:!0,spaceBetween:20});e(".production__slider-btn--prev").on("click",(function(){if(!d){d=!0,e(".my-slider__container").each((function(){var t=e(this).index(),a=Math.abs(3*c-1-t),n=l[a]?l[a]:l[2],i=r[a]?r[a]:r[2];e(this).css("width","".concat(n,"px")),e(this).find(".my-slider__slide").css("transform","scale(".concat(i,")"))})),u+=l[2]+20,e(".my-slider__wrapper").css("transform","translateX(".concat(u,"px)")),v.slidePrev();var t=setTimeout((function(){e(".my-slider__container").last().detach().prependTo(e(".my-slider__wrapper")),p-=l[2]+20,e(".my-slider__main").css("transform","translateX(".concat(p,"px)")),d=!1,clearTimeout(t)}),750)}})),e(".production__slider-btn--next").on("click",(function(){if(!d){d=!0,e(".my-slider__container").each((function(){var t=e(this).index(),a=Math.abs(3*c+1-t),n=l[a]?l[a]:l[2],i=r[a]?r[a]:r[2];e(this).css("width","".concat(n,"px")),e(this).find(".my-slider__slide").css("transform","scale(".concat(i,")"))})),u-=l[2]+20,e(".my-slider__wrapper").css("transform","translateX(".concat(u,"px)")),v.slideNext();var t=setTimeout((function(){e(".my-slider__container").first().detach().appendTo(e(".my-slider__wrapper")),p+=l[2]+20,e(".my-slider__main").css("transform","translateX(".concat(p,"px)")),d=!1,clearTimeout(t)}),750)}}))}if(e(".main-slider").length){var g=e(".main-slider").data("image-pagination"),y={loop:!0,speed:1e3,loopAdditionalSlides:10,grabCursor:!0,watchSlidesProgress:!0,navigation:{nextEl:".slideshow-container .swiper-next",prevEl:".slideshow-container .swiper-prev"},pagination:{el:".slideshow-container .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'.concat(t,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <mask id="mask').concat(e+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n          <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n          </mask>\n          <g mask="url(#mask').concat(e+1,')">\n            <rect x="-3" y="6" width="122" height="103" fill="url(#pattern').concat(e+1,')"/>\n            <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n          </g>\n          <defs>\n          <pattern id="pattern').concat(e+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n            <use xlink:href="#image').concat(e+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n            <image id="image').concat(e+1,'" width="1086" height="930" xlink:href="').concat(g[e],'"/>\n          </pattern></defs></svg></div>')}},on:{init:function(){},imagesReady:function(){},progress:function(){for(var e=0;e<this.slides.length;e++){var t=this.slides[e].progress*(.5*this.width);this.slides[e].querySelector(".slide-bgimg").style.transform="translateX("+t+"px)"}},touchStart:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""},setTransition:function(e,t){for(var a=0;a<this.slides.length;a++)this.slides[a].style.transition=t+"ms",this.slides[a].querySelector(".slide-bgimg").style.transition=t+"ms"}}};new n.a(".main-slider",y)}}.call(this,a(0))},function(e,t,a){(function(e){e(".page-header").mousemove((function(t){var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(".bubble").css("left",0),a<=1025?e(".bubble").css("top",t.clientY-125):e(".bubble").css("top",t.clientY-160)})),e(".page-header").mouseout((function(){e(".bubble").css("left","-50px")})),e(".mobile-nav--js").click((function(){e("body").toggleClass("activated"),e(".page-header").toggleClass("active"),e(this).hasClass("active")&&e(".page-header, .catalogFilter").removeClass("active"),e(this).toggleClass("active")})),e(".catalogFilter--js").click((function(){e("body").toggleClass("activated"),e(".mobile-nav--js").toggleClass("active"),e(".catalogFilter").toggleClass("active")})),e(document).click((function(t){var a=e(".page-header.active"),n=e(".mobile-nav--js"),i=e(".catalogFilter--js");0===n.has(t.target).length&&0===a.has(t.target).length&&0===i.has(t.target).length&&0===e(".catalogFilter").has(t.target).length&&(e("body").removeClass("activated"),a.removeClass("active"),n.removeClass("active"),e(".catalogFilter").removeClass("active"))}))}).call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"showMore",(function(){return s}));var n=a(1),i=a.n(n);function s(){var t=e(".moreDetail--js").data("num"),a=e(".moreDetail--js").data("more"),n=e(".moreDetail--js .more__item--js"),s=a||3,o=e(".showMore--js"),l=n.length;o.hide(),n.velocity("slideUp",{duration:300});var r=t||8;l>r&&o.show(),n.slice(0,r).slideDown(),o.click((function(){var e=n.filter(":visible").length;return n.slice(e-1,e+s).slideDown(),n.filter(":visible").length>=l&&o.hide(),setTimeout((function(){i.a.refresh({offset:50})}),400),!1}))}e(document).on("click",".accordion__item--sm",(function(){var t=this;return e(".accordion-body").removeClass("shown"),e(this).hasClass("active")?(e(".accordion__item").removeClass("active"),e(this).removeClass("active").find(".accordion-body").removeClass("shown"),setTimeout((function(){e(t).find(".accordion-body").removeClass("ellipses")}),350)):(e(".accordion__item").removeClass("active"),e(this).removeClass("active"),e(this).addClass("active").find(".accordion-body").addClass("shown ellipses")),setTimeout((function(){i.a.refresh({offset:50})}),400),!1})),e(document).on("click",".accordion__item--js",(function(){return e(this).hasClass("active")?(e(".accordion__item").removeClass("active"),e(this).removeClass("active").find(".accordion-body").slideUp()):(e(".accordion__item").removeClass("active").find(".accordion-body").slideUp(),e(this).removeClass("active"),e(this).addClass("active").find(".accordion-body").slideDown()),setTimeout((function(){i.a.refresh({offset:50})}),400),!1})),s()}.call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){var t=a(1),n=a.n(t);function i(t,a){var i=e(".filter__item--js");e(".btn--js").hide(),i.velocity({opacity:0,translateY:"-20px"},{display:"none"},{duration:500}),"*"===t?i.velocity({opacity:1,translateY:"0px"},{display:"block"},{duration:500}):(e(i).filter((function(a,n){return e(n)[0].dataset.text.startsWith(t)})).velocity({opacity:1,translateY:"0px"},{display:"block"},{delay:300,duration:500}),setTimeout((function(){n.a.refresh({offset:50})}),500)),e(".filter--js li").removeClass("active"),a.addClass("active")}e(".filter--js").on("click","li:not(.last)",(function(){e(this).hasClass("active")||i(e(this).data("text"),e(this))})),e(".filter--js").on("click","li.last",(function(){var t=e(".filter--js li:first-child");t.hasClass("active")||i(t.data("text"),t)}))}.call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){a(20),a(21);function t(t){return void 0!==t.element&&void 0!==t.element.dataset.img?e('<span><img src="'+t.element.dataset.img+'" class="img-flag" /> '+t.text+"</span>"):e("<span>"+t.text+"</span>")}function n(t,a){var n,i=e(a.prevObject).closest(".select2").prev().data("title");return(n=void 0!==t.element&&void 0!==t.element.dataset.img?e('<span><img class="img-flag" /> <span></span></span>'):e('<span><span class="select2-selection-text"></span></span>')).find("span").html('<span class="title">'.concat(i,"</span>").concat(t.text)),n.find("img").attr("src",t.element.dataset.img),n}e(".select-template").select2({selectOnClose:!0,templateResult:t,templateSelection:n,minimumResultsForSearch:1/0,theme:e(void 0).data("theme")}),e(".select-template").on("select2:select",(function(t){e(".catalogFilter--js span").text(t.params.data.text)})),e(".select-template").on("select2:open",(function(){e(".select2-dropdown").hide(),setTimeout((function(){e(".select2-dropdown").slideDown({duration:500,easing:"easeInOutCubic"})}),200)})),e(".select-template").on("select2:closing",(function(a){a.preventDefault(),setTimeout((function(){e(".select2").addClass("closing"),e(".select2-dropdown").slideUp(500,(function(){setTimeout((function(){e(".select-template").select2("destroy"),e(".select-template").select2({selectOnClose:!0,templateResult:t,templateSelection:n,minimumResultsForSearch:1/0}),e(".select-template").removeClass("closing")}),500)}))}),0)}))}.call(this,a(0))},,,function(e,t,a){"use strict";a.r(t),function(e){var t=a(4),n=a.n(t);new n.a("Image");var i=new n.a("Modal",{attach:".myModal",content:e("#grabMe"),closeButton:!1});e(".close-popup--js").click((function(){i.close()}))}.call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){a(24);function t(e){var t="textContent"in document?"textContent":"innerText",a=e.value;e.parentNode.getElementsByTagName("output")[0][t]=a}e("#play").click((function(){var t=e("#video");e(this).fadeOut("500"),t.get(0).play(),t.attr("controls","")})),e('input[type="range"]').rangeslider({polyfill:!1,onInit:function(){t(this.$element[0])}}),e(document).on("input",'input[type="range"]',(function(a){t(a.target);var n=e(this).closest(".referral__calc-block").find("output"),i=n[0].innerText*n[1].innerText*.1;e(".result__block--js .result span").text(i.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))}))}.call(this,a(0))},,function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"validateEmail",(function(){return l})),a.d(t,"validatePhone",(function(){return r})),a.d(t,"validateField",(function(){return c}));var n=a(6),i=a.n(n),s=a(1),o=a.n(s);function l(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function r(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}function c(e,t){var a,n=e.attr("required"),i=".control-error",s="checkbox"===e.attr("type"),o=t;return""===e.val()?(e.closest(".input").removeClass("input--filled"),a=!1):(e.closest(".input").addClass("input--filled"),a=!0),o&&("email"===e.prop("type")?l(o)?(e.closest(".input").removeClass("error"),e.closest(".input").find(i).text(""),a=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(i).text("Поле заполнено некорректно"),a=!1):"phone"===e.prop("name")?r(o)?(e.closest(".input").removeClass("error"),e.closest(".input").find(i).text(""),a=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(i).text("Поле заполнено некорректно"),a=!1):(e.closest(".input").removeClass("error"),e.closest(".input").find(i).text(""),a=!0)),s&&n&&(e.prop("checked")?(e.closest(".checkbox").find(i).text(""),a=!0):(e.closest(".checkbox").find(i).text("Для отправки сообщения необходимо согласие"),a=!1)),!o&&n&&(e.closest(".input").addClass("error"),e.closest(".input").find(i).text("Пожалуйста, заполните поле"),a=!1),"file"===e.prop("type")&&(a=!0),a}i()({mask:"+7 (999) 999-99-99"}).mask("input[name=phone]"),e(".form--js").on("click",(function(t){t.preventDefault();var a=window.location.pathname.split("/"),n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(c(e(this),t.value))})),n.includes(!1))return!1;var i=e(this).closest("form"),s=i.find("input[name=name]"),l=i.find("input[name=email]"),r=i.find("input[name=phone]"),d=i.find("textarea[name=content]"),p=i.attr("data-type-title"),u=e(this),f=null,m=null;"/contacts/"===window.location.pathname&&(f="/local/templates/main/include/ajax/contact/contact.php",m={name:s.val(),email:l.val(),text:d.val(),phone:r.val(),type:p}),"/press-center/news/"!==window.location.pathname&&"/press-center/press/"!==window.location.pathname&&"/for-buyer/interesting/"!==window.location.pathname&&"/recipes/"!==window.location.pathname&&"recipes"!=a[1]&&"news"!=a[2]||(f="/local/templates/main/include/ajax/side/subscribe.php",m={email:l.val()}),"/for-buyer/faq/"===window.location.pathname&&(f="/local/templates/main/include/ajax/side/faq.php",m={email:l.val(),text:d.val()}),"/for-buyer/reviews/"===window.location.pathname&&(f="/local/templates/main/include/ajax/side/review.php",m={name:s.val(),email:l.val(),text:d.val(),phone:r.val(),type:p}),e.ajax({type:"POST",url:f,dataType:"json",data:m,success:function(t){if(!0===t.success){var a=matchMedia("(min-width: 1024px)");a.matches?u.closest(".form-inner").css("visibility","hidden").css("opacity",0).next().slideDown(500).css("display","flex"):u.closest(".form-inner").css("display","none").next().css("display","flex"),o.a.refresh(),e(".form-back--js").one("click",(function(){var t=e(this).closest("form");return t.trigger("reset"),t.find("input").parent().removeClass("input--filled"),a.matches?e(this).closest(".form-send").hide().prev().css("visibility","").css("opacity",1):e(this).closest(".form-send").hide().prev().css("display",""),o.a.refresh(),!1})),e(".form-response").addClass("shown activated"),e(".reset--js").one("click",(function(){return e(".form-response").removeClass("shown"),setTimeout((function(){e(".form-response").removeClass("activated")}),500),!1}))}}})}))}.call(this,a(0))},,function(e,t){}]);