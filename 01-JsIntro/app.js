// "use strict";

// let a = 8;
// console.log(a);

// console.log("hello world");
// alert("hello world");

// var a = 10;
// let b = 3;
// // const c = 5;

// // c = 3;

// b = 5;

// let result = false;

// // let result = "hello";

// result = undefined;

// let c;

// let d = null;

// let obj = {
//   name: "John",
// };

// let arr = [1, 2, 3, 4, 5, "hello", true, obj, null, undefined];

// let result = "false";
// result = 0;
// result = " ";
// result = ``;
// result = null;
// result = undefined;
// result = 10;

// if (result > 3) {
//   console.log("working");
// } else if (result > 6) {
//   console.log("not working");
// } else {
//   console.log("not working else");
// }

let result;

// console.log(first)

// for (let index = 0; index < 5; ++index) {
//   const element = array[index];
// }

// do {

// } while (condition);

// while (condition) {

// }
// result = 0;
// result = result + 1;

// result++;
// ++result;

// result = "salam";

// result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }

console.log(result, "result");
// console.log(typeof result, "type");

// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// 8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

// for (let i = 0; i < arr.length; i++) {
//   //   console.log(arr[i], "element");
//   //   console.log(i, "index");
//   if (arr[i] % 2 !== 0) {
//     // console.log(arr[i], "element");
//     console.log(i, "index");
//   }
// }
// =
// == !=
// ===

// console.log(2 == "2b", "result");
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max, "max");

let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "Limn", 182, 4];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "string") {
    // console.log(arr[i], "element");
    let count = 0;

    for (let j = 0; j < arr[i].length; j++) {
      //   console.log(arr[i][j], "symbol");
      if (arr[i][j] == arr[i][j].toUpperCase()) {
        // console.log(arr[i][j], "symbol");
        count++;
      }
    }

    if (count > 2) {
      console.log(arr[i], "element");
    }
  }
}
