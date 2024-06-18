function setUsername(username) {
  //Complex DB Calls
  this.username = username;
}

function createUser(username, email, password) {
  //setUsername(username); It will not work as we need to hold the reference of function after it is removed from execution context
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const user1 = new createUser("Akash", "akash@google.com", 1234);
console.log(user1);
