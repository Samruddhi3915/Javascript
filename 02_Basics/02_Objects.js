//singleton-one object

//declaration
//1.literal-will not be singleton
// Object=Key and value

//declaring symbol

const mysym = Symbol("key");

const JSuser = {
  name: "Samruddhi",
  "full name": "Samruddhi Ahire",
  age: 18,
  [mysym]: "mykey1",
  location: "pune",
  email: "sam@abc.com",
  isLoggedIn: false,
  LastLoginDays: ["Monday", "Saturday"],
};

//access object

console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser["full name"]);
console.log(JSuser[mysym]); //mykey1
console.log(typeof JSuser[mysym]); //string
//but we wanted it to be string therefore put mysym in bracket inside object

JSuser.email = "sam@chtgpt.com";
//update values
console.log(JSuser.email); //sam@chtgpt.com
// Object.freeze(JSuser);
//changes will not propogate after freeze
JSuser.email = "sam@google.com";
console.log(JSuser.email); //sam@chtgpt.com email will not change to google.com since JSuser is freezed

console.log(JSuser);

JSuser.greeting = function () {
  console.log(`Good morning,${this.name}`);
};
// console.log(JSuser.greeting); //comes as undefined

console.log(JSuser.greeting()); //gives error since it is not a function yet

//therefore we unfreeze the object now ie.comment freeze line

//Good morning,Samruddhi

//2.constructor-will be singleton
const tinderUser = new Object(); //singleton obj
console.log(tinderUser);
//{}

const tinderUser1 = {}; //non singleton

console.log(tinderUser); //{}

tinderUser1.id = "123abc";
tinderUser1.name = "Sam";
tinderUser1.isLoggedIn = false;
console.log(tinderUser1); //{ id: '123abc', name: 'Sam', isLoggedIn: false }

const regularuser = {
  email: "abc@gmail.com",
  fullname: {
    //nested object
    userfullname: {
      firstname: "Samruddhi",
      lastname: "Ahire",
    },
  },
};
console.log(regularuser);
/*{
  email: 'abc@gmail.com',
  fullname: { userfullname: { firstname: 'Samruddhi', lastname: 'Ahire' } }
}*/

console.log(regularuser.fullname); //{ userfullname: { firstname: 'Samruddhi', lastname: 'Ahire' } }

console.log(regularuser.fullname.userfullname); //{ firstname: 'Samruddhi', lastname: 'Ahire' }

console.log(regularuser.fullname.userfullname.firstname); //Samruddhi

//objects can be merged too

const obj1 = { 1: "abc", 2: "pqr" };
const obj2 = { 3: "xyz", 4: "stq" };

const obj3 = { obj1, obj2 };
console.log(obj3);
//{ obj1: { '1': 'abc', '2': 'pqr' }, obj2: { '3': 'xyz', '4': 'stq' } }

const obj4 = Object.assign({}, obj1, obj2);
console.log(
  obj4
); /*Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.*/

//{ '1': 'abc', '2': 'pqr', '3': 'xyz', '4': 'stq' }

//spread operator
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);
//{ '1': 'abc', '2': 'pqr', '3': 'xyz', '4': 'stq' }

//array of objects
const users = [
  {
    id: 1,
    email: "sam@google.com",
  },
  {},
  {},
];

console.log(users[0].email);
//sam@google.com

console.log(Object.keys(JSuser));
/*[
  'name',
  'full name',
  'age',
  'location',
  'email',
  'isLoggedIn',
  'LastLoginDays',
  'greeting'
]*/
console.log(Object.values(JSuser));
/*
[
  'Samruddhi',
  'Samruddhi Ahire',
  18,
  'pune',
  'sam@google.com',
  false,
  [ 'Monday', 'Saturday' ],
  [Function (anonymous)]
]*/

console.log(Object.entries(tinderUser1));
//[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ] everuthing is made an arrau

console.log(tinderUser1.hasOwnProperty("isLoggedIn"));
//true

console.log(tinderUser1.hasOwnProperty("isLogged"));
//false

//destructuring object
const course = {
  coursename: "JS in hindi",
  price: "999",
  courseInstructor: "Samruddhi",
};

const { courseInstructor: instructor, price } = course;

console.log(instructor); //Samruddhi
console.log(price);
//999

//react
// const navbar = ({ company }) => {};
// navbar((company = lco));

//API's can be in form of array or JSON
//JSON
// {
//     "name": "Samruddhi",
//     "price": "free",

// }
//array
// [{}, {}, {}];
