// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0)
console.log(null >= 0)
console.log(null < 0)
console.log(null <=0 )
console.log(null == 0)
console.log(null === 0)
/* 
The reason is that equality Checks (==, ===) and comparisons (<, >, <=, >=) work differently.
Comparisons convert null to a number, treating it as O. That's why null (0) >= 0 is true and null (0)> o is false */

// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined < 0)
// console.log(undefined <=0 )
// console.log(undefined == 0)
// console.log(undefined === 0)

//For above operations on undefined, the result is always false