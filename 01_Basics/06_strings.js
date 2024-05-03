const name = "Akash"
const repoCount = 33

// console.log("Hello this is " + name + " and my repo count is " + repoCount) Not recommended to use this 

console.log(`Hello this is ${name} and my repo count is ${repoCount}`)

//Another way to declare strings

const gameName = new String("AforAstatine")
console.log(gameName[0])

console.log(gameName.length)

console.log(gameName.toLocaleLowerCase())

console.log(gameName.toUpperCase())

console.log(gameName.charAt(11))

console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2, 4)
console.log(anotherString);

const str = "       Akash           "
const str1 = "Aka     sh"
console.log(str.trim() + "CEO")
console.log(str1.trim())

const url = "https://akash.com/akash%20nimbalkar"

console.log(url.replace("%20" , "-"))

console.log(url.includes('okay'))

const str2 = "jspm_rscoe_pune"
console.log(str2.split('_'))