//map method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => {
  return num + 10;
});

console.log(newNums);
/*[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/

//chaining method

const newNums1 = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums1);
/* 
  [
  41, 51,  61, 71,
  81, 91, 101
]*/
