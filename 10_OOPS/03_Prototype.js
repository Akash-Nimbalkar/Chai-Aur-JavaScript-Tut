// Function, Arrays and Strings are objects only at prototype level. Object is like a parent => functions,arrays and strings are its child
let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.akash = function () {
  console.log(`akash is present in all objects`);
};

Array.prototype.heyAkash = function () {
  console.log(`Akash says hello`);
};

heroPower.akash();
myHeros.akash();
myHeros.heyAkash();
//heroPower.heyAkash();

let newObj = {
  user: "root",
  password: "linux@123",
  loginAs: "Guest",
};
newObj.akash();

//Prototypal Inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

console.log(TASupport);

Teacher.__proto__ = User;

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

//PS: Get a true length of the string without including spaces. It should be applied to all strings globally(Hint: Make a new method)
let str1 = "AkashNimbalkar      ";
let str2 = "       JSPMRSCOE";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

str2.trueLength();

"Pune   ".trueLength();
