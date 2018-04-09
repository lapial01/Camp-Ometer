function getForecast(obj) {
    fetch("/getweather?lat=" + Math.round(obj.lat) + "&lon=" + Math.round(obj.lon)).then(function(response) {
        return response.json()
    }).then(function(data) {
        fiveDayWeather(data.list)
    })
}

function fiveDayWeather(lst) {
    let five_days = {};
    for (let day of lst){
        let day_dt_txt = day.dt_txt.split(" ")
        if (!(day_dt_txt[0] in five_days)) {
            five_days[day_dt_txt[0]] = day.main
            five_days[day_dt_txt[0]]["icon"] = day.weather[0]["icon"]
            five_days[day_dt_txt[0]]["description"] = day.weather[0]["description"]
        }
    }
    displayCards()
    populateCards(five_days)
}


function displayCards(){
  let allcards = document.querySelector(".cards")
  if (allcards.style.visibility == "hidden") {
    allcards.style.visibility = "visible";
  }
}

function populateCards(obj){
  let eachcard_title = document.querySelectorAll(".title"),
      allcards = document.querySelectorAll(".card"),
      icons = document.querySelectorAll(".weather_icon"),
      temps = document.querySelectorAll(".desc");

  let i = 0,
  max = 32,
  chosen;

  for (let item in obj) {
    allcards[i].style.background = "#2b2727";
    if (obj[item]["temp_max"] > max) {
      max = obj[item]["temp_max"]
      chosen = allcards[i]
    }
    let split_date = item.split("-")
    eachcard_title[i].textContent = split_date[1]+"/"+split_date[2]
    eachcard_title[i].style.color = "white";
    icons[i].src = "http://openweathermap.org/img/w/"+obj[item]["icon"]+".png"
    icons[i].title = obj[item]["description"]
    temps[i].textContent = "Max temperature: " + obj[item]["temp_max"] + "°F"
    i++;
  }
  chosen.style.background = "#00C851";
}
