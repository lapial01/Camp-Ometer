function clickedOn(){
  let state = document.querySelector("input")
  fetch("/getparks?state="+state.value)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
}
