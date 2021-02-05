// $(() => {
//   if ($('.map').length !== 0) {
//     ymaps.ready(() => {
//       console.log('ymaps ready');

//       const coordinates = [55.75490826960838, 37.70814996984293];

//       const ymap = new ymaps.Map('map', {
//         center: coordinates,
//         zoom: 15,
//         controls: []
//       });

//       const balloonLayoutClass = ymaps.templateLayoutFactory.createClass(
//         `
//           <div class="map__balloon-wrapper">
//             $[[options.contentLayout]]
//           </div>
//         `,
//         {
//           build: function () {
//             this.constructor.superclass.build.call(this);

//             this._$element = $('.map__balloon-wrapper', this.getParentElement());

//             this.applyElementOffset();
//           },
//           applyElementOffset: function () {
//             this._$element.css({
//               left: -(this._$element[0].offsetWidth / 2),
//               top: -(this._$element[0].offsetHeight)
//             });
//           },
//         }
//       )
//     );

//     const balloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(
//       `
//           <div class="map__balloon">
//             <h6 class="map__balloon-title">
//               {{ properties.title }}
//             </h6>
//             <address class="map__balloon-address">
//               {{ properties.address }}
//             </address>
//           </div>
//         `
//     );

//     const placemark = new ymaps.Placemark(coordinates, {
//       title: '«Аутлет Белая дача Котельники»',
//       address: 'Новорязанское шоссе, 8',
//     }, {
//       iconLayout: 'default#image',
//       iconImageHref: 'assets/images/map-placemark.svg',
//       iconImageSize: [43, 53],
//       iconImageOffset: [-21.5, -53],
//       balloonLayout: balloonLayoutClass,
//       balloonContentLayout: balloonContentLayoutClass,
//       balloonPanelMaxMapArea: 0,
//     });

//     ymap.geoObjects.add(placemark);
//   });
//   }
// });
