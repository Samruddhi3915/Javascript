const { prototype } = require("form-data");

function multiplyByFive(num) {
  this.num = num;
  return num * 5;
}

console.log(multiplyByFive(5)); //25
multiplyByFive.power = 2;
console.log(multiplyByFive.power); //2
console.log(multiplyByFive.prototype); //{}

//this keyword is also associated to prototype
function createuser(username, score) {
  this.username = username;
  this.score = score;
}
createuser.prototype.increment = function () {
  this.score++;
};
createuser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};
const user1 = new createuser("Samruddhi", 90);
const user2 = new createuser("Sam", 100);

user1.printMe(); //TypeError: Cannot read property 'printMe' of undefined if not given new keyword

console.log(user1);
console.log(user2);

//notes-this happens behind the scenes when the new keyword is used:
// 1.A new object is created: The new keyword initiates the creation of a new JS object
// 2.A prototype is linked:
// The newly created object gets linked to the prototype property of the constructor function.This means that it has access to properties and methods defined on the constructors prototype
// 3.The constructor is called:The constructor function is called with the specified arguments and this is bound to the newly created object.If no explicit return value is specified from the constructor, JS assumes this, the newly created object, to be the intended return value
// 4.The new object is returned:After the constructor function has been called,if it doesn't return a non-primitive value(object,array,function,etc),the newly created object is returned.
