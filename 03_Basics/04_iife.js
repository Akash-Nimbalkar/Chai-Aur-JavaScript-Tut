//Immediately invoked function expressions (IIFE)

(function chai() { //This is named IIFE
  console.log("DB Connected!");
})(); //Semicolon is required here

(function aurcode() {
  console.log(`DB Connected 2`);
})();

//The above IIFE can be also written using arrow functions

(() => { //This is unnamed IIFE
  console.log(`DB Connected 3`);
})();

((dbname) => {
  console.log(`DB Connected 4 ${dbname}`);
})("MongoDB");
