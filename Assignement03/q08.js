/*
Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.

*/

function repeatedDigitSum(num) {
  // Convert number to string and split to digits
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

// Example:
console.log(repeatedDigitSum(456)); // Output: 6