const userEmail = "2@sam.ai";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

//falsy values
/*
false,0,-0,BigInt 0n,"",null,undefined,NaN*/

//truthy values
//"0",'false',"false"," ",[],{},function(){},

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

//Nullish Coalescing Operator(??)

let val1;
// val1 = 5 ?? 10;//5
// val1 = null ?? 10; //10
// va11 = undefined ?? 15; //undefined
// val1 = null ?? 10 ?? 20;//10
console.log(val1);

//ternary operator
// condition?true:false
const iceTeaPrice = 100;
iceTeaPrice >= 80
  ? console.log("less than 80")
  : console.log("greater than 80");
//less than 80
