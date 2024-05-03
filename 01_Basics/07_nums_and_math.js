// ********************** Numbers *********************
const num = new Number(200)
console.log(num)

console.log(num.toString())
console.log(num.toString().length)
console.log(num.toFixed(2))

const num2 = 23.8966
console.log(num2.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString()) //US Standard
console.log(hundreds.toLocaleString('en-IN')) //Indian Standard

// ********************** Maths *********************

console.log(Math.abs(-4))
console.log(Math.round(4.67))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.max(23,4,6,7,22))
console.log(Math.min(23,4,6,7,22))

//Generating random number between 0 and 1
console.log(Math.random())

//Generating random number between 1 and 10 but this will also include 0 
console.log(Math.random()*10 + 1)

//Generating random number between 1 and 10 but without 0 
console.log(Math.floor(Math.random()*10) + 1)

//Generating random number between min and max
const min =10
const max = 20 
console.log(Math.floor(Math.random()*(max - min + 1)) + min)
