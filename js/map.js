var map;

function initMap() {

  var europe = {
    lat: 51.0726018,
    lng: 3.2052578
  }; 

  map = new google.maps.Map(document.getElementById('map'), {
    center: europe,
    zoom: 5
  });

  var markers = getLocations().map(function(location, i) {
    var marker = new google.maps.Marker({
      position: {lat: location.latitude, lng: location.longitude}
    });

    var infowindow = new google.maps.InfoWindow({
      content: renderLoaction(location)
    });

    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker);
    });

    return marker;
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}
