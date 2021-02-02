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

        // добавление меток в кластер
        clusterer.add(placemark[id]);
      });

      // добавление кластера на карту
      ymap.geoObjects.add(clusterer);

      // setTimeout(() => {
      //   // позиционирование карты на области (область, охватывающая метки кластера)
      //   ymap.setBounds(clusterer.getBounds(), {
      //     checkZoomRange: true
      //   });
      // }, 4000);

      $('[data-type=shop_select]').on('click', function () {
        let coordinates = [];
          coordinateX = $(this).attr('data-coord-x'),
          coordinateY = $(this).attr('data-coord-y');
          
        coordinates.push(coordinateX);
        coordinates.push(coordinateY);

        console.log([coordinates]);
        ymap.panTo([coordinates], {
          flying: true,
          checkZoomRange: true,
        });
      });
    });
    
    function shopsEvent() {
      $('[data-type=region_select]').on('select2:select', function() {
        let container = $(this).parents('[data-type=map_container]'),
          shops = container.find('[data-type=shop_select]'),
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
            let shopsResponse = $(data).find('[data-type=shop_select]');
              
            shops.remove();
            shopsBlock.append(shopsResponse);
          }
        });
      });
    }
  }
});