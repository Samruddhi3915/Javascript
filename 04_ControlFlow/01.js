//Control Flow
//1.if

const isUserLoggedIn = true;
const temperature = 41;
if (temperature < 50) {
  //statements
  console.log("Less than 50");
} else console.log("greater than 50");

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user power:${power}`);
}
// console.log(`user power:${power}`);//will give error due to scope

const balance = 1000;
//implicit scope without {}
if (balance > 500) console.log("test");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in ");
}
