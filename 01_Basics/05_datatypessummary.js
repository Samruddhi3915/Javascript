//1.primitive(call by value)
//7 types:String,Number,Boolean,null,undefined,Symbol(to make unique value),BigInt(big values)

//Q:is JS dynamic typed or static type
//Ans-Dynamically typed
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const temp = null;
let userEmail;

const id = Symbol("123");
const anotherid = Symbol("123");
console.log(id == anotherid);
console.log(id);
console.log(anotherid);

const bigNumber = 123456789876598765434786865756757576566664654646545;
console.log(typeof bigNumber);
//2.non primitive/reference
//
//Array,Objects,Functions
//array
const fruits = ["apple", "mango"];
//object
let myobj = {
  name: "Samruddhi",
  age: 21,
};
//function

const abc = function () {
  console.log("Sam");
};

console.log(typeof myobj);
console.log(typeof abc);
