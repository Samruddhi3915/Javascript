//submit event on form
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //taking values in function since we want to grab values on event click ie. take immediate values when we write in height and weight textbox
  const height = parseInt(document.querySelector("#height").value); //grabbing input value from hieght and weight text box,it comes in string so we parse in int
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //displaying BMI in result
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
