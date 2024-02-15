// // =====================================================================================================================================================
//          Find the longest Word in a String
// // =====================================================================================================================================================
// Return the length of the longest word in the provided sentence.
// Your response should be a number. For these algorithms, you are allowed to use the split() method.
// findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
// findLongestWord("May the force be with you")  // should return 5.

// function longestWordInString(sizeword){
//   let word = sizeword.split(' ');
//   let maxLengthWord = 0 ;
//   for (let i = 0; i < word.length; i++) {
//     if(word[i].length > maxLengthWord){
//       maxLengthWord = word[i].length;
//     }
//   }
//   return maxLengthWord;
// }
// console.log(longestWordInString("The quick brown fox jumped over the lazy dog")); // Returns 6
// console.log(longestWordInString("May the force be with you")); // Returns 5