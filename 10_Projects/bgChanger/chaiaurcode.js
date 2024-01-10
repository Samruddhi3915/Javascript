//to generate random color in hex
const randomColor = function () {
  const hex = "0123456789ABCDEF"; //since hex is from 0-9 and A-F
  let color = "#";
  for (
    let i = 0;
    i < 6;
    i++ //6 since colors are of 6 digits eg #FFFFFF
  ) {
    color += hex[Math.floor(Math.random() * 16)]; //16 since hex
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  //flush out inteval ID to avoid overwritting
  intervalId = null;
};
document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
