// // =====================================================================================================================================================
//    Fibonacci Sequence
// // =====================================================================================================================================================
// A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.
// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...
// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.
// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.
// But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:
// n = 43 -> x
// n = 101 -> x
// n = 227 -> x
// n = 491 -> x
// n = 881 -> x
// function fibonacci(n){
//   if(n <=1){
//     return n;
//   }
//   let prev = 0 ;
//   let current = 1;
//   for(let i = 2 ; i<= n;i++){
//     let nex = prev + current;
//     prev = current;
//     current = nex;
//   }
//   return current;
// }
// console.log(fibonacci(4));   // Returns 3
// console.log(fibonacci(7));   // Returns 13
// console.log(fibonacci(43));  // Returns x
// console.log(fibonacci(101)); // Returns x
// console.log(fibonacci(227)); // Returns x
// console.log(fibonacci(491)); // Returns x
// console.log(fibonacci(881)); // Returns x
