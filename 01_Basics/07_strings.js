const name = "Samruddhi";
const repcount = 50;

//console.log(name + repcount);

//string interpolation ``
console.log(`Hello my name is ${name} and my repcount is ${repcount}`);

//string declaration
const gameName = new String("Sam-610");
console.log(gameName[0]);

//string methods
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.indexOf("a"));
const newString = gameName.substring(-6, 4);
//if given -ve in substring it will start from 0 only
console.log(newString);
const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const str1 = "                abc          ";

console.log(str1.trim(" "));

const str2 = "https://samruddhi.com/sam%20ahire";

console.log(str2.replace("%20", "-"));

console.log(str2.includes("sam"));
console.log(str2.includes("abc"));

const str3 = "samruddhi-ahire-ahirezz";

console.log(str3.split("-"));
