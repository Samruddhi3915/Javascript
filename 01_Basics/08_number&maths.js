//Numbers

const score = 90;
console.log(score);
console.log(typeof score);

const balance = new Number(800);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.4599;

console.log(otherNumber.toPrecision(5));

const hundreds = 1000000;
//Indian standard
console.log(hundreds.toLocaleString("en-IN"));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Maths
console.log(Math.floor(234.67));
console.log(Math.ceil(234.67));

console.log(Math.PI);

console.log(Math.abs(-9876565));

console.log(Math.round(4.5));

console.log(Math.sqrt(16));

console.log(Math.pow(2, 3));

console.log(Math.min(0, 98));
console.log(Math.max(7, 6, 9));
//always value will be between 0 and 1
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random(1, 4) * 10);

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

//most imp
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//+1 to avoid 0 values
