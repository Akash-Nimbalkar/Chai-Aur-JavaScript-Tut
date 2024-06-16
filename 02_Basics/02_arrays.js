const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

// marvel.push(dc)
// console.log(marvel) //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

//Concat
let all_heroes = marvel.concat(dc);
console.log(all_heroes);

//Spread Operator
const new_heroes = [...marvel, ...dc];
console.log(new_heroes);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const new_arr = arr.flat(Infinity);
console.log(new_arr);

console.log(Array.isArray("Akash"));
console.log(Array.from("Akash"));
console.log(Array.from({ name: "Akash" })); //Output : []  (Interview Question)

let score1 = 230
let score2 = 900
let score3 = 100

console.log(Array.of(score1,score2,score3))
