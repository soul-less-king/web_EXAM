/* =================================
   Module 2: Functions & Calculations
   Run: node js/practice.js
   ================================= */

// const numbers = [1, 2, 3, 4]

// numbers.forEach(n => console.log(n))
// console.log(numbers.reduce((a, b) => a + b));


// ---- Exercise 1: Function Declarations ----

// 1a. Write a function formatCurrency(amount) that returns a string like "15,250 QAR"
//     Hint: use amount.toLocaleString()

function add(a, b) {
   return a + b;
}



// const sum = add(5, 10);
// display(`The sum is: ${sum}`);

const add2 = function (a, b) {
   return a + b;
}

// // function are first class citizen

const display2 = function (message) {
   console.log(message);
}

function display(message) {
   console.log(`The message is ${message}`);
}

const display4 = message => console.log(`The message is ${message}`);


const display3 = function (message) {
   console.log(`The game is ${message}`);
}

function addAndDisplay(a, b, fx) {
   const sum = a + b;
   fx(sum)
}

function isEvenOrOdd(num) {
   if (num % 2 == 0) return "Even"
   else return "Odd"
}

num => (num % 2 == 0) ? "Even" : "Odd";
const add4 = (a, b) => a + b;


const x = 10
const y = 10

addAndDisplay(10, 20, message => console.log(`The game is ${message}`))

addAndDisplay(x, y, display4);


// 1b. Write a function calculateRemaining(income, expenses) that returns the difference


// 1c. Test both:
//     formatCurrency(15250)              → "15,250 QAR"
//     calculateRemaining(12000, 8500)    → 3500



// ---- Exercise 2: Arrow Functions ----

// 2a. Rewrite formatCurrency as a one-line arrow function called formatCurrencyArrow


// 2b. Write an arrow function calcSavingsRate(income, expenses) that returns
//     the savings rate as a string with 1 decimal place
//     Formula: ((income - expenses) / income) * 100
//     Hint: use .toFixed(1)


// 2c. Test: calcSavingsRate(12000, 8500) → "29.2"



// ---- Exercise 3: Processing an Array ----

const monthlyExpenses = [4500, 1200, 650, 320, 750, 380];
const income = 12000;

// 3a. Write a function calculateTotal(items) that returns the sum of all items


// 3b. Use calculateTotal to get the total expenses and log it


// 3c. Calculate and log the remaining balance (income - total expenses)


// 3d. Calculate and log the savings rate using your calcSavingsRate function


