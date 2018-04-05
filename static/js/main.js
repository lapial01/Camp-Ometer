function clickedOn(){
  let state = document.getElementById("states").value
  fetch("/getparks?state=" + state)
  .then(function(response){
    return response.json();
  })
  .then(function(campgrounds){
    var camps = []
    for(let i of campgrounds.data){
      if (i.latLong !== "") {
        camps.push(i.latLong)
      }
    }
    console.log(camps);
  })
}

function clickedOnCamp() {
  //
}
