function setUsername(username) {
  //also it does compelex db calls
  this.username = username;
  console.log("called");
}
function createuser(username, email, password) {
  //nested function
  //   setUsername(username); //this will do the work of setting username but it doesn't work
  setUsername.call(this, username); //returns createuser {
  //   username: 'Samruddhi',
  //   email: 'Sam@123.com',
  //   password: 123
  // }
  (this.email = email), (this.password = password);
}

const user1 = new createuser("Samruddhi", "Sam@123.com", 123);
console.log(user1); //createuser { email: 'Sam@123.com', password: 123 } username is not getting set ie.setUsername is not getting called
