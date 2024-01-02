//reduce method
const myNums = [1, 2, 3];
const myTotal = myNums.reduce(function (acc, currVal) {
  console.log(`acc+${acc}and currval:${currVal}`);
  return acc + currVal;
}, 0);
//start from 0
console.log(myTotal);
//6
/*
acc+0and currval:1
acc+1and currval:2
acc+3and currval:3*/

//arrow function
const myTotal1 = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal1); //6

const shoppingCart = [
  {
    itemName: "JS course",
    price: 2999,
  },
  {
    itemName: "CPP course",
    price: 1090,
  },
  {
    itemName: "DS course",
    price: 9888,
  },

  {
    itemName: "PY course",
    price: 1234,
  },
];

//to add all prices in shoppping cart uisng reduce

const abc = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(abc); //15211
