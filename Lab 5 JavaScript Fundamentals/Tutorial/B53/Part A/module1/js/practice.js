/* =================================
   Module 1: Variables & Data Types
   Run: node js/practice.js
   ================================= */

// ---- Exercise 1: Declaring Variables ----

// 1a. Declare a constant called accountName and set it to "Main Checking"
const accountName = "Main Checking"

// 1b. Declare a variable (let) called balance and set it to 15250
let balance = 15250
const isActive = false;

console.log(balance);
console.log(accountName, isActive);

if (isActive) {
   console.log('This account is active');

} else if (!isActive) {
   console.log('This is not an active account');

} else {
   console.log('THis is a useless else that should never be here');

}


// are very bad, never use them
// var globalVariable = "Anything"
// globalVariable2 = "Anything"
// 1b. Declare a variable (let) called balance and set it to 15250


// 1c. Declare a constant called isActive and set it to true

const transactions = [100, -50, 200, -30, 500]
console.log(transactions[0]);

transactions.push(5000)
console.log(transactions);

transactions.pop()
console.log(transactions);

transactions.unshift(10000)
console.log(transactions);

transactions.shift(10000)
console.log(transactions);

transactions.splice(1, 2)
console.log(transactions);

transactions.splice(2, 1, 999, 100, 700)
console.log(transactions);


// transactions.forEach(a => console.log(a));


// template literals
const year = 2000
const multi = `
               Multiple  ${year}
               Line ${year < 2000 ? "Hard times" : "Good Time"}
               String
               that 
               can 
               be 
               displayed
               `;


console.log(multi);


const person = {
   name: "Maha",
   age: 100,
   gender: "Female",
}

// 1d. Log all three to the console
console.log(person.name);
console.log(person.age);
console.log(person.gender);



// ---- Exercise 2: Working with Objects ----

// 2a. Create a transaction object with these properties:
//     description: "Grocery Shopping", amount: 850, category: "Food", type: "expense"


// 2b. Log the full object to the console


// 2c. Log just the description and amount individually using dot notation



// ---- Exercise 3: Template Literals ----

// 3a. Using your transaction object, create a formatted string with template literals:
//     "Grocery Shopping: 850 QAR (expense)"


// 3b. Create a multi-line receipt string that displays all properties of the transaction


// 3c. Log both strings to the console

