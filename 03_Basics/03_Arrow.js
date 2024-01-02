const user = {
  username: "Samruddhi",
  price: 999,
  //this: to refer current context
  welcomeMessgae: function () {
    console.log(`${this.username} ,welcome to website`);
    console.log(this);
    /*{
  username: 'sam',
  price: 999,
  welcomeMessgae: [Function: welcomeMessgae]
}*/
  },
};

user.welcomeMessgae(); //Samruddhi ,welcome to website

user.username = "sam"; //context changed to sam from Samruddhi
user.welcomeMessgae(); //sam ,welcome to website

console.log(this); //{}

//global object in browser is window

function chai() {
  let username = "Sam";
  console.log(this.username); //this will give undefined
  console.log(this);
  /*
    <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}*/
}
chai();

//Arrow function

const chai1 = () => {
  let username = "samruddhi";
  console.log(this.username); //undefined
  console.log(this); //{}
};

chai1();
//if wrapped in {} then we need to use return keyword

//if wrapped in () then no need of return keyword
//explicit keyword-use of return keyword
//implicit return-no use of return keyword
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 4)); //7

//return object in arrow functiom
const addThree = (num1, num2) => ({
  username: "Samruddhi",
});

console.log(addThree(5, 4));
//{ username: 'Samruddhi' }
