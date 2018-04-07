document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    let js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyA8G8oMHHJExl4LvmX3LpCWgwQVi7KeZow&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});


let map;
let markers = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:40, lng:-90},
    zoom: 4
  });
}

function plotMarkers(m){
  deleteMarkers();
  let bounds;
  bounds = new google.maps.LatLngBounds();

  m.forEach(function (marker) {
    let position = new google.maps.LatLng(marker[1], marker[2]);


    let newMarker = new google.maps.Marker({
      position: position,
      title: marker[0],
      map: map,
      animation: google.maps.Animation.DROP
    })
    let content = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+marker[0]+'</h1>'+
            '<div id="bodyContent">'+
            '<p><b>'+marker[0]+" "+marker[3]'</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '</p>'+
            '</div>'+
            '</div>';

    let infowindow = new google.maps.InfoWindow()

    google.maps.event.addListener(newMarker,'click', (function(newMarker,content,infowindow){
      return function() {
         infowindow.setContent(content);
         infowindow.open(map,newMarker);
      };
  })(newMarker,content,infowindow));

    bounds.extend(position);
    markers.push(newMarker)
  });
  map.fitBounds(bounds);
}

function deleteMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
  };
