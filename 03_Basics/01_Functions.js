//function
function abc() {
  //{} is function definition
  console.log("S");
  console.log("A");
  console.log("M");
}
// abc//reference
abc(); //execute

//add 2 nos
//here num1 and num2 are parameters
function add2nos(number1, number2) {
  return number1 + number2;
}

add2nos(2, 3); //5
add2nos(2, "3"); //23
add2nos("A", 3); //A3
//here 3 and null are arguments
const res = add2nos(3, null); //3
console.log(res); //comes as undefined since we did console.log but if we return num1+num2 then result comes as 3 in res variable

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Samruddhi"));
//Samruddhi just logged in

console.log(loginUserMessage()); //undefined just logged in

//rest operator ... which is same like spread but use cases are different
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500));
//[ 200, 400, 500 ] gives all values in array

function calculateCartPrice1(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice1(200, 400, 500, 2000));
//[ 500, 2000 ] 200 taken by val1 and 400 taken by val2

//passing object in function
const user = {
  username: "sam",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);
//Username is sam and price is 199

//passing array in function
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); //400

//or

console.log(returnSecondValue([200, 900, 100, 1000])); //900
