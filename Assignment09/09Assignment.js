// Write a JavaScript function that declares a variable using let, const, and var. 
// What is the difference in scope for each?

// function showScopes() {
//   if (true) {
//     let a = "This is let";
//     const b = "This is const";
//     var c = "This is var";

//     console.log("Inside block:");
//     console.log(a); // Works
//     console.log(b); // Works
//     console.log(c); // Works
//   }

//   console.log("Outside block:");
//   // console.log(a); //  Error: a is block scoped
//   // console.log(b); //  Error: b is block scoped
//   console.log(c); // Works: c is function scoped
// }

// showScopes();



// Create an array called fruits that contains five different fruit names. 
// Write a function that returns the second fruit in the array.

// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// function getSecondFruit(arr) {
//   return arr[1]; // index 1 is the second element
// }

// console.log(getSecondFruit(fruits)); // Output: Banana


// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), 
// and then removes the last element using pop(). Return the modified array.

// function pushPopArray(arr, newElement) {
//   arr.push(newElement); // add element at end
//   arr.pop();            // remove last element (which is the one just added)
//   return arr;           // array remains unchanged
// }

// console.log(pushPopArray([1, 2, 3], 4)); // Output: [1, 2, 3]


// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

// function squareNumbers(arr) {
//   return arr.map(num => num * num);
// }

// console.log(squareNumbers([1, 2, 3, 4])); // Output: [1, 4, 9, 16]


// Write a function that filters out all even numbers from an array of numbers using the filter() method. 
// Return the new array of odd numbers.

// function filterOddNumbers(arr) {
//   return arr.filter(num => num % 2 !== 0);
// }

// console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]


// Create an object called person with properties for name, age, and occupation. 
// Write a function that logs a greeting message using these properties.

const person = {
  name: "Jatin",
  age: 21,
  occupation: "Student"
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and I work as a ${p.occupation}.`);
}

greetPerson(person); 
// Output: Hello, my name is Jatin, I am 21 years old and I work as a Student.


// Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

// function calculateArea(rect) {
//   return rect.width * rect.height;
// }

// console.log(calculateArea({ width: 5, height: 10 })); // Output: 50


// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

// function getObjectKeys(obj) {
//   return Object.keys(obj);
// }

// console.log(getObjectKeys(person)); // Output: ["name", "age", "occupation"]

// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

// function mergeObjects(obj1, obj2) {
//   return Object.assign({}, obj1, obj2);
// }

// const objA = { a: 1, b: 2 };
// const objB = { b: 3, c: 4 };

// console.log(mergeObjects(objA, objB)); 
// Output: { a: 1, b: 3, c: 4 }


// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

// function sumArray(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15