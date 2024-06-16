// For in loop

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "Swift by apple",
};

for (const key in myObject) {
  //console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "py", "java"];

for (const key in programming) {
  //console.log(programming[key]);
}

const coding = ["js", "c++", "python", "ruby"];

coding.forEach(function (val) {
  //console.log(val);
});

//console.log(coding);

//We can also pass the reference of another created function as a callback function in forEach
function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

//For each loop has access of array elements, their indices and full array
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//Extracting values from array of objects using for each loop
const myCoding = [
  { name: "Javascript", extenstion: "js" },
  { name: "Python", extenstion: "py" },
  { name: "C++", extenstion: "cpp" },
];

console.log(myCoding);

myCoding.forEach((item) => {
  console.log(item.extenstion);
});

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values) For each loop isn't returning anything

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr = nums.filter((val) => val > 4);
// const arr = nums.filter((val) => {
//   return val > 4;
// });
console.log(arr);

const newNums = [];
nums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => bk.publish > 1995 && bk.genre==="History");

console.log(userBooks);
