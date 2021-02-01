$(() => {

  if ($('.map').length) {

    ymaps.ready(() => {
      console.log('ymaps ready');

      // пример координаты
      const coordinates = [55.75490826960838, 37.70814996984293];

      // инициализация карты
      const ymap = new ymaps.Map('map', {
        center: [0, 0],
        zoom: 5,
        controls: []
      });

      // создание метки
      const placemark = new ymaps.Placemark(coordinates, null, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/map-placemark.svg',
        iconImageSize: [43, 53],
        iconImageOffset: [-21.5, -53]
      });

      setTimeout(() => {
        // добавление метки на карту
        ymap.geoObjects.add(placemark);
        // центрирование карты:
        // вариант 1
        // ymap.setCenter(coordinates, 15);
        // вариант 2 (с анимацией полета)
        ymap.panTo(coordinates);
      }, 2000);

      // шаблон контента метки кластера
      const contentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map__clusterer">{{ properties.geoObjects.length }}</div>'
      );
      // создание кластера меток
      const clusterer = new ymaps.Clusterer({
        clusterIcons: [
          {
            href: 'assets/images/map-cluster.svg',
            size: [43, 53],
            offset: [-21.5, -53]
          }
        ],
        clusterIconContentLayout: contentLayout
      });

      // метки для кластера
      const geoObjects = [];
      for (let i = 0; i < 10; i++) {
        geoObjects.push(new ymaps.Placemark([coordinates[0] + (-2 + Math.random() * 4), coordinates[1] + (-2 + Math.random() * 4)], null, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/images/map-placemark.svg',
          iconImageSize: [43, 53],
          iconImageOffset: [-21.5, -53]
        }));
      }

      // добавление меток в кластер
      clusterer.add(geoObjects);
      // добавление кластера на карту
      ymap.geoObjects.add(clusterer);

      setTimeout(() => {
        // позиционирование карты на области (область, охватывающая метки кластера)
        ymap.setBounds(clusterer.getBounds(), {
          checkZoomRange: true
        });
      }, 4000);
    });

  }

});
