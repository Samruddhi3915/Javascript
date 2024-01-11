//function based getter setter
function User(email, password) {
  this._email = email;
  this._password = password;
  //old method to define getters and setters
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const user = new User("sam@123.com", "xyz");
console.log(user.email); //SAM@123.COM

console.log(user.password); //XYZ

//object based gette
