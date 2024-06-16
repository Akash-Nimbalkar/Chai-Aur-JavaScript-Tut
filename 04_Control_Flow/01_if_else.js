if (2 == "2") {
  console.log("Executed!");
}

if (10 === "10") {
  console.log("Executed!");
}

let balance = 1000;

if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 800) {
  console.log("Less than 800");
} else if (balance < 1100) {
  console.log("Less than 1100");
} else {
  console.log("Less than 1500");
}

let userLoggedIn = true
let debitCard = true
if(userLoggedIn && debitCard)
  {
    console.log("Allow to buy course")
  }