"use strict"; //This line will treat all JS Code as newer version

//alert(7*7) //We are using nodejs, not browser
let age = 20
let bigBin = BigInt("0b1010101001010101001111111111111111");
let name = 'Akash'
let isLoggedIn = false
let userCity;
let credits = null;
let symbol1 = Symbol("JavaScript")

console.table([typeof age, typeof bigBin, typeof name, typeof isLoggedIn, typeof userCity, typeof credits, typeof symbol1]);

/*
Primitive datatypes : 
1.number => 2 to power 53 range

2.bigint 

3.string => ""

4.boolean => true/false

5.undefined =>This represents a variable that has been declared but not assigned a value.
 It's also the default value for uninitialized variables.

6.null => standalone value

7.symbol => unique


Non-primitive datatypes:

1.Object
2.Array

*/

console.log(typeof "Akash")
//Interview Question - why typeof null is object?
console.log(typeof undefined)
console.log(typeof null) 