const user = {
  username: "Akash",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    //console.log(this.username);
    console.log(this);
  },
};

//console.log(user);
console.log(user.getUserDetails());
console.log(this);

//Constructor Function
function User(username, logInCount, isLoggedIn) {
  this.username = username;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;

  // return this;
}

// const user1 = User("Sam", 12, false);
// const user2 = User("Yash", 15, true);

// console.log(user1);

//We are using the same instance of User so it will
//display the values of user2 as they will be overwritten on user1 values

//to avoid this, we need to create new instance every time
const user1 = new User("Sam", 12, false);
const user2 = new User("Yash", 15, true);

console.log(user1);
console.log(user2);
console.log(user2.constructor); //This proves the presence of constructor i.e constructor function User()
