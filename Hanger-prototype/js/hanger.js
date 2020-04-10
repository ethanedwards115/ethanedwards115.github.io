let rainy = false;
let sunny = false;
let snowy = false;


function setup() {

  getCondition();
  createCanvas(400, 200);
}

function draw() {
  // ellipse(60, height/2, 60, 60);
  // ellipse(120, height/2, 60, 60);
  // ellipse(180, height/2, 60, 60);
  // ellipse(240, height/2, 60, 60);


  for (let i = 1; i <= 3; i++) {

    // All lights are initially "off"
    fill(0);

    // Fill the colour for the current condition
    if(sunny && i == 1){
      fill(237, 213, 158);
    }

    if(rainy && i == 2){
      fill(0, 117, 143);
    }

    if(snowy && i == 3){
      fill(240, 240, 236);
    }

    ellipse(i*60, height / 2, 60, 60);
  }
}

function getCondition() {

  let code;

  weather = getWeather();

  weather.then(json => {

    code = json.day.condition.code;

    if (code <= 1003) {
      sunny = true;
      rainy = false;
      snowy = false;

    } else if ((code >= 1006 && code <= 1063)
      || code == 1135 || code == 1150
      || code == 1153
      || (code >= 1180 && code <= 1195)
      || (code >= 1240 && code <= 1249)
      || code == 1273 || code == 1276) {

      rainy = true;
      sunny = false;
      snowy = false;

    } else {
      snowy = true;
      sunny = false;
      rainy = false;
    }
  });
}
