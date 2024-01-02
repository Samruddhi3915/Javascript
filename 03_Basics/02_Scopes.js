//scope

//let var and const
//global scope
//var c = 300;
let a = 300;
//scope

if (true) {
  //block scope
  let a = 10;
  const b = 20;
  //var c = 30;
} //in function,ifelse ,etc

// console.log(a); //ReferenceError: a is not defined
// console.log(b);
// console.log(c); //30

// a and b will not print but c will print since it is var

//now c has two values 300 and 30 but output comes as 30
//therefore we avoid var

console.log(a);
//300 since global scope of a is 300

//nested scope
function one() {
  const username = "Samruddhi";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); //will give error
  two();
}
one(); //Samruddhi

if (true) {
  const username = "sam";
  if (username === "sam") {
    const website = "youtube";
    console.log(username + website); //samyoutube
  }
  //   console.log(website);//will give error
}

// console.log(username);//will give error since it is declared in if

//interesting
//Que:
//function
//will give ans as 6 and can be used to console even before function declaration
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// console.log(addOne(5)); //6

//expression like variable

//hoisting
console.log(addTwo(5)); //this will give error since runned before function declaration
const addTwo = function (num) {
  return num + 2;
};

// console.log(addTwo(5)); //7
