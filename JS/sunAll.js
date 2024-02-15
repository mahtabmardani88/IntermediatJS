// // =====================================================================================================================================================
//    Sum All Numbers in a Range
// // =====================================================================================================================================================
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// function sumAll(arr) {
//   // You can do this!
// }
// sumAll([1, 4]);
// The lowest number will not always come first.
// sumAll([1, 4])  // should return a number.
// sumAll([1, 4])  // should return 10.
// sumAll([4, 1])  // should return 10.
// sumAll([5, 10])  // should return 45.
// function sumAll(arr){
//   let min= Math.min(...arr);
//   let max = Math.max(...arr);
//   let sum =0;
//   for(let i = min; i<= max ;i++){
//     sum += i;
//   }
// return sum;
// }
// console.log(sumAll([1, 4]));  // Returns 10
// console.log(sumAll([4, 1]));  // Returns 10
// console.log(sumAll([5, 10]));