const mySym = Symbol("Key 1");

//Interview Question.. Add Symbol as a key in the object and print it

const user = {
  name: "Akash",
  "full name": "Akash Nimbalkar", //We can't access this using user.full name. It can be accessed only using user["full name"]
  age: 20,
  location: "Pune",
  email: "akash@google.com",
  isLoggedIn: true,
  [mySym]: "mykey1",
};

//There are 2 ways to access the values in object 1) using . 2) using []
console.log(user.location);
console.log(user["location"]);

//console.log(user.full name) It gives error. user["full name"] works fine!

console.log(user[mySym]);

user["email"] = "akash@gmail.com";
console.log(user);

//Object.freeze(user);

user["location"] = "Delhi";
console.log(user);

user.greeting = function () {
  console.log("Hello JS User");
};
console.log(user);

user.greeting2 = function () {
  console.log(`Hello JS User ${this.name}`);
};

console.log(user.greeting2());
