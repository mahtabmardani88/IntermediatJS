// // =====================================================================================================================================================
//    Title Case a Sentence
// // =====================================================================================================================================================
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
// For this algorithm, you can use the split() method.
// titleCase("I'm a little tea pot")  // should return a string.
// titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt")  // should return "Short And Stout".
// function titleCase(sentence){
//   let word = sentence.split(' ');
//   let titleword = word.map(
//     function(words){
//       return words.charAt(0).toUpperCase()+ words.slice(1).toLowerCase();
//     });
//     let result = titleword.join(' ');
//     return result;
// }
// console.log(titleCase("I'm a little tea pot")); // Returns "I'm A Little Tea Pot"
// console.log(titleCase("sHoRt AnD sToUt")); // Returns "Short And Stout"