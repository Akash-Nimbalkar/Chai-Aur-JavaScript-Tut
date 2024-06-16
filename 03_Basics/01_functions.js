function sayMyName() {
  console.log("A");
  console.log("K");
  console.log("A");
  console.log("S");
  console.log("H");
}

sayMyName();

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let result = addTwoNumbers(19, 21);
console.log(result);

function logInUserMessage(username = "root user") {
  if (username === undefined) {
    console.log("Please enter the username");
    return;
  } else {
    return `${username} just logged in`;
  }
}
console.log(logInUserMessage());

//Rest operator
function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 50, 150, 3000));

function calculateCartPrice2(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice2(200, 400, 50, 150, 3000));

const user = {
  product: "Ponds",
  price: 299,
};

function handleObject(anyobject) {
  console.log(
    `Product is ${anyobject.product} and price is ${anyobject.price}`
  );
}

handleObject(user);

handleObject({
  product: "Denver",
  price: 199,
});

const myNewArr = [10, 30, 45, 50];

function getSecondValue(arr) {
  return arr[1];
}

console.log(getSecondValue(myNewArr));

