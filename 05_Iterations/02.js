//while
let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index += 2;
}
/*
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10*/

let myArray = ["flash", "bat", "super"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr++;
}
/*
Value is flash
Value is bat
Value is super*/

//do while-runs at least once before checking the condition
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 5);
/*
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5*/
