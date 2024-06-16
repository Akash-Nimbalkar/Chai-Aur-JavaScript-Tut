//1. for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//2. Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "America");
map.set("FR", "France");
map.set("USA", "America");

// console.log(map)

for (const [key, value] of map) {
  //Here destructuring of array happens
  console.log(key, ":-", value);
}

const myObject = {
  clg1: "rscoe",
  clg2: "pccoe",
};

for (const [college, name ]of myObject) {
    console.log(college, name)
}
