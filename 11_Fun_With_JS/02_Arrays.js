// const myArr = []
// % DebugPrint(myArr);

//Continuous(packed), Holey
//SMI (Small Integer)
//Packed Element
//Double (Float, String, Function)

const arr = [1, 2, 3, 4, 5];
//PACKED_SMI_ELEMENTS

arr.push(6.0);
//PACKED_DOUBLE_ELEMENTS

arr.push("7");
//PACKED_ELEMENTS

arr[10] = 11;
//HOLEY_ELEMENTS

console.log(arr);
console.log(arr.length);
console.log(arr[9]);

// bound check
// hasOwnProperty (arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object-prototype, 10)
//hasOwnProperty() is very expensive operation
// holes are very expensive in js, so it is recommended that arrays should not have holes in it

//Order :
// For Continuous : SMI > DOUBLE > PACKED
// For Holey : H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; //HOLEY_ELEMENTS
arrFour[1] = "2"; //HOLEY_ELEMENTS
arrFour[2] = "3"; //HOLEY_ELEMENTS

const arrFive = [];
arrFive.push("1"); // PACKED_ELEMENTS
arrFive.push("2"); // PACKED_ELEMENTS
arrFive.push("3"); // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];
arrSix.push(Infinity);
console.log(arrSix);
