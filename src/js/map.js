import iconSrc from '/icons/all/location-logo.svg';

const $locationsMap = document.querySelector(".js-map-locations");
if (typeof ymaps !== "undefined") {
  ymaps.ready(initLocations);
}

function initLocations() {
  const map = new ymaps.Map($locationsMap, {
    center: [55.752574, 37.61856],
    zoom: 9,
  });

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    map.behaviors.disable(["scrollZoom"]);
  }

  const customIcon = {
    iconLayout: "default#image",
    iconImageHref: iconSrc,
    iconImageSize: [42, 52],
    iconImageOffset: [-26, -42],
  };

  const clusterer = new ymaps.Clusterer({
    clusterIcons: [
      {
        size: [0, 0],
        offset: [-20, -20],
      },
    ],
    clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
      '<div class="custom-cluster">{{ properties.geoObjects.length }}</div>'
    ),
    groupByCoordinates: false,
    clusterDisableClickZoom: false,
  });

  const locations = [
    { coords: [55.54562302531325, 37.07630859325407], name: "ул. Островского, д.3" },
    { coords: [55.80057456894279, 37.97508399999998], name: "пр-т Ленина, д. 77" },
    { coords: [55.723034069011796, 37.2858154999999], name: "посёлок Барвиха, д. 40" },
  ];

  const placemarks = locations.map(function (location) {
    return new ymaps.Placemark(
      location.coords,
      {
        balloonContent: location.name,
      },
      customIcon
    );
  });

  clusterer.add(placemarks);

  map.geoObjects.add(clusterer);
}
