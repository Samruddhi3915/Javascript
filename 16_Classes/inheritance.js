class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log("Username is: " + this.username);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username); //automatically refers to User class and goes to constructor and sets the username value and we can extend it in User class
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const teacher = new Teacher("Samrudhi", "sam@123.com", "345");
teacher.addCourse();
console.log(teacher);
//A new course was added by Samrudhi Teacher { username: 'Samrudhi', email: 'sam@123.com', password: '345' }
teacher.logMe(); //Username is: Samrudhi has access since Teacher is inherited from User

const user = new User("User1");
user.logMe();
// user.addCourse(); //doesnt have access
//Username is: User1

console.log(teacher === user); //false
console.log(user === teacher); //false
console.log(teacher instanceof Teacher); //true
console.log(user instanceof User); //true
