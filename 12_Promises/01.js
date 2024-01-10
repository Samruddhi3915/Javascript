//promise represnets the eventual completion or failure of an async operation and its resulting value
//it means task given to JS is not loaded yet and cant be completed now it will complete in future using promises
//we use either async await or use promise
//promises has 3 states:
// pending,fulfilled and rejected
//promises are mostly consumed
//promise is and object represnting eventual completion
const fetch = require("node-fetch").default;
// const promise1 = new Promise(function (resolve, reject) {
//   //do and async task
//   //db calls,cryptography related,n/w related-async task
//   setTimeout(function () {
//     console.log("Async task is completed");
//   }, 1000);
//   resolve(); //connects resolve to then
// }); //creates a promise
// //consume promise
// promise1.then(function () {
//   console.log("Promise consumed");
// }); //.then is related to resolve

// //second way
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//   }, 1000);
//   resolve();
// }).then(function () {
//   console.log("Async task 2 resolved");
// });

// //third promise
// const Promise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {}, 1000);
//   resolve({ username: "Chai", email: "chai@example.com" });
// });
// Promise3.then(function (user) {
//   console.log(user);
//   //will return { username: 'Chai', email: 'chai@example.com' }
// });

// const Promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Samruddhi", password: "sam123" });
//     } else {
//       reject("ERROR:Something went wrong"); //sends errror
//     }
//   });
// });
// Promise4.then((user) => {
//   console.log(user);
//   return user.username;
// })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected ");
//   }); //finally runs always
// // console.log(username);
// // Promise4.catch(); //catch will catch errors

// const Promise5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR:JS went wrong"); //sends errror
//     }
//   });
// });

// //using async await
// async function consumePromise5() {
//   try {
//     const response = await Promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } //ERROR:JS went wrong
// }
// consumePromise5();
//prints { username: 'javascript', password: '123' } if error is false
// else if handled in try ctach and made error as true it will print ERROR:JS went wrong

//another way
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); //fetch needs a url and returns a promise
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

// writing getAllUsers using then catch instead of async await
fetch("https://api.github.com/users/Samruddhi3915")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
/*
fetch is one of the most exciting feature of nodejs
fetch can accept headers too(read mdn documentation)

as we know JS engine has memory heap and call stack we have a task queue that has all callbacks , in browser web API's fetch is their as we know fetch is executing first then setTimeout,setInterval . A special queue is made for fetch called as 'micro-task queue' which is a priority queue whatever work is done in fetch is put in microtask queue and is added to call stack on priority ie.it is sent for execution first rather than other functions like setTimeOut,etc
fetch mechanism is divided into two parts:
1st part:browser/node
2nd part:reserves a space for variables called DATA.has two arrays called onFulfilled[]//resolve
onRejection[]//reject
these all are private fields 
from second part a network request is sent if any response is achived it is sent to onFulfilled and if rejected or not received anything is sent to onRejection
it is the responsibiltu of daata to send data to response in global memory
where response=fetch("something") 
*/
