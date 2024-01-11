//object based getter setter

const User = {
  _email: "Sam@google.com",
  _password: "abcdefg",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};
//using factory function-create
const user = Object.create(User);
console.log(user.email); //SAM@GOOGLE.COM
