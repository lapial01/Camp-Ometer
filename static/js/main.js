$('.ui.dropdown')
  .dropdown();

function clickedOn(){
  let state = document.getElementById("states").value
  fetch("/getparks?state=" + state)
  .then(function(response){
    return response.json();
  })
  .then(function(campgrounds){
    var camps = [];
    for(let i of campgrounds.data){
      camp_name = i.name;
      long_lat = i.latLong;
      description = i.description;
      if (long_lat !== "" && camp_name !== "") {
        camp = i.latLong.split(":")
        let long = camp[1].split(",")[0];
        let lat = camp[2].split("}")[0];
        camps.push([camp_name,long,lat, description])
      }
    }
    console.log(camps);
    for (let camp of camps) {
      let paragraph = document.createElement("p");
      paragraph.textContent = camp[0]
      document.body.appendChild(paragraph)
    }
  return camps})
  .then(plotMarkers)
}

function clickedOnCamp() {
  //
}
