/* =================================
   Module 2: Functions & Calculations
   Run: node js/practice.js
   ================================= */

// ---- Exercise 1: Function Declarations ----

// 1a. Write a function formatCurrency(amount) that returns a string like "15,250 QAR"
//     Hint: use amount.toLocaleString()

function formatCurrency(amount) {
   return amount.toLocaleString() + " QAR"
}
amount => amount.toLocaleString() + " QAR"

console.log(formatCurrency(10000));

// 1b. Write a function calculateRemaining(income, expenses) that returns the difference
function calculateRemaining(income, expenses) {
   return income - expenses
}

const calculateRemaining2 = (income, expenses) => income - expenses


console.log(calculateRemaining(1000, 2900));
console.log(calculateRemaining2(1000, 2900));

function isOddOrEven(num) {
   if (num % 2 == 0)
      return "Even"
   else
      return "odd"
}

const isOddEven2 = num => (num % 2 == 0) ? "Even" : "Odd"

const isOddOrEven3 = function (num) {
   if (num % 2 == 0)
      return "Even"
   else
      return "odd"
}

console.log(isOddEven2(11));
// 1c. Test both:
//     formatCurrency(15250)              → "15,250 QAR"
//     calculateRemaining(12000, 8500)    → 3500

function display1(amount) {
   console.log(`The amount is : ${amount}`);

}


const display2 = amount => console.log(`The price is : ${amount}`);

const addAndDisplay = function (a, b, f) {
   const sum = a + b;
   f(sum)
}

const x = 10
const y = 20

addAndDisplay(x, y, display1)
addAndDisplay(10, 20, amount => console.log(`The price is : ${amount}`))
addAndDisplay(10, 20, function (a, b, f) {
   const sum = a + b;
   f(sum)
})
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

