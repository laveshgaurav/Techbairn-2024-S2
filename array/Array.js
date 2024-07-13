let data = [11, 44, 76, 23, 41, 90, 62, 88, 71, 56];

// Length of Array
console.log("Length Of Data", data.length);

// If Else
// if (data.length > 0) {
//   console.log("Showing Component");
// } else {
//   console.log(" Component Hidden");
// }

// ternary operator
// data.length > 0
//   ? console.log("Showing Component")
//   : console.log("Component Hidden");

// join
// console.log("Join", data.join(","));

// push - returns length of Array
// let push = data.push(14);
// console.log(push, data);

// pop - returns the last value which has been removed
// let pop = data.pop();
// console.log("Pop & Data", pop, data);

// shift - returns the first value which has been removed
// let shift = data.shift();
// console.log("Shift & Data", shift, data);

// unshift - returns length of Array
// let unshift = data.unshift(20);
// console.log("Unshift & Data", unshift, data);

// For Each - It won't return anything (undefined)
// let ForEach = data.forEach((value, index) => {
//   console.log(`Index-${index} : Value-${value}`);
// });

// console.log("ForEach", ForEach);

// Map & Chaining
// let MapFunc = data
//   .map((value, index) => {
//     return value * 2;
//   })
//   .map((value, index) => {
//     return value * 4;
//   })
//   .pop()
//   .toString()
//   .split("")
//   .map((value, index) => {
//     return value * 2;
//   });
// console.log("MapFunc", MapFunc);

// Sorting
let sorted = data
  .sort((a, b) => b - a)
  .filter((i) => i >= 50)
  .filter((i) => i >= 80);
console.log("Sorted & Filtered", sorted);
