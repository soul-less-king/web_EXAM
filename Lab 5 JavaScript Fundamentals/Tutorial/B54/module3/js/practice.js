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

transactions.forEach(t => console.log(`Send email to ${t.category}`)
);
const expense = transactions.find(t => t.type == "expense")
console.log(expense);


// const descriptions = transactions.map(t => t.description)
// console.log(descriptions);


// const myArray = ['Salary',
//     'Rent',
//     'Groceries',
//     'Bus Pass',
//     'Electric Bill',
//     'Movie Tickets',
//     'Freelance Work',
//     'Restaurant',
//     'Gas',
//     'New Shoes'
// ]

// console.log(myArray.map(s => `<td> ${s} </td>`))
// const expenses = []
// for (const t of transactions) {
//     if (t.type == "expense")
//         expenses.push(t)

// }

// console.log(expenses);
// function isExpense(t) {

//     return t.type == "expense"
// }
// function isIncome(t) {
//     if (t.type == "income") return true
//     return false
// }

const expenses = transactions.filter(t => t.type == "expense")
const incomes = transactions.filter(t => t.type == "income")
const expensesLessThan300 = transactions
    .filter(t => t.type == "expense")
    .filter(t => t.amount < 300)

// 1 == "1"  = True
// 1 === "1" = false

// console.log(expenses);
// console.log(incomes);
console.log(`There are ${expensesLessThan300.length} expenses less than 300`);



// ---- Exercise 1: filter and map ----

// 1a. Use .filter() to create an array of only the expense transactions. Log the count.


// 1b. Use .filter() to create an array of only the income transactions. Log the count.


// 1c. Use .map() to create an array of just the description strings. Log it.

// A - 1 , B - 2 , Z - 26
// const numbers = [1, 2, 3, 4, 5]

// // [<li>1</li>, <li>2</li>, ]
// const result = numbers.map(a => a * 10)
// console.time();

// const whadhaResult = numbers.map(a => `<li>${a}</li>`)

// console.timeEnd();
// console.time();
// // const asmaResult = numbers.map(a => '<li>' + a + '</li>')
// console.timeEnd();
// console.log(whadhaResult);
// console.log(asmaResult);



// 1d. Use .map() to create formatted strings like "+12,000 QAR" or "-4,500 QAR". Log it.



// ---- Exercise 2: reduce ----

// 2a. Use .filter() + .reduce() to calculate total income. Log it.


// 2b. Use .filter() + .reduce() to calculate total expenses. Log it.


// 2c. Calculate and log the balance (income - expenses).



// ---- Exercise 3: Method Chaining ----

// 3a. Use .filter() and .reduce() to group expenses by category into an object.
//     Expected: { Housing: 4500, Food: 1400, Transportation: 900, ... }


// 3b. Use Object.entries() and .map() to log each category with its total.

const numbers = [1, 12, 13, 14, 5]



function myReducer(acc, curr) {
    return acc + curr
}
const f = (acc, curr) => acc + curr
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr)
const min = numbers.reduce((acc, curr) => acc < curr ? acc : curr)


// acc = 0, curr = 1 → return 1
// acc = 1, curr = 12 → return 13
// acc = 13, curr = 13 → return 26
// acc = 26, curr = 14 → return 40
// acc = 40, curr = 5 → return 45

console.log(`The sum is ${sum}`);




