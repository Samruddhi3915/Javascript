class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is: ${this.username}`);
  }
  //create such property that will generate a unique id whenever a user is created
  //used static which prevents access to this method
  static createId() {
    return `123`;
  }
}

const user1 = new User("Samruddhi");
// console.log(user1.createId()); //user1.createId is not a function (this is beacuse of static)

class Teacher extends User {
  constructor(username) {
    super(username);
    this.username = username;
  }
}
const iphone = new Teacher("iphone", "i@phone.com", "123");
console.log(iphone.logMe()); //username is: iphone
// console.log(iphone.createId()); //iphone.createId is not a function because of static
