!function(t){function e(e){for(var n,o,l=e[0],r=e[1],c=e[2],p=0,u=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);for(d&&d(e);u.length;)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={0:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;s.push([7,1,2]),a()}([,,,,,,,function(t,e,a){"use strict";a.r(e),function(t){var e=a(1),n=a.n(e),i=a(3),s=a.n(i),o=a(4),l=a.n(o),r=a(2),c=a.n(r);a(10),a(11),a(12),a(13),a(0),a(14);t(document).ready((function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(a(15),a(16),a(17),a(18),a(19),a(22),e>1150&&t(".sticky").length)new l.a(".sticky");t(".backLink").mouseover((function(){var e=t(this).width(),a=t(this).find(".nextBlock--ico").width();t(this).find(".nextBlock--ico").css("left",-(e/2-2.5*a))})).mouseleave((function(){t(this).find(".nextBlock--ico").css("left",0)})),a(23),a(25)})),t(window).scroll((function(){})),t(window).on("load",(function(){if(t(".page-mission").length){var e={delay:500,minWidth:null,count:0,timeGap:300};t(".page-mission__mission-highlight").each((function(){(null===e.minWidth||t(this).width()<e.minWidth)&&(e.minWidth=t(this).width())}));var a=setTimeout((function(){t(".page-mission__mission-highlight").each((function(){var a=this,n=setTimeout((function(){var i=t(a).width(),s=parseFloat(getComputedStyle(t(a)[0]).transitionDuration)*(i/e.minWidth);t(a).css("transition",s+"s"),t(a).addClass("page-mission__mission-highlight--active"),clearTimeout(n)}),e.timeGap*e.count++)})),clearTimeout(a)}),e.delay)}t(".page-about-us").length&&t(".page-about-us__slider").each((function(){var e=t(this),a=e.find(".swiper-container"),n=e.find(".page-about-us__slider-pagination"),i=e.find(".page-about-us__slider-btn--prev"),s=e.find(".page-about-us__slider-btn--next"),o=e.find(".page-about-us__slider-pagination-item"),l=new c.a(a[0],{allowTouchMove:!1,speed:300,loop:!0,navigation:{prevEl:i[0],nextEl:s[0]},pagination:{el:n[0],type:"custom",renderCustom:function(t,e,a){o.removeClass("page-about-us__slider-pagination-item--active"),o.eq(e-1).addClass("page-about-us__slider-pagination-item--active")}}});o.on("click",(function(){var e=t(this).index();l.slideTo(e)}))}))})),t((function(){var e=t(".loader span"),a=t(".loader__layer"),i="/"===window.location.pathname||"/index"===window.location.pathname||"/index.html"===window.location.pathname;if(console.log(i),setTimeout((function(){window.scrollTo(0,0)}),200),t(".summerdream").length){var o=function(t){var n=Math.round(100*t);e.text(n),a.css("width",n+"%")},l=function(){t(".index-loader").css("display",""),e.text("100"),a.css("width","100%"),t("body").css("overflow","visible"),t(".summerdream").addClass("hidden"),setTimeout((function(){t(".fullpage-block").addClass("active"),t(".summerdream").addClass("hideIt"),t(".fullpage-desc span:first-child").addClass("active"),setTimeout((function(){t(".fullpage-desc span:nth-child(3)").addClass("active"),setTimeout((function(){t(".fullpage-desc span:last-child").addClass("active")}),300)}),300)}),500),setTimeout((function(){n.a.init({offset:50})}),500),t(".rellax").length&&new s.a(".rellax")};t(".index-loader").css("display","none"),t("body").css("overflow","hidden");var r={elem:t("img"),count:t("img").length},c={counter:0,startTime:null,endTime:null,time:null,progress:null,TAIL:{MIN_TIME:200,MAX_TIME:500,PARTS:5,BREAKPOINT:.6+.2*Math.random()}};r.elem.on("load",(function(){c.counter++,c.startTime||(c.startTime=(new Date).getTime()),c.progress=c.counter/r.count,c.progress=c.progress<c.TAIL.BREAKPOINT?c.progress:c.TAIL.BREAKPOINT,o(.5*c.progress)})),t(window).on("load",(function(){if(c.progress=c.progress<=0?c.TAIL.BREAKPOINT:c.progress,c.progress>=1)l();else{c.endTime=(new Date).getTime(),c.time=c.endTime-c.startTime,c.time=c.time>0?c.time:0;var t={time:null,partCounter:0,partTime:null,interval:null};t.time=c.time/c.progress*(1-c.progress),t.time=t.time<c.TAIL.MAX_TIME?t.time<c.TAIL.MIN_TIME?c.TAIL.MIN_TIME:t.time:c.TAIL.MAX_TIME,t.partCounter=0,t.partTime=t.time/c.TAIL.PARTS,t.interval=setInterval((function(){t.partCounter++,t.partCounter<c.TAIL.PARTS?o(c.progress+(1-c.progress)/c.TAIL.PARTS*t.partCounter):(l(),clearInterval(t.interval))}),t.partTime)}}))}else t("body").css("overflow","hidden"),setTimeout((function(){t(".loading").addClass("hideIt"),t("body").css("overflow","visible"),n.a.init({offset:50}),t(".rellax").length&&new s.a(".rellax")}),500)}))}.call(this,a(0))},,,,function(t,e,a){(function(t){function e(e){t.ajax({type:"post",url:"/catalog/",dataType:"html",data:e,success:function(e){var a=t(e).find("[data-type=items_block]"),n=t(e).find("[data-type=pagenav_block]"),i=t(e).find("[data-type-title=kind] option"),s=t(e).find("[data-type-title=flavors] option");filterOptions.remove(),itemsBlock.remove(),pagenavBlock.remove(),selectKind.append(i),selectFlavors.append(s),filterBlock.after(a),itemsBlock.after(n),filterSelects.each((function(){t(this).val(t(this).find("[selected]").val()).trigger("change")}))}})}function a(e){t.ajax({type:"post",url:"/recipes/",dataType:"html",data:e,success:function(e){var a=t(e).find("[data-type=items_block]"),n=t(e).find("[data-type=pagenav_block]"),i=t(e).find("[data-title-type=type] option"),s=t(e).find("[data-title-type=products] option"),o=t(e).find("[data-title-type=time] option");filterOptions.remove(),itemsBlock.remove(),pagenavBlock.remove(),typeBlockSelect.append(i),productsBlockSelect.append(s),timeBlockSelect.append(o),appendItems.append(a),itemsBlock.after(n),filterSelects.each((function(){t(this).val(t(this).find("[selected]").val()).trigger("change")}))}})}t((function(){t(document).on("click","[data-type=show_more_click]",(function(e){e.preventDefault();var a=t(this).parents("[data-type=main_container]"),n=a.find("[data-type=items_block]"),i=t(this).attr("data-url"),s=a.find("[data-type=pagenav_block]");void 0!==i&&t.ajax({type:"POST",url:i,dataType:"html",data:{ajax:!0},success:function(e){s.remove();var a=t(e).find("[data-type=item]"),i=t(e).find("[data-type=pagenav_block]");n.append(a),n.after(i)}})})),kind=null,flavors=null,data=null,container=null,itemsBlock=null,filterBlock=null,pagenavBlock=null,filterSelects=null,filterOptions=null,selectKind=null,selectFlavors=null,t("[data-type=reset_filters_catalog]").on("click",(function(){container=t(this).parents(["data-type=catalog_container"]),itemsBlock=container.find("[data-type=items_block]"),filterBlock=container.find("[data-type=catalog_filter_block]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects=container.find("[data-type=change_filter_catalog]"),filterOptions=container.find("[data-type=change_filter_catalog] option"),selectKind=container.find("[data-type-title=kind]"),selectFlavors=container.find("[data-type-title=flavors]"),data={ajax:!0,kind:"",flavors:""},e(data)})),t("[data-type=change_filter_catalog]").on("select2:select",(function(){container=t(this).parents(["data-type=catalog_container"]),itemsBlock=container.find("[data-type=items_block]"),filterBlock=container.find("[data-type=catalog_filter_block]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects=container.find("[data-type=change_filter_catalog]"),filterOptions=container.find("[data-type=change_filter_catalog] option"),selectKind=container.find("[data-type-title=kind]"),selectFlavors=container.find("[data-type-title=flavors]"),filterSelects.each((function(){"kind"==t(this).attr("data-type-title")&&(kind=t(this).val()),"flavors"==t(this).attr("data-type-title")&&(flavors=t(this).val())})),data={ajax:!0,kind:kind,flavors:flavors},console.log(data),e(data)})),type=null,products=null,time=null,data=null,container=null,appendItems=null,itemsBlock=null,filterSelects=null,filterOptions=null,typeBlockSelect=null,productsBlockSelect=null,timeBlockSelect=null,pagenavBlock=null,t("[data-type=reset_filters_recipes]").on("click",(function(){container=t(this).parents(["data-type=container_recipes"]),appendItems=container.find("[data-type=append_items]"),itemsBlock=container.find("[data-type=items_block]"),filterSelects=container.find("[data-type=change_filter_recipes]"),filterOptions=container.find("[data-type=change_filter_recipes] option"),typeBlockSelect=container.find("[data-title-type=type]"),productsBlockSelect=container.find("[data-title-type=products]"),timeBlockSelect=container.find("[data-title-type=time]"),pagenavBlock=container.find("[data-type=pagenav_block]"),data={ajax:!0,type:"",products:"",time:""},a(data)})),t("[data-type=change_filter_recipes]").on("select2:select",(function(){container=t(this).parents(["data-type=container_recipes"]),appendItems=container.find("[data-type=append_items]"),itemsBlock=container.find("[data-type=items_block]"),filterSelects=container.find("[data-type=change_filter_recipes]"),filterOptions=container.find("[data-type=change_filter_recipes] option"),typeBlockSelect=container.find("[data-title-type=type]"),productsBlockSelect=container.find("[data-title-type=products]"),timeBlockSelect=container.find("[data-title-type=time]"),pagenavBlock=container.find("[data-type=pagenav_block]"),filterSelects.each((function(){"type"==t(this).attr("data-title-type")&&(type=t(this).val()),"products"==t(this).attr("data-title-type")&&(products=t(this).val()),"time"==t(this).attr("data-title-type")&&(time=t(this).val())})),data={ajax:!0,type:type,products:products,time:time},a(data)})),t("[data-type=contact_form]").on("submit",(function(e){e.preventDefault();var a=t(this),n={name:a.find("input[name='name']").val(),mail:a.find("input[name='email']").val(),phone:a.find("input[name='phone']").val(),text:a.find("textarea[name='question']").val(),type:a.attr("data-type-title")};t.ajax({type:"post",url:"/local/templates/main/include/ajax/contact/contact.php",dataType:"json",data:n,success:function(t){}})}))}))}).call(this,a(0))},function(t,e,a){(function(t){t((function(){t(".map").length&&ymaps.ready((function(){t("[data-type=region_select]").on("select2:select",(function(){var e=t(this).parents("[data-type=map_container]"),a=e.find("[data-type=shops_container]"),n=e.find("[data-type=shops_block]"),i=t(this).val();t.ajax({type:"post",url:"/world/oeskimo/",data:{ajax:!0,region:i},success:function(e){var i=t(e).find("[data-type=shops_block]");n.remove(),a.append(i)}})}));var e=new ymaps.Map("map",{center:[66.413951,94.241942],zoom:3,controls:[]}),a=ymaps.templateLayoutFactory.createClass('<div class="map__clusterer">{{ properties.geoObjects.length }}</div>'),n=ymaps.templateLayoutFactory.createClass('<address class="address-map" ><p><b>$[properties.name]</b><br/><ul class="balloon-info" ><li><strong>Адрес:&nbsp;</strong>$[properties.address]</li></ul></address>'),i=new ymaps.Clusterer({clusterIcons:[{href:"/local/templates/main/assets/images/map-cluster.svg",size:[43,53],offset:[-21.5,-53]}],clusterIconContentLayout:a}),s={};t("[data-type=shop_select]").each((function(){var a=t(this).attr("data-coord-x"),o=t(this).attr("data-coord-y"),l=t(this).attr("data-id");s[l]=new ymaps.Placemark([a,o],{name:t(this).attr("data-name"),address:t(this).attr("data-address")},{balloonContentLayout:n,balloonOffset:[5,0],balloonCloseButton:!0,balloonMinWidth:150,balloonMaxWidth:200,balloonMinHeught:150,balloonMaxHeught:200,iconLayout:"default#image",iconImageHref:"/local/templates/main/assets/images/map-placemark.svg",iconImageSize:[43,53],iconImageOffset:[-21.5,-53]}),s[l].events.add("click",(function(a){var n=t(".map__item[data-id="+l+"]");t("[data-type=shop_select]").removeClass("map__item--active"),n.addClass("map__item--active"),e.setCenter(s[l].geometry.getCoordinates(),15)})),i.add(s[l])})),e.geoObjects.add(i),t(document).on("click","[data-type=shop_select]",(function(){var a=[];coordinateX=t(this).attr("data-coord-x"),coordinateY=t(this).attr("data-coord-y"),id=t(this).attr("data-id"),t(this).addClass("map__item--active").siblings().removeClass("map__item--active"),a.push(coordinateX),a.push(coordinateY),e.panTo([a],{flying:!0,checkZoomRange:!0}),e.setCenter(a,15),s[id].balloon.open()})),t(document).on("change","[data-type=region_select]",(function(){var a=t("[data-type=region_select] option:selected").text(),n=[],i=null;ymaps.geocode(a,{results:1}).then((function(t){var s=t.geoObjects.get(0);"Все"!=a?(n.push(s.geometry.getCoordinates()[0]),n.push(s.geometry.getCoordinates()[1]),i=10):(n=[66.413951,94.241942],i=3),e.panTo([n],{flying:!0,checkZoomRange:!0}),e.setCenter(n,i)}))}))}))}))}).call(this,a(0))},function(t,e,a){(function(t){window.addEventListener("load",(function(){if(0!==t(".tab-nav").length){if(window.matchMedia("( min-width: 1024px )").matches){var e=function(){a.hasClass("tab-nav--sticky")?a.scrollLeft(n.scrollLeft()):n.scrollLeft(a.scrollLeft()),a.toggleClass("tab-nav--sticky"),i.toggleClass("left-container--sticky")},a=t(".tab-nav"),n=a.clone(),i=t(".left-container--tab-nav");n.css("pointer-events","all"),i.append(n);var s=!1;t(window).scrollTop()+40>=a.position().top&&(s=!0,e()),t(window).on("scroll",(function(){s?t(window).scrollTop()+40<a.position().top&&(s=!1,e()):t(window).scrollTop()+40>=a.position().top&&(s=!0,e())}))}t(".tab-nav").scrollLeft(t(".tab-nav__item--active").offset().left-t(window).width()/2+t(".tab-nav__item--active").width()/2)}}))}).call(this,a(0))},function(t,e,a){},function(t,e,a){"use strict";a.r(e),function(t){var e=a(2),n=a.n(e);if(t(".fullpage-slider").length){var i=t(".fullpage-slider").data("image-pagination"),s={slidesPerView:2,centeredSlides:!0,simulateTouch:!1,speed:1e3,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".fullpage-slider .swiper-pagination",clickable:!0,renderBullet:function(t,e){return'<div class="'.concat(e,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t        <mask id="mask').concat(t+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n\t        <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n\t        </mask>\n\t        <g mask="url(#mask').concat(t+1,')">\n\t          <rect x="1" y="8" width="117" height="103" fill="url(#pattern').concat(t+1,')"/>\n\t          <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n\t          <path class="red" d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n\t        </g>\n\t        <defs>\n\t        <pattern id="pattern').concat(t+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n\t          <use xlink:href="#image').concat(t+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n\t          <image id="image').concat(t+1,'" width="1086" height="930" xlink:href="').concat(i[t],'"/>\n\t        </pattern></defs></svg></div>')}},on:{slideChangeTransitionStart:function(){t(".fullpage-title").removeClass("active"),t(".fullpage-title").addClass("remove");var e=t(".fullpage-slider .swiper-slide-active").data("title"),a=t(".fullpage-slider .swiper-slide-active"),n=t(".fullpage-slider .swiper-slide:not(.swiper-slide-active)");n.addClass("remove"),a.addClass("active"),t(".fullpage-slider").removeClass("active"),setTimeout((function(){n.removeClass("active"),t(".fullpage-title h2").html(e),t(".fullpage-title").addClass("active"),setTimeout((function(){t(".fullpage-title").removeClass("remove"),t(".fullpage-slider").addClass("active"),n.removeClass("remove")}),600)}),800)}}};new n.a(".fullpage-slider",s)}if(t(".carousel").length){var o=["Интернет–магазин","Экскурсия на фабрику «Чистая линия»","О!Эскимо","Смотровая площадка PANORAMA360"];new n.a(".carousel",{slidesPerView:1,effect:"fade",simulateTouch:!1,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".carousel .swiper-pagination",clickable:!0,renderBullet:function(t,e){return'<div class="'+e+'"><div class="circle"><svg id="svg" width="20" height="20" viewport="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">    <circle r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle>    <circle id="bar" r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="57" stroke-dashoffset="0"></circle></svg></div>'+o[t]+"</div>"}},on:{slideChangeTransitionStart:function(e){t(".slider-image img").removeClass("active");var a=t(".slider-image"),n=t(a[0]).find("img")[e.realIndex],i=t(a[1]).find("img")[e.realIndex],s=t(".carousel .swiper-slide")[e.previousIndex];t(s).addClass("hideIt"),t(n).addClass("active"),t(i).addClass("active"),setTimeout((function(){return t(s).removeClass("hideIt")}),800)}}})}if(t(".rollerIt").length)new n.a(".rollerIt",{slidesPerView:"auto",spaceBetween:40,navigation:{nextEl:".card-slider .swiper-next",prevEl:".card-slider .swiper-prev"}});if(t(".slider-aside").each((function(){var e=t(this),a=e.find(".swiper-container"),i=e.find(".slider-aside__button--prev"),s=e.find(".slider-aside__button--next");new n.a(a[0],{allowTouchMove:!1,navigation:{prevEl:i[0],nextEl:s[0]}})})),0!==t(".production__slider").length){var l=[250,145,105],r=l.map((function(t){return t/l[0]})),c=t(".my-slider__container").length,d=!1,p=0,u=-((3*c-1)*l[2]+l[1]+3*c*20),f=window.matchMedia("(min-width: 1024px)");f.matches&&(l[0]=450,r=l.map((function(t){return t/l[0]}))),f.addListener((function(){l[0]>=450?l[0]=250:l[0]=450,r=l.map((function(t){return t/l[0]})),t(".my-slider__container").each((function(){var e=t(this).index(),a=Math.abs(3*c-e),n=l[a]?l[a]:l[2],i=r[a]?r[a]:r[2];t(this).css("width","".concat(n,"px")),t(this).find(".my-slider__slide").css("transform","scale(".concat(i,")"))}))}));for(var m=0;m<6;m++)for(var h=0;h<c;h++)t(".my-slider__wrapper").append(t(".my-slider__container").eq(h).clone());t(".my-slider__container").each((function(){var e=t(this).index(),a=Math.abs(3*c-e),n=l[a]?l[a]:l[2],i=r[a]?r[a]:r[2];t(this).css("width","".concat(n,"px")),t(this).find(".my-slider__slide").css("transform","scale(".concat(i,")"))})),t(".my-slider__wrapper").css("transform","translateX(".concat(u,"px)"));var v=new n.a(".production__slider-main",{speed:750,loop:!0,allowTouchMove:!1,effect:"fade",fadeEffect:{crossFade:!0},autoHeight:!0,spaceBetween:20});t(".production__slider-btn--prev").on("click",(function(){if(!d){d=!0,t(".my-slider__container").each((function(){var e=t(this).index(),a=Math.abs(3*c-1-e),n=l[a]?l[a]:l[2],i=r[a]?r[a]:r[2];t(this).css("width","".concat(n,"px")),t(this).find(".my-slider__slide").css("transform","scale(".concat(i,")"))})),u+=l[2]+20,t(".my-slider__wrapper").css("transform","translateX(".concat(u,"px)")),v.slidePrev();var e=setTimeout((function(){t(".my-slider__container").last().detach().prependTo(t(".my-slider__wrapper")),p-=l[2]+20,t(".my-slider__main").css("transform","translateX(".concat(p,"px)")),d=!1,clearTimeout(e)}),750)}})),t(".production__slider-btn--next").on("click",(function(){if(!d){d=!0,t(".my-slider__container").each((function(){var e=t(this).index(),a=Math.abs(3*c+1-e),n=l[a]?l[a]:l[2],i=r[a]?r[a]:r[2];t(this).css("width","".concat(n,"px")),t(this).find(".my-slider__slide").css("transform","scale(".concat(i,")"))})),u-=l[2]+20,t(".my-slider__wrapper").css("transform","translateX(".concat(u,"px)")),v.slideNext();var e=setTimeout((function(){t(".my-slider__container").first().detach().appendTo(t(".my-slider__wrapper")),p+=l[2]+20,t(".my-slider__main").css("transform","translateX(".concat(p,"px)")),d=!1,clearTimeout(e)}),750)}}))}if(t(".main-slider").length){var g=t(".main-slider").data("image-pagination"),y={loop:!0,speed:1e3,loopAdditionalSlides:10,grabCursor:!0,watchSlidesProgress:!0,navigation:{nextEl:".slideshow-container .swiper-next",prevEl:".slideshow-container .swiper-prev"},pagination:{el:".slideshow-container .swiper-pagination",clickable:!0,renderBullet:function(t,e){return'<div class="'.concat(e,'"><svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <mask id="mask').concat(t+1,'" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="114" height="114">\n          <path d="M21.8928 78.7031C8.75805 58.8537 13.6054 37.1789 33.4548 24.0442C53.4265 6.17486 78.5116 14.4651 91.6463 34.3145C104.781 54.1639 103.759 74.5032 83.9097 87.6379C64.0603 100.773 35.0275 98.5525 21.8928 78.7031Z" fill="white"/>\n          </mask>\n          <g mask="url(#mask').concat(t+1,')">\n            <rect x="-3" y="6" width="122" height="103" fill="url(#pattern').concat(t+1,')"/>\n            <path d="M34.5585 25.7121L34.6799 25.6318L34.7884 25.5347C44.3035 17.0213 54.912 14.81 64.6793 16.9869C74.5097 19.1779 83.6519 25.8575 89.9784 35.4181C96.373 45.0818 99.1835 54.6584 98.161 63.258C97.146 71.7946 92.319 79.675 82.806 85.97C63.62 98.6657 35.9282 96.2895 23.5607 77.5994C17.248 68.0597 15.3371 58.2215 17.2601 49.276C19.1845 40.3238 24.9982 32.0384 34.5585 25.7121Z" stroke-width="4"/>\n          </g>\n          <defs>\n          <pattern id="pattern').concat(t+1,'" patternContentUnits="objectBoundingBox" width="1" height="1">\n            <use xlink:href="#image').concat(t+1,'" transform="translate(-0.0091898) scale(0.000937734 0.00107527)"/>\n            <image id="image').concat(t+1,'" width="1086" height="930" xlink:href="').concat(g[t],'"/>\n          </pattern></defs></svg></div>')}},on:{init:function(){},imagesReady:function(){},progress:function(){for(var t=0;t<this.slides.length;t++){console.log(this.slides[t].progress);var e=this.slides[t].progress*(.5*this.width);console.log(e),this.slides[t].querySelector(".slide-bgimg").style.transform="translateX("+e+"px)"}},touchStart:function(){for(var t=0;t<this.slides.length;t++)this.slides[t].style.transition=""},setTransition:function(t,e){for(var a=0;a<this.slides.length;a++)this.slides[a].style.transition=e+"ms",this.slides[a].querySelector(".slide-bgimg").style.transition=e+"ms"}}};new n.a(".main-slider",y)}}.call(this,a(0))},function(t,e,a){(function(t){t(".page-header").mousemove((function(e){var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0);t(".bubble").css("left",0),a<=1025?t(".bubble").css("top",e.clientY-125):t(".bubble").css("top",e.clientY-160)})),t(".page-header").mouseout((function(){t(".bubble").css("left","-50px")})),t(".mobile-nav--js").click((function(){t("body").toggleClass("activated"),t(".page-header").toggleClass("active"),t(this).hasClass("active")&&t(".page-header, .catalogFilter").removeClass("active"),t(this).toggleClass("active")})),t(".catalogFilter--js").click((function(){t("body").toggleClass("activated"),t(".mobile-nav--js").toggleClass("active"),t(".catalogFilter").toggleClass("active")})),t(document).click((function(e){var a=t(".page-header.active"),n=t(".mobile-nav--js"),i=t(".catalogFilter--js");0===n.has(e.target).length&&0===a.has(e.target).length&&0===i.has(e.target).length&&0===t(".catalogFilter").has(e.target).length&&(t("body").removeClass("activated"),a.removeClass("active"),n.removeClass("active"),t(".catalogFilter").removeClass("active"))}))}).call(this,a(0))},function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"showMore",(function(){return s}));var n=a(1),i=a.n(n);function s(){var e=t(".moreDetail--js").data("num"),a=t(".moreDetail--js").data("more"),n=t(".moreDetail--js .more__item--js"),s=a||3,o=t(".showMore--js"),l=n.length;o.hide(),n.velocity("slideUp",{duration:300});var r=e||8;l>r&&o.show(),n.slice(0,r).slideDown(),o.click((function(){var t=n.filter(":visible").length;return n.slice(t-1,t+s).slideDown(),n.filter(":visible").length>=l&&o.hide(),setTimeout((function(){i.a.refresh({offset:50})}),400),!1}))}t(document).on("click",".accordion__item--sm",(function(){var e=this;return t(".accordion-body").removeClass("shown"),t(this).hasClass("active")?(t(".accordion__item").removeClass("active"),t(this).removeClass("active").find(".accordion-body").removeClass("shown"),setTimeout((function(){t(e).find(".accordion-body").removeClass("ellipses")}),350)):(t(".accordion__item").removeClass("active"),t(this).removeClass("active"),t(this).addClass("active").find(".accordion-body").addClass("shown ellipses")),setTimeout((function(){i.a.refresh({offset:50})}),400),!1})),t(document).on("click",".accordion__item--js",(function(){return t(this).hasClass("active")?(t(".accordion__item").removeClass("active"),t(this).removeClass("active").find(".accordion-body").slideUp()):(t(".accordion__item").removeClass("active").find(".accordion-body").slideUp(),t(this).removeClass("active"),t(this).addClass("active").find(".accordion-body").slideDown()),setTimeout((function(){i.a.refresh({offset:50})}),400),!1})),s()}.call(this,a(0))},function(t,e,a){"use strict";a.r(e),function(t){var e=a(1),n=a.n(e);function i(e,a){var i=t(".filter__item--js");t(".btn--js").hide(),i.velocity({opacity:0,translateY:"-20px"},{display:"none"},{duration:500}),"*"===e?i.velocity({opacity:1,translateY:"0px"},{display:"block"},{duration:500}):(t(i).filter((function(a,n){return t(n)[0].dataset.text.startsWith(e)})).velocity({opacity:1,translateY:"0px"},{display:"block"},{delay:300,duration:500}),setTimeout((function(){n.a.refresh({offset:50})}),500)),t(".filter--js li").removeClass("active"),a.addClass("active")}t(".filter--js").on("click","li:not(.last)",(function(){t(this).hasClass("active")||i(t(this).data("text"),t(this))})),t(".filter--js").on("click","li.last",(function(){var e=t(".filter--js li:first-child");e.hasClass("active")||i(e.data("text"),e)}))}.call(this,a(0))},function(t,e,a){"use strict";a.r(e),function(t){a(20),a(21);function e(e){return void 0!==e.element&&void 0!==e.element.dataset.img?t('<span><img src="'+e.element.dataset.img+'" class="img-flag" /> '+e.text+"</span>"):t("<span>"+e.text+"</span>")}function n(e,a){var n,i=t(a.prevObject).closest(".select2").prev().data("title");return(n=void 0!==e.element&&void 0!==e.element.dataset.img?t('<span><img class="img-flag" /> <span></span></span>'):t('<span><span class="select2-selection-text"></span></span>')).find("span").html('<span class="title">'.concat(i,"</span>").concat(e.text)),n.find("img").attr("src",e.element.dataset.img),n}t(".select-template").select2({selectOnClose:!0,templateResult:e,templateSelection:n,minimumResultsForSearch:1/0,theme:t(void 0).data("theme")}),t(".select-template").on("select2:select",(function(e){t(".catalogFilter--js span").text(e.params.data.text)})),t(".select-template").on("select2:open",(function(){t(".select2-dropdown").hide(),setTimeout((function(){t(".select2-dropdown").slideDown({duration:500,easing:"easeInOutCubic"})}),200)})),t(".select-template").on("select2:closing",(function(a){a.preventDefault(),setTimeout((function(){t(".select2").addClass("closing"),t(".select2-dropdown").slideUp(500,(function(){setTimeout((function(){t(".select-template").select2("destroy"),t(".select-template").select2({selectOnClose:!0,templateResult:e,templateSelection:n,minimumResultsForSearch:1/0}),t(".select-template").removeClass("closing")}),500)}))}),0)}))}.call(this,a(0))},,,function(t,e,a){"use strict";a.r(e);var n=a(5);new(a.n(n).a)("Image")},function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"validateEmail",(function(){return i})),a.d(e,"validatePhone",(function(){return s})),a.d(e,"validateField",(function(){return o}));var n=a(6);function i(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}function s(t){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(t)}function o(t,e){var a,n=t.attr("required"),o=".control-error",l="checkbox"===t.attr("type"),r=e;return""===t.val()?(t.closest(".input").removeClass("input--filled"),a=!1):(t.closest(".input").addClass("input--filled"),a=!0),r&&("email"===t.prop("type")?i(r)?(t.closest(".input").removeClass("error"),t.closest(".input").find(o).text(""),a=!0):(t.closest(".input").addClass("error"),t.closest(".input").find(o).text("Поле заполнено некорректно"),a=!1):"phone"===t.prop("name")?s(r)?(t.closest(".input").removeClass("error"),t.closest(".input").find(o).text(""),a=!0):(t.closest(".input").addClass("error"),t.closest(".input").find(o).text("Поле заполнено некорректно"),a=!1):(t.closest(".input").removeClass("error"),t.closest(".input").find(o).text(""),a=!0)),l&&n&&(console.log(t.prop("checked")),t.prop("checked")?(t.closest(".checkbox").find(o).text(""),a=!0):(t.closest(".checkbox").find(o).text("Для отправки сообщения необходимо согласие"),a=!1)),!r&&n&&(t.closest(".input").addClass("error"),t.closest(".input").find(o).text("Пожалуйста, заполните поле"),a=!1),"file"===t.prop("type")&&(a=!0),a}a.n(n)()({mask:"+7 (999) 999-99-99"}).mask("input[name=phone]"),t(".form--js").click((function(e){e.preventDefault();var a=[];if(t(this).closest("form").find("input, textarea").each((function(){var e=t(this)[0];a.push(o(t(this),e.value))})),a.includes(!1))return!1;var n,i=t(this).closest("form"),s=i.find("input[name=name]"),l=i.find("input[name=email]"),r=i.find("input[name=phone]"),c=i.find("textarea[name=content]"),d=i.attr("data-type"),p=t(this),u=null;"/contacts/"===window.location.pathname&&(u="/local/templates/main/include/ajax/contact/contact.php",n={name:s.val(),email:l.val(),text:c.val(),phone:r.val(),type:d}),t.ajax({type:"POST",url:u,dataType:"json",data:n,success:function(t){console.log(t.success),!0===t.success&&p.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),t(".form-back--js").click((function(){var e=t(this).closest("form");return e.trigger("reset"),e.find("input").parent().removeClass("input--filled"),t(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,a(0))},,function(t,e,a){(function(t){t(".form--js").click((function(){return t(".form-response").addClass("shown activated"),!1})),t(".reset--js").click((function(){return t(".form-response").removeClass("shown"),setTimeout((function(){t(".form-response").removeClass("activated")}),500),!1}))}).call(this,a(0))}]);