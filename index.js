let myGuest = prompt("Enter your name: ");
if (myGuest == null || ' '){
    myGuest = 'Uduakkk\'s Guest';
}

document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome! " + myGuest);
  });

  // Declaring variables of different types
let stringValue = "Hello";
let numberValue = 10;
let booleanValue = true;

// Performing arithmetic operations
let additionResult = numberValue + 5;
let subtractionResult = numberValue - 3;
let multiplicationResult = numberValue * 2;

// Displaying results using console.log()
console.log("String value:", stringValue);
console.log("Number value:", numberValue);
console.log("Boolean value:", booleanValue);

console.log("Addition result:", additionResult);
console.log("Subtraction result:", subtractionResult);
console.log("Multiplication result:", multiplicationResult);

// Check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      console.log(number + " is even.");
    } else {
      console.log(number + " is odd.");
    }
  }
  
  // Taking user input for a number
  const userInput = prompt("Enter a number:");
  const userNumber = parseInt(userInput);
  
  if (!isNaN(userNumber)) {
    checkEvenOrOdd(userNumber);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
  
  // Printing numbers from 1 to 10 using a for loop
  console.log("Numbers from 1 to 10:");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  function sumTwoNumbers(a, b) {
    return a + b;
  }
  
  // Calling the function with different arguments and displaying the results
  const result1 = sumTwoNumbers(5, 10);
  console.log("Result 1:", result1); // Output: Result 1: 15
  
  const result2 = sumTwoNumbers(-3, 8);
  console.log("Result 2:", result2); // Output: Result 2: 5
  
  const result3 = sumTwoNumbers(7.5, 2.5);
  console.log("Result 3:", result3); // Output: Result 3: 10
  
  // Array of favorite fruits
const favoriteFruits = ['apple', 'banana', 'orange', 'pineapple'];

console.log('Favorite fruits:', favoriteFruits);

// Object representing a person
const person = {
  name: 'Uduakkk Manah',
  age: 21,
  hobbies: 'Sports, Music and Coding.'
};

console.log('Person:', person);

// Higher-order function: modifyArray
function modifyArray(arr, callback) {
    return callback(arr);
  }
  
  // Callback function to double each element in the array
  function doubleArray(arr) {
    return arr.map(item => item * 2);
  }
  
  // Callback function to square each element in the array
  function squareArray(arr) {
    return arr.map(item => item ** 2);
  }
  
  // Sample array
  const numbers = [1, 2, 3, 4, 5];
  
  // Using modifyArray with doubleArray callback
  const doubledNumbers = modifyArray(numbers, doubleArray);
  console.log('Doubled numbers:', doubledNumbers);
  
  // Using modifyArray with squareArray callback
  const squaredNumbers = modifyArray(numbers, squareArray);
  console.log('Squared numbers:', squaredNumbers);
  