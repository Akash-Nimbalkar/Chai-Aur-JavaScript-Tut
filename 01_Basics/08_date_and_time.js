
let myDate = new Date()
console.log(typeof myDate)
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toTimeString())

let myCreatedDate = new Date(2024, 4, 11) //Months follows 0 based indexing 0-Jan, 1-Feb, 2-March
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date("2024-01-26") ///Here month follows 1 based indexing
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate.getTime())

console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)
console.log(newDate.getHours())

newDate = newDate.toLocaleString('default' , {
    weekday:"long"
})

console.log(newDate)