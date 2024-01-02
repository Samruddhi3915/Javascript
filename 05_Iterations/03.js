//array specific loop
//for of loop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}
/*
1
2
3
4
5*/

const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(greet);
}
/*
H
e
l
l
o
 
W
o
r
l
d
!*/

//maps in JS-key value pair
const newMap = new Map();
newMap.set("IN", "India");
newMap.set("USA", "United States of America");
console.log(newMap);
/*
Map(2) { 'IN' => 'India', 'USA' => 'United States of America' }*/

//loop on maps
for (const it of newMap) {
  console.log(it);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]*/

for (const [key, value] of newMap) {
  console.log(key, ":-", value);
}
/*
IN :- India
USA :- United States of America*/

const myObject = {
  Game1: "NFS",
  Game2: "Spiderman",
};

for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
//Error:myObject is not iterable
