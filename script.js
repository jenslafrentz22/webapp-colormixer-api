const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const hex = document.querySelector("#hex");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
let isButtonClicked;

for (i = 0; i < inputs.length; i++) {
  inputs[i].step = 1;
  inputs[i].min = 0;
  inputs[i].max = 255;
}

red.value = 255;
green.value = 105;
blue.value = 180;

function changeBGColor(rcolor, redvalue, greenvalue, bluevalue) {
  // value = string, daher +
  const redbg = (+red.value).toString(16);
  const greenbg = (+green.value).toString(16);
  const bluebg = (+blue.value).toString(16);
  let bgcolor = `#${redbg}${greenbg}${bluebg}`;
  console.log(isButtonClicked);
  if (isButtonClicked === 1) {
    bgcolor = rcolor;
    red.value = redvalue;
    green.value = greenvalue;
    blue.value = bluevalue;
  }
  isButtonClicked = 0;
  document.body.style.backgroundColor = bgcolor;
  hex.innerText = bgcolor;
}
changeBGColor();
document.addEventListener("input", changeBGColor);

// Random Color Button
function loadRandomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      redvalue = data.rgb.r;
      greenvalue = data.rgb.g;
      bluevalue = data.rgb.b;
      // Werte setzen über vorhandene changeBGColor()
      changeBGColor(data.color, redvalue, greenvalue, bluevalue);
    });
  isButtonClicked = 1;
}
button.addEventListener("click", loadRandomColor);
