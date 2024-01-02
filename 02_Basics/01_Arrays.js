//array in js are resizable and datatypes can be mixed

//they are not associative arrays

//when done copying it makes shallow copy(if changed then change in orginal array too ie.they share same reference)

//deep copy means they do not share same refernce

const myArray = [0, 1, 2, 3, 4, 5, true, "Sam"];
console.log(myArray);

const myHeroes = ["marvel", "shaktiman", "naagraj"];
console.log(myHeroes);

const myArr2 = new Array(0, 1, 2);
console.log(myArr2);

const myArray1 = [0, 1, 2, 3, 4, 5];
console.log(myArray1);
//accessing ele by index
console.log(myArray1[0]);
//dont do this way
// console.log(myArray1["one"]);

//methods
console.log(myArray);
myArray.push(6);
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.unshift(2); //adds at zeroth index of array but it is a time consuming operations since needs to shift all values after zeroth value
console.log(myArray);

myArray.shift();
myArray.shift(); //removes element from first
console.log(myArray);

console.log(myArray.includes(6)); //answers in true or false

console.log(myArray.indexOf(6)); //if not exists gives -1

const newArray = myArray.join(); //converts array to String
console.log(myArray);
/*[
  1,     2, 3,
  4,     5, true,
  'Sam'
]*/
console.log(newArray);
//1,2,3,4,5,true,Sam

console.log(typeof newArray); //string

//slice,splice
console.log("A ", myArray);
/*A  [
  1,     2, 3,
  4,     5, true,
  'Sam'
]*/

const myn1 = myArray.slice(0, 3);
console.log(myn1);
//[ 1, 2 ]
console.log("B ", myArray);
/*B  [
  1,     2, 3,
  4,     5, true,
  'Sam'
]*/
const myn2 = myArray.splice(0, 3);
console.log(myn2);
//[ 1, 2, 3 ]

//diff between slice and splice
/*slice gives same array as op
splice manipulates original array*/

//more methods
const marvel_heroes = ["thor", "ironman", "spiderman"];

const dc_heroes = ["superman", "flash", "batman"];

marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] array within array

// console.log(marvel_heroes[3][1]);
//flash

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2); //concats two array and puts value in third one
console.log(a3);
//[ 1, 2, 3, 4, 5, 6 ]

//spread operator
const a4 = [...a1, ...a2];
console.log(a4);
// [1, 2, 3, 4, 5, 6];

//operations in array within array
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [4, 5]]];

const real_another_array = another_array.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_array);
/*[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10,
  4, 5
]*/

console.log(Array.isArray("Hitesh")); //false
//converts into array
console.log(Array.from("Samruddhi")); /*[
  'S', 'a', 'm',
  'r', 'u', 'd',
  'd', 'h', 'i'
]*/

//gives [] array since it gets confused wheteher to make array of key or make array of value
console.log(Array.from({ name: "Samruddhi" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.
//[ 100, 200, 300 ]
