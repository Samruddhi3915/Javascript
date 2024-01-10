//ES6
class User {
  //properties and functions collection
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  } //invokes itself when object is initialized(using new keyword)
  //function without using function keyword inside class also called as method
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("Samruddhi", "Sam@123.com", 123);
console.log(user1.encryptPassword()); //123abc
console.log(user1.changeUsername()); //SAMRUDDHI

//behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User1.prototype.changeUsername = function () {
  return `${this.username.toUppercase()}`;
};
const user2 = new User("Sam", "Sam@1.com", 123);
console.log(user2.encryptPassword()); //123abc
console.log(user2.changeUsername()); //SAM
