//Immediately Invoked Function Expression (IIFE)

(function chai() {
  //named IIFE
  console.log(`DB CONNECTED`);
})();

//first()-function def
//second()-run function
//to reduce global scope pollution we use IIFE

//unnamed or simple IIFE
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Samruddhi");
//DB CONNECTED TWO Samruddhi
