let score= 33
let score2 = "33"
let score3 = "33abx"
let score4 = null
let score5 = undefined
let score6 = ""


console.log(typeof score);
let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

console.log('')

console.log(typeof score2);
let valueInNumber2 = Number(score2)
console.log(valueInNumber2)
console.log(typeof valueInNumber2)

console.log('')

console.log(typeof score3);
let valueInNumber3 = Number(score3)
console.log(valueInNumber3)
console.log(typeof valueInNumber3)

console.log('')

console.log(typeof score4);
let valueInNumber4 = Number(score4)
console.log(valueInNumber4)
console.log(typeof valueInNumber4)

console.log('')

console.log(typeof score5);
let valueInNumber5 = Number(score5)
console.log(valueInNumber5)
console.log(typeof valueInNumber5)

console.log('')

console.log(typeof score6);
let valueInNumber6 = Number(score6)
console.log(valueInNumber6)
console.log(typeof valueInNumber6)

console.log('')

console.log(typeof score6);
let valueInNumber7 = Boolean(score6)
console.log(valueInNumber6)
console.log(typeof valueInNumber6)

/* For converting to boolean,
1 => true
0 => false
"" => false
"JSPM" => NaN
 */

// ***************** Oprations *****************
let value = 9
let negValue = -value
console.log(negValue)

let str1 = "Hello"
let str2 = " Akash"
console.log(str1+str2)

console.log(1 + '2')
console.log('1' + 2)
console.log('1' + 2 + 2)
console.log(1 + 2 + '2')
console.log(true)
console.log(+true)
console.log(5+true)

// console.log(true+) //Not allowed
console.log(+"")

//This type of code is not advisable
let num1, num2, nums3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++
console.log(gameCounter)

let x2 = 3n;
const y2 = x2++;

console.log(x2,y2)