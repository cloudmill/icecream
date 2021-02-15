$(() => {
  if ($('.map').length) {
    ymaps.ready(() => {
      shopsEvent();

      // инициализация карты
      const ymap = new ymaps.Map('map', {
        center: [66.413951, 94.241942],
        zoom: 3,
        controls: []
      });

      // шаблон контента метки кластера
      const contentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map__clusterer">{{ properties.geoObjects.length }}</div>'
      );

      //HTML шаблон балуна, того самого всплывающего блока, который появляется при щелчке на карту
      let myBalloonLayout = ymaps.templateLayoutFactory.createClass(
          '<address class="address-map" >'+
          '<p><b>$[properties.name]</b>'+
          '<br/>'+
          '<ul class="balloon-info" >'+
          '<li><strong>Адрес:&nbsp;</strong>$[properties.address]</li>'+
          '</ul>'+
          '</address>'
      );

      // создание кластера меток
      const clusterer = new ymaps.Clusterer({
        clusterIcons: [
          {
            href: '/local/templates/main/assets/images/map-cluster.svg',
            size: [43, 53],
            offset: [-21.5, -53]
          }
        ],
        clusterIconContentLayout: contentLayout
      });
     
      let placemark = {};

      $('[data-type=shop_select]').each(function() {
        let x = $(this).attr('data-coord-x'),
          y = $(this).attr('data-coord-y'),
          id = $(this).attr('data-id');

        // создание метки
        placemark[id] = new ymaps.Placemark([x, y], {
          name: $(this).attr('data-name'),
          address: $(this).attr('data-address'),
        }, {
          balloonContentLayout: myBalloonLayout,
          balloonOffset: [5,0],
          balloonCloseButton: true,
          balloonMinWidth: 150,
          balloonMaxWidth:200,
          balloonMinHeught:150,
          balloonMaxHeught:200,
          iconLayout: 'default#image',
          iconImageHref: '/local/templates/main/assets/images/map-placemark.svg',
          iconImageSize: [43, 53],
          iconImageOffset: [-21.5, -53]
        });

        placemark[id].events.add('click', function(e) {
          let item = $('.map__item[data-id=' + id + ']');
          $('[data-type=shop_select]').removeClass('map__item--active');
          item.addClass('map__item--active');

          ymap.setCenter(placemark[id].geometry.getCoordinates(), 15);
        });

        // добавление меток в кластер
        clusterer.add(placemark[id]);
      });

      // добавление кластера на карту
      ymap.geoObjects.add(clusterer);

      $(document).on('click', '[data-type=shop_select]', function () {
        let coordinates = [];
          coordinateX = $(this).attr('data-coord-x'),
          coordinateY = $(this).attr('data-coord-y'),
          id = $(this).attr('data-id');

        $(this).addClass('map__item--active').siblings().removeClass('map__item--active');
          
        coordinates.push(coordinateX);
        coordinates.push(coordinateY);

        ymap.panTo([coordinates], {
          flying: true,
          checkZoomRange: true,
        });
        ymap.setCenter(coordinates, 15);
        placemark[id].balloon.open();
      });

      function shopsEvent() {
        $('[data-type=region_select]').on('select2:select', function() {
          let container = $(this).parents('[data-type=map_container]'),
            shopsContainer = container.find('[data-type=shops_container]'),
            shopsBlock = container.find('[data-type=shops_block]'),
            region = $(this).val();
            
          $.ajax({
            type: 'post',
            url: '/world/oeskimo/',
            data: {
              ajax: true,
              region: region,
            },
            success: function(data) {
              let shopsBlockResponse = $(data).find('[data-type=shops_block]');
                
              shopsBlock.remove();
              shopsContainer.append(shopsBlockResponse);
            }
          });
        });
      }
    });
  }
});
