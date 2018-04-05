function clickedOn(){
  let state = document.getElementById("states").value
  fetch("/getparks?state=" + state)
  .then(function(response){
    return response.json();
  })
  .then(function(campgrounds){
    var camps = [];
    for(let i of campgrounds.data){
      if (i.latLong !== "") {
        camp = i.latLong.split(":")
        let long = camp[1].split(",")[0]
        let lat = camp[2].split("}")[0]
        camps.push([long,lat])
      }
    }
    console.log(camps);
  })
}

function clickedOnCamp() {
  //
}
