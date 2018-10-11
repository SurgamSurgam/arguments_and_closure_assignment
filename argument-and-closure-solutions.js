// // // 1)
//
// function double(num1) {
//   return num1 * 2;
// };
//
// function square(num1) {
//   return num1 * num1;
// };
//
// function doubleSquare(num1) {
//   return square(double(num1));
//   // let savedDouble = double(num1);
//   // return square(savedDouble);
// };
//
// console.log(doubleSquare(2));
//
// // // 2)
//
// const classyGreeting = (str1, str2) => {
//   return `${str1} ${str2}`
//
// };
//
// console.log(classyGreeting('firstName', 'lastName'));
//
// const yell = (str1) => {
//   return str1.toUpperCase();
// };
//
// console.log(yell('hello'));
//
// const yellGreeting = (str1, str2) => {
//   return yell(classyGreeting(str1, str2));
// };
//
// console.log(yellGreeting('deyvi', 'ortiz'));
//
// // // 3)
//
// const removeDupes = (arr) => {
//   dupes = {};
//   for (let i = 0; i <= arr.length - 1; i++){
//      //dupes[arr[i]] = "cool";
//      if (dupes[arr[i]] === undefined) {
//        dupes[arr[i]] = arr[i];
//      };
//   };
//   return dupes;
// };
//
// console.log(removeDupes([1, 2, 2, 4, 4]));
//
// const concatAndRemoveDupes = (arr1, arr2) => {
//   array = arr1.concat(arr2);
//   dupes = {};
//   for (let i = 0; i <= array.length - 1 ; i++) {
//     if (dupes[array[i]] === undefined) {
//       dupes[array[i]] = array[i];
//     };
//   }
//   return dupes
// };
//
// console.log(concatAndRemoveDupes([1,2,2],[1,2,3]));
//
//
// const concatAndRemoveDupes = (arr1, arr2) => {
//   array = arr1.concat(arr2);
//   return removeDupes(array);
// };
//
// console.log(concatAndRemoveDupes([1,2,2],[1,2,3]));
//
// // // 4)
//
// const sort = (arr) => {
//   return arr.sort(function(a, b){return a-b});
// };
//
// console.log(sort(91, 85, 100, 92, 88));
//
// const middleElement = (arr) => {
//   if (arr.length % 2 === 1){
//     mid = arr[Math.floor(arr.length/2)];
//     return mid;
//   } // //write the ELSE for an EVEN INPUT
// };
//
// console.log(middleElement(85, 88, 92, 91, 100))
//
// const median = (arr) => {
//   return middleElement(sort(arr));
// };
//
// console.log(median([91, 85, 100, 92, 88]));
//
// // // 5)
//
// const repeat = (string, numberOfTimes) => {
//   if (numberOfTimes !== 0) {
//     for (let i = 1; i <= numberOfTimes; i++) {
//     console.log(i + " : " + string);
//     };
//   } else if (numberOfTimes === 0) {
//     for (let i = 1; i <= 2; i++) {
//     console.log(i + " : " + string);
//     };
//   }
// };
//
// repeat("deyvi", 5);
//
// // //6)
//
// function spread (...args) {
//   sum = 0;
//   for (var i = 0; i < args.length; i++) {
//     sum = sum + args[i];
//   }
//   return sum;
// }
//
// console.log(spread(1,2,3,4,5));
//
// // //7)

function adder(num1 = 0) {
  // num1 = 0;
  return function anom(num2) {
      return num1 + num2;
  };
};

const add5 = adder();
const add9 = adder();

console.log(add5(5));
console.log(add9(9));
