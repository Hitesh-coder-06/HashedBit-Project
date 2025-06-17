/*
let string = 'INDIA'
output = 'INDONESIA'
Use array.splice
*/

let string = 'INDIA';

// Convert to array
let arr = string.split(''); // ['I', 'N', 'D', 'I', 'A']

// Insert 'O', 'N', 'E', 'S' at index 3 (after 'D')
arr.splice(3, 0, 'O', 'N', 'E', 'S');

// Now arr = ['I', 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A']

// Join back to string
let result = arr.join('');

console.log(result); // Output: INDONESIA