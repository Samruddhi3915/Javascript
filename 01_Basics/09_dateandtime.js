//in future Date will be migrated into Temporal

let myDate = new Date();
console.log(myDate);
//2023-12-22T12:04:45.675Z

console.log(myDate.toString());
//Fri Dec 22 2023 17:35:20 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
//Fri Dec 22 2023

console.log(myDate.toLocaleDateString());
//22/12/2023

console.log(myDate.toLocaleTimeString());
//17:36:42

console.log(myDate.toTimeString());
//17:37:03 GMT+0530 (India Standard Time)

console.log(typeof myDate);
//object

let specDate = new Date(2023, 0, 23);
console.log(specDate);
//2023-01-22T18:30:00.000Z

let specDate1 = new Date(2023, 3, 23);
console.log(specDate1);
// 2023-04-22T18:30:00.000Z

let specDate2 = new Date(2023, 3, 23, 5, 3);
console.log(specDate2.toLocaleString());
//23/04/2023, 05:03:00

let specDate3 = new Date("2023-01-14");
console.log(specDate3.toLocaleString());
//14/01/2023, 05:30:00

let specDate4 = new Date("01-04-2023");
console.log(specDate4);
//2023-01-03T18:30:00.000Z

let myTimeStamp = Date.now();
console.log(myTimeStamp);
//1703247163929 it comes in milliseconds

console.log(specDate4.getTime());
//1672770600000 comes in milliseconds

console.log(Math.floor(Date.now() / 1000));
//converted millisec into secs

let newDate = new Date();
console.log(newDate);
//2023-12-22T12:15:46.613Z

console.log(newDate.getMonth() + 1);
//12 since month starts from 0

console.log(newDate.getFullYear());
//2023

console.log(newDate.getDay());
//5

console.log(`${newDate.getTime()} is the time`);
//1703247497761 is the time

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    dateStyle: "full",
  })
);
//Friday, 22 December 2023
