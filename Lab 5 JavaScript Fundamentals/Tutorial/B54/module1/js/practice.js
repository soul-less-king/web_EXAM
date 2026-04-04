/* =================================
   Module 1: Variables & Data Types
   Run: node js/practice.js
   ================================= */

// ---- Exercise 1: Declaring Variables ----

// 1a. Declare a constant called accountName and set it to "Main Checking"
let accountName = "Main Checking";
const gender = "Female"


// 1b. Declare a variable (let) called balance and set it to 15250
let balance = 15250;

// 1c. Declare a constant called isActive and set it to true
const isActive = true
const numbers = [1, 2, 3, 4, 5, 6]
const mixData = [1, 2, 3, 4, 5, [1, 2, 3], "Ali", "Omar"]

// 1d. Log all three to the console
// console.log("Is Active" + isActive);
// console.log("Is Active", isActive);
// console.error();
// console.table(numbers);


// template literals

const message = `
   Multiple
   Line ${(isActive) ? "Is Active" : "is Not Active"}
   String ${numbers}
   using
   template 
   literals
`

// console.log(message);


// print(f'Some text {variable}')

// ---- Exercise 2: Working with Objects ----

// 2a. Create a transaction object with these properties:
//     description: "Grocery Shopping", amount: 850, category: "Food", type: "expense"

const student = {
   name: "Ali",
   age: 22,
   gender: "Male",
}
console.log(`My Name is ${student.name}`);
// console.log(student.toString());



// 2b. Log the full object to the console

const myArray = [1, 2, 3, 4, 5, 5]
// add element
myArray.push(1200)
myArray.unshift(1200)
myArray.pop()
myArray.shift()
myArray.splice(2, 2, [10, 20])

myArray[3] = [100, 200]

console.log(myArray);

// myArray.filter()
// myArray.find()
// myArray.map()
// myArray.reduce()
// myArray.forEach()



// 2c. Log just the description and amount individually using dot notation



// ---- Exercise 3: Template Literals ----

// 3a. Using your transaction object, create a formatted string with template literals:
//     "Grocery Shopping: 850 QAR (expense)"


// 3b. Create a multi-line receipt string that displays all properties of the transaction


// 3c. Log both strings to the console

