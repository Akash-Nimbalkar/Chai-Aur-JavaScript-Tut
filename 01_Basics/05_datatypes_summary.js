//Types of data types- 1. Primitive 2. Non-primitive

//1. Primitive datatypes : Number, String, Boolean, Null, Undefined, BigInt, Symbol

//2. Non-primitive(Reference type) datatypes : Arrays, Objects, Functions

//Symbol is used to give unique nature

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 5494845668445654856n
console.log(typeof bigNumber)

let heros = ["Shaktiman" , "Naagraj" , "Doga"]

let myObj ={
    name : "Akash" , 
    city : "Pune" ,
    age : 20
} 

const myFunction = function()
{
    console.log("Hello World")
}

console.log(typeof null )
console.log(typeof myFunction )

//+++++++++++++++++++++++ Memory in JavaScript +++++++++++++++++++++++++++++++++++

// STack(Primitive) , Heap(Non-primitive)

let myName = "Akash"
let anotherName = myName
console.log(myName, anotherName);
anotherName = "Audumbar"
console.log(myName, anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
};

let userTwo = userOne
console.log(userOne, userTwo)

userTwo.upi = "user@oksbi"

console.log(userOne, userTwo)
