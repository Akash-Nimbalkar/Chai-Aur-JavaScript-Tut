//map method is used to create a new array by applying a function to each element of an existing array.
//It does not mutate the original array; instead, it returns a new array with the modified elements.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = nums.map((val) => val + 10);
console.log(newNums);

let arr = [];
nums.forEach((val) => {
  arr.push(val + 10);
});
console.log(arr);

//Chain 3 methods: first map to multiply by 10 to each array element then again map to add one and filter out numbers less than 50

let newArr = nums
  .map((val) => val * 10)
  .map((val) => val + 1)
  .filter((val) => val < 50);

console.log(newArr);

//Reduce

let myNums = [1, 2, 3, 4];
let initialVal = 10;
// let ans = myNums.reduce(function (acc, currVal) {
//   console.log(acc, " ", currVal);
//   return acc + currVal;
// }, initialVal);

let ans = myNums.reduce((acc, currVal) => acc + currVal, initialVal);

console.log(ans);

let shoppingCart = [
  { courseName: "JS Course", price: 1999 },
  { courseName: "Py Course", price: 999 },
  { courseName: "Data Science Course", price: 12999 },
  { courseName: "Web Dev Course", price: 4999 },
];

//Add prices of courses using reduce

let totalPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalPrice);

