for (let index = 0; index < 10; index++) {
  console.log(index + 1);
}

for (let i = 0; i < 10; i++) {
  console.log("Outer loop value : ", i);
  for (let j = 1; j <= 10; j++) {
    console.log("Inner loop value : ", j);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`***** Table of ${i} *****`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j} = ${i * j}`);
  }
}

let myArr = ["Ironman", "Hulk", "Flash"];
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

//Break and Continue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log("Detected 5!!");
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
      console.log("Detected 5!!");
      continue;
    }
    console.log(`Value of i is ${i}`);
  }