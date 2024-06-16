const user = {
  username: "Akash",
  price: 999,
  welcomeMsg: function () {
    console.log(`Hello ${this.username}, Welcome to website`);
    console.log(this);
  },
};

user.welcomeMsg();
user.username = "Sammy";
user.welcomeMsg();

// If used outside of any function or object, this refers to the global object (window in a browser, global in Node.js).
console.log(this);

// If used within a function that is not a method of an object, this also refers to the global object.

// function chai() {
//   let username = "Akash";
//   console.log(this.username);
// }
// chai();

// const chai = () => {
//   let username = "Akash";
//   console.log(this.username);
// };

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(10, 20));

// An implicit return is a way of returning a value from a function without explicitly using the return keyword.

const addTwo2 = (num1, num2) => num1 + num2; //OR const addTwo2 = (num1, num2) => (num1 + num2) This is also valid
console.log(addTwo2(11, 22));

//Return object from arrow function
const addTwo3 = (num1, num2) => ({ username: "Akash" });
console.log(addTwo3(11, 22));
