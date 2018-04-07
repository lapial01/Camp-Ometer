$('.ui.dropdown')
  .dropdown();

function clickedOn(){
  let state = document.getElementById("states").value
  fetch("/getparks?state=" + state)
  .then(function(response){
    return response.json();
  })
  .then(function(parks){
    var all_parks = [];
    for(let park of parks.data){
      let park_name = park.name,
          long_lat = park.latLong,
          description = park.description;
      if (long_lat !== "" && park_name !== "") {
        let camp = park.latLong.split(":")
        let long = camp[1].split(",")[0];
        let lat = camp[2].split("}")[0];
        all_parks.push([park_name,long,lat, description])
      }
    }
    console.log(all_parks);
    // for (let camp of all_parks) {
    //   let paragraph = document.createElement("p");
    //   paragraph.textContent = camp[0]
    //   document.body.appendChild(paragraph)
    // }
  return all_parks})
  .then(plotMarkers)
}
