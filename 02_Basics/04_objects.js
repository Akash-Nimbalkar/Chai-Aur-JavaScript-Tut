//const tinderUSer = new Object() //This is singleton object

const tinderUSer = {}; // This is non-singleton object
tinderUSer.id = "123abc";
tinderUSer.name = "Sammy";
tinderUSer.isLoggedIn = true;
//console.log(tinderUSer);

const regularUser = {
  email: "user@gmail.com",
  fullname: {
    username: {
      firstname: "Akash",
      lastname: "Nimbalkar",
    },
  },
};

console.log(regularUser.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

//Array of objects
const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
];
console.log(users);

//To get all the keys inside an object
console.log(Object.keys(tinderUSer));

//To get all the values inside an object
console.log(Object.values(tinderUSer));

//To get the length of object
console.log(Object.keys(tinderUSer).length);

console.log(Object.entries(tinderUSer));

console.log(tinderUSer.hasOwnProperty("isLoggedIn"));

//Object De-structure
const course = {
  name: "JavaScript",
  price: "999",
  courseInstructor: "Hitesh",
};

const {courseInstructor : instructor} = course

// console.log(courseInstructor)
console.log(instructor)