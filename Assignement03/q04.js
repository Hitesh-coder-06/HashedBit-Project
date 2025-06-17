/*
 Take any string with minimum 20 characters. Count number of consonant and vowel in the string
*/

let str = "Artificial intelligence is amazing!";

// Convert string to lowercase to simplify checking
let lowerStr = str.toLowerCase();

// Define vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Initialize counts
let vowelCount = 0;
let consonantCount = 0;

// Iterate over each character
for (let char of lowerStr) {
  if (char >= 'a' && char <= 'z') {  // Check if it's an alphabet
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);