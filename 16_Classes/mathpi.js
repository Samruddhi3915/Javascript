//que:can math.pi value change from 3.141592653589793 to 4
console.log(Math.PI); //3.141592653589793
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

// Object.create()//create is a factory method

const user = {
  name: "Samruddhi",
  score: 90,
  isAvailable: true,
  orderUser: function () {
    console.log("User is not found");
  },
};
console.log(user);
//{ name: 'Samruddhi', score: 90, isAvailable: true }

console.log(Object.getOwnPropertyDescriptor(user)); //undefined
console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*{
  value: 'Samruddhi',
  writable: true,
  enumerable: true,
  configurable: true
}*/
Object.defineProperty(user, "name", {
  //   writable: false,
  enumerable: true, //enumerate is iterate when it is false it will just return key is score and value is 90 key is isAvailable and value is true but if enumerable is true it will allow to iterate ie.it will also print username the output will be:key is name and value is Samruddhi key is score and value is 90 key is isAvailable and value is true
});
console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*
{
  value: 'Samruddhi',
  writable: false,
  enumerable: false,
  configurable: true
}*/

/*for (let [key, value] of user) {
  console.log(`key is ${key} and value is ${value}`);
}*/
//TypeError: user is not iterable

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`key is ${key} and value is ${value}`);
  }
}
//key is score and value is 90
//key is isAvailable and value is true
