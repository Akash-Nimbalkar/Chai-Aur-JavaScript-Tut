let a = 300;

if (true) {
  let a = 10;
  const b = 11;
  var c = 12;
  console.log("In block scope : a = ", a);
}

console.log("In global scope : a = ", a);

//When nested functions are there, the child function can access variables of parent function
//but parent function cannot access variables of child function

function one() {
  const username = "Akash";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //console.log(website); This will throw an error as we cannot access the variables of parent function
  two();
}

one();

if (true) {
  const username = "Akash";

  if (username === "Akash") {
    const website = " Youtube";
    console.log(username + website);
  }
  //console.log(website); Can't access the parents variables
}
//console.log(username); username has specific block, we can't access it outside that block

//**************Interesting Concept*************** */
addOne(5);

function addOne(num) {
  return num + 1;
}

addTwo(5);

const addTwo = function (num) {
  return num + 2;
};

