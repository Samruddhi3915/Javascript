//select all buttons
const buttons = document.querySelectorAll(".button");
//tag name ie.body can be given in querySelector too
const body = document.querySelector("body");

//events-moving cursor,closing tab,click,etc.
buttons.forEach(function (button) {
  console.log(button);
  //event listener
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target); ///origin of event
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
