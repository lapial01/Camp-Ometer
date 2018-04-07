document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyA8G8oMHHJExl4LvmX3LpCWgwQVi7KeZow&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});


var map;
var markers = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:40, lng:-90},
    zoom: 4
  });
}

function plotMarkers(m){
  deleteMarkers();
  let bounds;
  // markers = [];
  bounds = new google.maps.LatLngBounds();

  m.forEach(function (marker) {
    var position = new google.maps.LatLng(marker[1], marker[2]);

    markers.push(
      new google.maps.Marker({
        position: position,
        title: marker[0],
        map: map,
        animation: google.maps.Animation.DROP
      })
    );

    bounds.extend(position);
  });
  map.fitBounds(bounds);
}

function deleteMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
  };
