/* =================================
   Module 3: Arrays & Array Methods
   Run: node js/practice.js
   ================================= */

const formatCurrency = (amount) => amount.toLocaleString() + " QAR";

// Sample data - do not modify
const transactions = [
    { description: "Salary", amount: 12000, type: "income", category: "Income" },
    { description: "Rent", amount: 4500, type: "expense", category: "Housing" },
    { description: "Groceries", amount: 1200, type: "expense", category: "Food" },
    { description: "Bus Pass", amount: 650, type: "expense", category: "Transportation" },
    { description: "Electric Bill", amount: 320, type: "expense", category: "Utilities" },
    { description: "Movie Tickets", amount: 150, type: "expense", category: "Entertainment" },
    { description: "Freelance Work", amount: 3000, type: "income", category: "Income" },
    { description: "Restaurant", amount: 200, type: "expense", category: "Food" },
    { description: "Gas", amount: 250, type: "expense", category: "Transportation" },
    { description: "New Shoes", amount: 380, type: "expense", category: "Shopping" }
];

// const oneTransaction = transactions.find(a => a.amount == 250)

// function display(a) {
//     console.log(a);

// }
// transactions.forEach(a => console.log(a.description))

// ---- Exercise 1: filter and map ----

// 1a. Use .filter() to create an array of only the expense transactions. Log the count.
//  1 == "-1" is true
// 1 === "-1" is false
// const expenses = transactions.filter(t => t.type === "expense")
// console.log(expenses);

// const lessThan500Amount = transactions.filter(t => t.amount < 500)
// // console.log(lessThan500Amount);

// // 1b. Use .filter() to create an array of only the income transactions. Log the count.


// // 1c. Use .map() to create an array of just the description strings. Log it.
// const options = transactions.map(t => `<option value=${t.amount}>${t.description} : ${t.amount} </option>`)
// const dropdown = `<select>  ${options} </select>`
// console.log(dropdown);


// 1d. Use .map() to create formatted strings like "+12,000 QAR" or "-4,500 QAR". Log it.

const numbers = [1, 20, 30, 40, 50]

const result = numbers
    .filter(num => num % 2 == 0)
    .map(num => num * 10)
    .reduce((acc, curr) => acc + curr)

console.log(`Result ${result}`);


const sum = numbers.reduce((acc, curr) => acc + curr)

// acc = 1, curr = 20, return 21
// acc = 21, curr = 30, return 51
// acc = 51, curr = 40, return 91
// acc = 91, curr = 50, return 141
f = (acc, curr) => acc + curr
console.log(sum);

const sum2 = numbers.reduce(f, 0)
// acc = 0, curr = 1 , return 1
// acc = 1, curr = 20, return 21
// acc = 21, curr = 30, return 51
// acc = 51, curr = 40, return 91
// acc = 91, curr = 50, return 141
console.log(sum2);

const mul = numbers.reduce((acc, curr) => acc * curr, 1)
// acc = 1, curr = 1 , return 1
// acc = 1, curr = 20, return 20
// acc = 20, curr = 30, return 600
// acc = 600, curr = 40, return 24000
// acc = 24000, curr = 50, return 1200000
console.log(mul);

// ---- Exercise 2: reduce ----

// 2a. Use .filter() + .reduce() to calculate total income. Log it.


// 2b. Use .filter() + .reduce() to calculate total expenses. Log it.


// 2c. Calculate and log the balance (income - expenses).



// ---- Exercise 3: Method Chaining ----

// 3a. Use .filter() and .reduce() to group expenses by category into an object.
//     Expected: { Housing: 4500, Food: 1400, Transportation: 900, ... }


// 3b. Use Object.entries() and .map() to log each category with its total.

