ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("myMap", {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 14,
  });

  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  myMap.behaviors.disable(['scrollZoom']);

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
    }
  });

  myMap.controls.add(zoomControl);

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pointmap.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
}

// ----

myMap.controls.remove('geolocationControl'); // удаляем геолокацию
myMap.controls.remove('searchControl'); // удаляем поиск
myMap.controls.remove('trafficControl'); // удаляем контроль трафика
myMap.controls.remove('typeSelector'); // удаляем тип
myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
myMap.controls.remove('rulerControl'); // удаляем контрол правил
myMap.behaviors.disable(['scrollZoom']); // отключаем скрол карты (опционально)
