//Object literal-literally we make a object here-it is a basic unit
const user = {
  //properties
  username: "Sam",
  loginCount: 8,
  signedIn: true,
  //methods
  getuserDetails: function () {
    console.log("Got user details from DB");
    console.log(`username:${this.username}`); //username:Sam doesn't work if not provided this keyword
    console.log(this); //return current context ie.{
    //   username: 'Sam',
    //   loginCount: 8,
    //   signedIn: true,
    //   getuserDetails: [Function: getuserDetails]
    // }
  },
};
//this is used to know the context majorily suggests current context
console.log(user.username + " " + user.loginCount);
console.log(user.getuserDetails());
console.log(this); //returns empty object {} since it is global context but gives multiple details if done in browser

//constructor function-new keyword(which is used to make new context)
// Eg:
// const Promise1 = new Promise(function (resolve, reject))
// {

// }
// const date=new Date()

function User(username, loginCount, isLoggedIn) {
  //set these three values in name
  //LHS =our variable and RHS=our parameter
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };
  //   return this; if if not retured this then also it prints values
}

//values are overwritten in const UserOne = User("Samruddhi", 1, true);
// const UserTwo = User("Sam", 11, false); in this therefore we use new keyword

const UserOne = new User("Samruddhi", 1, true);
const UserTwo = new User("Sam", 11, false);
console.log(UserOne);
console.log(UserTwo);
//User { username: 'Samruddhi', loginCount: 1, isLoggedIn: true }
// User { username: 'Sam', loginCount: 11, isLoggedIn: false }

//new keyword
// 1.whenever we use a new keyword empty object is created which is called instance(Object)
// 2.constructor function is called due to new keyword
// 3.all the arguments are injected in this keyword
// 4.all values we get in function

console.log(UserOne.constructor); //constructor property is reference to itself as it is printing User now since its referring to User
//returns [Function: User]

//instanceof-returns boolean value and is used to check the type of an object at the run time

//encapsulation here is UserOne where everything is injected in Userone

//abstraction- here user doesnt know how the greeting function is working internally and where it is stored
