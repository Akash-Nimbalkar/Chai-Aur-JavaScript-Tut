// let userEmail = [];

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("don't have user email");
// }

let userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("don't have user email");
}

//Falsy values -
// 0, -0, 0n(BigInt) ,false, "", null, undefined, NaN

//Truthy values -
// '0', "false", " ", [], {}, function(){},

let NaN = 12;
console.log(NaN);

if (userEmail.length == 0) {
  console.log("userEmail array is empty!");
}

let emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty!");
}

console.log(false == 0);
console.log(false == "");
console.log(0 == "");

//Nullish Coalescing Operator(??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 20;
// val1 = undefined ?? 33;
val1 = null ?? 45 ?? 55;
console.log(val1);

//Ternary Operator

//Condition ? true : false;
const chaiPrice = 100;

chaiPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");
