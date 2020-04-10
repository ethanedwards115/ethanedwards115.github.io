
var loc = "DD4";

function getWeather() {

  const url = "http://api.weatherapi.com/v1/forecast.json?";
  var key = "key=6756c3c7984f4786974140016202403&";
  var requestURL = url + key + "q=" + loc + "&days=1&";

  var request = fetch(requestURL);

  return request.then(response => {

    return response.json();

  }).then(json => {

    // console.log(json);
    return json.forecast.forecastday;

  }).then(forecast => {
    // console.log(forecast);

    return forecast[0];
  });

}

function addLocation(loc){

  let option = document.createElement("option");

  option.innerHTML = loc;

  let list = document.getElementById("location");

  list.appendChild(option);
}

function changeLocation(){

  let newLocation = document.getElementById("location").value;

  if(newLocation == "Dundee") {
    loc = "DD4";

  } else {

    loc = newLocation;
  }

  getWeather();
  getCondition();
}

addLocation("Dundee");
addLocation("Berlin");
addLocation("Moscow");
addLocation("Tokyo");
addLocation("Paris");
addLocation("Quebec");
addLocation("Sapporo");
addLocation("Perth");
