//getters and setters:they are present in every class
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //if only getter is defined than it will throw error: Cannot set property password of #<User> which has only a getter. therefore we define setter also

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}sam`; //abcdsam
  }
  set password(value) {
    // this.password = value;
    //RangeError: Maximum call stack size exceeded since we are setting it in  this.password = password also ;

    this._password = value;
  }
  get email() {
    return `${this._email.toUpperCase()}`;
  }
  set email(emaill) {
    this._email = emaill;
  }
}
const sam = new User("sam@123.ai", "abcd");
console.log(sam.password); //ABCD
console.log(sam.email); //SAM@123.AI
