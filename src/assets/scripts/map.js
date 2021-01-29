$(() => {

  if ($('.map').length) {

    ymaps.ready(() => {
      console.log('ymaps load');

      const coordinates = [55.75490826960838, 37.70814996984293];

      const ymap = new ymaps.Map('map', {
        center: [0, 0],
        zoom: 5
      }, {
        searchControlProvider: 'yandex#search'
      });

      const placemark = new ymaps.Placemark(coordinates, {
        hintContent: 'Метка',
        balloonContent: 'Метка'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/map-placemark.svg',
        iconImageSize: [43, 53],
        iconImageOffset: [-21.5, -53]
      });

      ymap.geoObjects.add(placemark).add(placemark).add(placemark);
      ymap.setCenter(coordinates);

      const contentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map__clusterer">{{ properties.geoObjects.length }}</div>'
      );
      const clusterer = new ymaps.Clusterer({
        clusterIcons: [
          {
            href: 'assets/images/map-cluster.svg',
            size: [43, 53],
            offset: [-21.5, -53]
          }
        ],
        clusterNumbers: [15],
        clusterIconContentLayout: contentLayout
      });

      const geoObjects = [];
      for (let i = 0; i < 10; i++) {
        geoObjects.push(new ymaps.Placemark([coordinates[0] + (-2 + Math.random() * 4), coordinates[1] + (-2 + Math.random() * 4)], {
          hintContent: 'Метка',
          balloonContent: 'Метка'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/images/map-placemark.svg',
          iconImageSize: [43, 53],
          iconImageOffset: [-21.5, -53]
        }));
      }

      clusterer.add(geoObjects);
      ymap.geoObjects.add(clusterer);

      // ymap.setBounds(clusterer.getBounds(), {
      //   checkZoomRange: true
      // });
    });

  }

});
