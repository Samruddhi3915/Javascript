const clock = document.getElementById("clock");
//  or can be written as document.querySelector("#clock")
//if want to display time and date
// let date = new Date();
// console.log(date.toLocaleString());

//but we want digital clock that updates every second
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //runs for a certain interval
// 1000 is in ms
