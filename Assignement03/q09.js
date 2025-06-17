/*
Write a function to count the number of words in a paragraph.

*/

function countWords(paragraph) {
  return paragraph.trim().split(' ').length;
}

// Example:
const para = "This is a paragraph in which count the words";
console.log(countWords(para)); // Output: 8