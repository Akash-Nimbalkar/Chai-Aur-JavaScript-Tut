// const promiseOne = new Promise(function (resolve, reject) {
//   //Do Async task
//   //DB Calls, cryptography, network calls

//   setTimeout(function () {
//     console.log("Async task completed!");
//     resolve();
//   }, 5000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Akash", email: "akash@google.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = !true;
    if (!error) {
      resolve({ username: "Akash", password: 123 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

//Another approach with async and await instead of then, catch
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = !false;
    if (!error) {
      resolve({ username: "javascript", password: 123 });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});
//Async await cannot handle the errors directly(but then,catch can handle it)
// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }

// consumePromiseFive();

//Handling the errors gracefully

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// Before :
//  async function getAllUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = response.json();
//   console.log(data);
// }
// getAllUsers();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

//Writing above mentioned function using then catch

fetch("https://api.github.com/users/Akash-Nimbalkar")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
