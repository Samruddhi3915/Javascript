// prototype;
let myName = "Samruddhi      ";
console.log(myName.length); //15
console.log(myName.trueLength); //returns undefined
console.log(myName.trim().length); //9
//creating trueLength
let anotherUsername = "SamruddhiAhire        ";
String.prototype.trueLength = function () {
  console.log(`this is +${this}`); //this is +SamruddhiAhire
  //   console.log(`this username is :+${this.name}`); // this username is :+undefined
  console.log(`True length is ${this.trim().length}`); // True length is 14
};
anotherUsername.trueLength();
"Samruddhi".trueLength();
"Ahire".trueLength();

//array
let myHeroes = ["thor", "Spiderman"];
//Object
let heroPower = {
  thor: "hammer",
  Spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.Spiderman}`);
  },
};
//injecting our own method in Object
Object.prototype.samruddhi = function () {
  console.log("Sam is present in all objects");
};
heroPower.samruddhi();
//Sam is present in all objects

//does array have same
// function accessibilty according to theory it should be their lets see practically-yes it is accessible
myHeroes.samruddhi();
//Sam is present in all objects

Array.prototype.heySamruddhi = function () {
  console.log("Samruddhi says hello");
};
myHeroes.heySamruddhi(); //this cant be accessible
// heroPower.heySamruddhi(); //this cant be accessible

//Inheritance
const User = {
  name: "Samruddhi",
  email: "sam@123.com",
};
const Teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};
//Teacher can access all properties of User using __proto__
Teacher.__proto__ = User;

//modern syntax using setPrototypeOf which stes the prototype of a specified object o to a object proto or null and returns the object o
Object.setPrototypeOf(teachingSupport, Teacher);
//teachingSupport will access all properties of Teacher
