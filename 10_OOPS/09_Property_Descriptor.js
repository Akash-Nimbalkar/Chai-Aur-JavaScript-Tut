//IQ: Can we change the value of Math.PI, Explain your choice.

console.log(Math.PI);
Math.PI = 11;
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
Object.getOwnPropertyDescriptor(Math, "PI").writable = true;

const chai = {
  name: "Ginger Chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("Your order has been confirmed!");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai)); // This method expects a property not object so output will be undefined

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  //enumerable: false, //the name property should not be enumerable i.e should not be iterable even if we loop on object it show all remaining prop but not name prop
});

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));
chai.name = "American Tea";
chai.name = "Mexican Tea";
//console.log(chai);

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") console.log(`${key} : ${value}`);
}
