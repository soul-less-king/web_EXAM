# 📘 Web Development Exam Reference Library
### CMPS 350 — Labs 5, 6, 7 + Assignment 2 + Practice Session

> **How to use:** Press **Cmd+F** and search for any keyword: "filter", "Fetch", "OOP", "localStorage", "startEdit", "FormData", "Mocha", etc.
> Every concept from every lab, tutorial, starter code file, and assignment is documented here with the exact context it appeared in.

---

## 📑 Table of Contents

1. [Variables & Data Types (Lab 5 Module 1)](#1-variables--data-types)
2. [Functions — Declarations & Arrow (Lab 5 Module 2)](#2-functions--declarations--arrow)
3. [Arrays & Array Methods (Lab 5 Module 3)](#3-arrays--array-methods)
4. [DOM Selection & Manipulation (Lab 5 Module 4)](#4-dom-selection--manipulation)
5. [Event Listeners (Lab 5 Module 5)](#5-event-listeners)
6. [Mini Budget Calculator Pattern (Lab 5 Module 6 + Part B)](#6-mini-budget-calculator-pattern)
7. [Classes, Constructors & Methods (Lab 6 Module 1)](#7-classes-constructors--methods)
8. [Inheritance: extends, super, instanceof (Lab 6 Module 2)](#8-inheritance-extends-super-instanceof)
9. [Unit Testing: Mocha & Chai (Lab 6 Module 3)](#9-unit-testing-mocha--chai)
10. [DOM + Events + LocalStorage (Lab 6 Module 4)](#10-dom--events--localstorage)
11. [JSON & Data Transformation (Lab 7 Module 1)](#11-json--data-transformation)
12. [Async / Await & Promises (Lab 7 Module 2)](#12-async--await--promises)
13. [Fetch API — GET & Display (Lab 7 Module 3)](#13-fetch-api--get--display)
14. [CRUD Operations — POST, PUT, DELETE (Lab 7 Module 4)](#14-crud-operations--post-put-delete)
15. [Full CRUD App Architecture (Lab 7 Part B + Practice Session)](#15-full-crud-app-architecture)
16. [SPA Navigation — loadPage() Pattern (Assignment 2)](#16-spa-navigation--loadpage-pattern)
17. [FormData Pattern (Assignment 2)](#17-formdata-pattern)
18. [Template Literal HTML Cards (Assignment 2 / Labs)](#18-template-literal-html-cards)
19. [Search & Filter (Lab 7 Part B / Practice Session)](#19-search--filter)
20. [Edit Mode: startEdit / cancelEdit (Labs 7, Assignment 2)](#20-edit-mode-startedit--canceledit)
21. [CSS: Layouts, Grids & Responsive Design (Labs 3–4)](#21-css-layouts-grids--responsive-design)
22. [CSS: Form Styling, Buttons & States](#22-css-form-styling-buttons--states)
23. [HTML: Scaffolding & Templates](#23-html-scaffolding--templates)
24. [Validation & Sanitization Patterns](#24-validation--sanitization-patterns)
25. [Common Mistakes & Bug Fixes Checklist](#25-common-mistakes--bug-fixes-checklist)
26. [Complete TODO Inventory (All Labs & Assignment)](#26-complete-todo-inventory)
27. [Exam Question Types by Topic](#27-exam-question-types-by-topic)

---

## 1. Variables & Data Types

> **Source:** Lab 5 Module 1 — `Startup Code/Part A/module1/js/practice.js`

### const vs let

```javascript
// const — cannot be reassigned (like Java's final)
const "change to account name variable" = "Main Checking";
const "change to tax rate variable" = 0.05;
const "change to isActive variable" = true;

// let — can be reassigned
let "change to balance variable" = 15250;
"change to balance variable" = "change to balance variable" + 1000;
"change to balance variable" += 500;  // shorthand

// ERROR: const accountName = "Savings";  ← cannot reassign a const
```

**Rule:** Use `const` by default. Use `let` only when the value needs to change (counters, running totals, state flags like `editingId`).

### Objects (Key-Value Pairs)

```javascript
// No class definition needed — just curly braces
const "change to transaction object" = {
    "change to description property": "Grocery Shopping",
    "change to amount property": 850,
    "change to category property": "Food",
    "change to type property": "expense"
};

// Access with dot notation
console.log("change to transaction object"."change to description property");  // "Grocery Shopping"
console.log("change to transaction object"."change to amount property");       // 850

// Access with bracket notation (when key is a variable)
const "change to field variable" = "change to amount property";
console.log("change to transaction object"["change to field variable"]);       // 850
```

### Template Literals

```javascript
// Like Python f-strings — use backticks `` and ${}
const "change to name variable" = "MyFinance";
const "change to greeting variable" = `Welcome to ${"change to name variable"}`;

// Multi-line receipt (Lab 5 Module 1 Exercise 3b)
const "change to receipt variable" = `
Transaction: ${"change to transaction object"."change to description property"}
Amount:      ${"change to transaction object"."change to amount property"} QAR
Category:    ${"change to transaction object"."change to category property"}
Type:        ${"change to transaction object"."change to type property"}
`;

// Formatted string (Lab 5 Module 1 Exercise 3a)
const "change to formatted variable" = `${"change to transaction object"."change to description property"}: ${"change to transaction object"."change to amount property"} QAR (${"change to transaction object"."change to type property"})`;
```

### Practice Exercises (exact from Lab 5 Module 1)

```javascript
// 1a.
const "change to account name variable" = "Main Checking";
// 1b.
let "change to balance variable" = 15250;
// 1c.
const "change to isActive variable" = true;
// 1d.
console.log("change to account name variable", "change to balance variable", "change to isActive variable");

// 2a.
const "change to transaction object" = { "change to description property": "Grocery Shopping", "change to amount property": 850, "change to category property": "Food", "change to type property": "expense" };
// 2b.
console.log("change to transaction object");
// 2c.
console.log("change to transaction object"."change to description property", "change to transaction object"."change to amount property");

// 3a.
const "change to line variable" = `${"change to transaction object"."change to description property"}: ${"change to transaction object"."change to amount property"} QAR (${"change to transaction object"."change to type property"})`;
// 3b. (multi-line)
const "change to fullReceipt variable" = `Transaction: ${"change to transaction object"."change to description property"}\nAmount: ${"change to transaction object"."change to amount property"} QAR\nCategory: ${"change to transaction object"."change to category property"}\nType: ${"change to transaction object"."change to type property"}`;
// 3c.
console.log("change to line variable");
console.log("change to fullReceipt variable");
```

---

## 2. Functions — Declarations & Arrow

> **Source:** Lab 5 Module 2 — `Startup Code/Part A/module2/js/practice.js`

### Function Declarations (Exercise 1)

```javascript
// Multi-line, named, hoisted (can call before definition)
function "change to format currency function name"("change to amount parameter") {
    return "change to amount parameter".toLocaleString() + " QAR";
}

function "change to calculate remaining function name"("change to income parameter", "change to expenses parameter") {
    return "change to income parameter" - "change to expenses parameter";
}

// Tests (from lab)
console.log("change to format currency function name"(15250));           // "15,250 QAR"
console.log("change to calculate remaining function name"(12000, 8500)); // 3500
```

### Arrow Functions (Exercise 2)

```javascript
// One-liner — implicit return, no braces needed
const "change to format currency function name" = ("change to amount parameter") => "change to amount parameter".toLocaleString() + " QAR";

// Multi-line — explicit return required
const "change to calculate savings rate function name" = ("change to income parameter", "change to expenses parameter") => {
    const "change to savings variable" = "change to income parameter" - "change to expenses parameter";
    const "change to rate variable" = ("change to savings variable" / "change to income parameter") * 100;
    return "change to rate variable".toFixed(1);  // "29.2"
};

// Safe version — handle income === 0
const "change to calculate savings rate safe function name" = ("change to income parameter", "change to expenses parameter") => {
    if ("change to income parameter" === 0) return "0.0";
    return ((("change to income parameter" - "change to expenses parameter") / "change to income parameter") * 100).toFixed(1);
};

// Test:
console.log("change to calculate savings rate function name"(12000, 8500));  // "29.2"
```

### Processing an Array of Numbers (Exercise 3)

```javascript
const monthlyExpenses = [4500, 1200, 650, 320, 750, 380];
const income = 12000;

// 3a. Write a function calculateTotal(items) that returns the sum of all items
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item, 0);
}

// 3b. Total expenses
const totalExpenses = calculateTotal(monthlyExpenses); // 7800

// 3c. Remaining balance
const balance = income - totalExpenses;                // 4200

// 3d. Savings rate
const rate = calcSavingsRate(income, totalExpenses);   // "35.0"
```

### Key Differences: Declaration vs Arrow

| Feature | Function Declaration | Arrow Function |
|---|---|---|
| Hoisting | Yes — can call before definition | No — must define first |
| `this` binding | Has its own `this` | Inherits `this` from surrounding scope |
| Syntax | `function name() {}` | `const name = () => {}` |
| Best use | Named utility functions | Callbacks, one-liners, array methods |

---

## 3. Arrays & Array Methods

> **Source:** Lab 5 Module 3, Lab 7 Module 1 — practice files + Tutorial B01

### Standard Sample Data (used across ALL labs)

```javascript
const "change to array name" = [
    { "change to description property": "Salary",        "change to amount property": 12000, "change to type property": "income",  "change to category property": "Income" },
    { "change to description property": "Rent",          "change to amount property": 4500,  "change to type property": "expense", "change to category property": "Housing" },
    { "change to description property": "Groceries",     "change to amount property": 1200,  "change to type property": "expense", "change to category property": "Food" },
    { "change to description property": "Bus Pass",      "change to amount property": 650,   "change to type property": "expense", "change to category property": "Transportation" },
    { "change to description property": "Electric Bill", "change to amount property": 320,   "change to type property": "expense", "change to category property": "Utilities" },
    { "change to description property": "Movie Tickets", "change to amount property": 150,   "change to type property": "expense", "change to category property": "Entertainment" },
    { "change to description property": "Freelance Work","change to amount property": 3000,  "change to type property": "income",  "change to category property": "Income" },
    { "change to description property": "Restaurant",    "change to amount property": 200,   "change to type property": "expense", "change to category property": "Food" },
    { "change to description property": "Gas",           "change to amount property": 250,   "change to type property": "expense", "change to category property": "Transportation" },
    { "change to description property": "New Shoes",     "change to amount property": 380,   "change to type property": "expense", "change to category property": "Shopping" }
];
```

### filter — Keep items matching a condition

```javascript
// 1a. All expenses (Lab 5 Module 3)
const "change to expenses only variable" = "change to array name".filter(t => t."change to type property" === "expense");

// 1b. All income
const "change to income only variable" = "change to array name".filter(t => t."change to type property" === "income");

// Case-insensitive search on description
const "change to search results variable" = "change to array name".filter(t =>
    t."change to description property".toLowerCase().includes("rent")
);
```

### map — Transform each item

```javascript
// 1c. Extract just descriptions
const "change to descriptions array variable" = "change to array name".map(t => t."change to description property");

// 1d. Format each into display string
const "change to formatted strings variable" = "change to array name".map(t => {
    const sign = t."change to type property" === "income" ? "+" : "-";
    return `${t."change to description property"}: ${sign}${t."change to amount property".toLocaleString()} QAR`;
});

// Map to HTML table rows
const "change to rows html variable" = "change to array name".map(t => `
    <tr>
        <td>${t."change to description property"}</td>
        <td>${t."change to category property"}</td>
        <td>${t."change to amount property".toLocaleString()} QAR</td>
    </tr>
`).join("");
  // ALWAYS .join("") at the end to make one string
```

### reduce — Combine items into one value

```javascript
// 2a. Total income (filter first, then reduce)
const "change to total income variable" = "change to array name"
    .filter(t => t."change to type property" === "income")
    .reduce((sum, t) => sum + t."change to amount property", 0);

// 2b. Total expenses
const "change to total expenses variable" = "change to array name"
    .filter(t => t."change to type property" === "expense")
    .reduce((sum, t) => sum + t."change to amount property", 0);

// 2c. Balance
const "change to balance variable" = "change to total income variable" - "change to total expenses variable";

// Find the LARGEST expense
const "change to largest expense variable" = "change to array name"
    .filter(t => t."change to type property" === "expense")
    .reduce((max, t) => t."change to amount property" > max."change to amount property" ? t : max);
// { description: "Rent", amount: 4500, ... }
```

### Grouping by Category with reduce (Lab 7 Module 1 Exercise 3 + Lab 5 Module 3 Exercise 3a)

```javascript
// 3a. Group expenses by category
const "change to grouped data variable" = "change to array name".reduce(("change to groups parameter", "change to item parameter") => {
    if ("change to item parameter"."change to type property" === "expense") {
        "change to groups parameter"["change to item parameter"."change to category property"] = ("change to groups parameter"["change to item parameter"."change to category property"] || 0) + "change to item parameter"."change to amount property";
    }
    return "change to groups parameter";
}, {});  // {} is the starting accumulator

// Group ALL (Lab 7 Module 1)
const allByCategory = transactions.reduce((groups, t) => {
    groups[t.category] = (groups[t.category] || 0) + t.amount;
    return groups;
}, {});
```

### Object.entries() — Loop over grouped data (Exercise 3b)

```javascript
// 3b. Log each category with Object.entries().forEach()
Object.entries("change to grouped data variable").forEach((["change to key variable", "change to value variable"]) => {
    console.log(`${"change to key variable"}: ${"change to value variable"}.toLocaleString() + " QAR"`);
});

// Map categories to HTML cards
const "change to summary html variable" = Object.entries("change to grouped data variable")
    .map((["change to key variable", "change to value variable"]) => `
        <div class="card">
            <h4>${"change to key variable"}</h4>
            <p>${"change to value variable"}.toLocaleString() + " QAR"</p>
        </div>
    `)
    .join("");
```

### Other Array Methods (used throughout labs)

```javascript
// push — add to end (every form submit)
"change to array name".push({ "change to description property": "Lunch", "change to amount property": 45, "change to type property": "expense", "change to category property": "Food" });

// find — return first matching item
const "change to found item variable" = "change to array name".find(t => t.id === 3);

// findIndex — return index of first match
const "change to index variable" = "change to array name".findIndex(t => t.id === 3);
"change to array name"["change to index variable"] = "change to updated object";

// filter to REMOVE by id
"change to array name" = "change to array name".filter(t => t.id !== id);

// some — check if ANY item matches
const "change to boolean flag variable" = "change to array name".some(t => t."change to type property" === "expense");
```

---

## 4. DOM Selection & Manipulation

> **Source:** Lab 5 Module 4 — `Startup Code/Part A/module4/js/practice.js`

### Exercise 0: Link JS to HTML (always first!)

```html
<!-- Place at bottom of <body> — HTML must load before script runs -->
<body>
    <!-- your HTML content here -->
    <script src="js/practice.js"></script>
</body>
```

Without this tag, your JS file sits there doing nothing. Check the console — if you see "Module 4 JS loaded!" the link works.

### Selecting Elements (Exercise 1)

```javascript
// TODO 4: Save total balance to LocalStorage
const totalBalance = 5000;
localStorage.setItem("change to localstorage key", totalBalance);

// TODO 5: Reload balance from LocalStorage
const savedBalance = localStorage.getItem("change to localstorage key");
if (savedBalance) {
    document.getElementById("change to balance element ID").textContent = savedBalance + " QAR";
}

// 1a. By ID — returns ONE element (fastest)
const "change to balance element variable"  = document.getElementById("change to balance element ID");
const "change to income element variable"   = document.getElementById("change to income element ID");
const "change to expense element variable" = document.getElementById("change to expenses element ID");

// 1b. Log textContent
console.log("change to balance element variable".textContent);

// 1c. By CSS selector — first match
const "change to first card variable" = document.querySelector("change to card selector");
console.log("change to first card variable".querySelector("h3").textContent);

// 1d. By CSS selector — ALL matches
const "change to all amounts variable" = document.querySelectorAll("change to amounts selector");
console.log("Found", "change to all amounts variable".length, "amounts");
```

### Reading & Modifying Elements (Exercise 2)

```javascript
// 2a. Set textContent (safe — does not parse HTML)
balanceEl.textContent = "50,000";

// 2b. Add CSS class
balanceEl.classList.add("text-success");

// 2c. Change inline style
document.getElementById("output2").style.backgroundColor = "#f0f0f0";
document.getElementById("output2").style.color = "red";

// Set innerHTML (allows HTML tags)
balanceEl.innerHTML = "<strong>50,000</strong> QAR";

// Remove class
balanceEl.classList.remove("text-danger");

// Toggle class (add if absent, remove if present)
const nav = document.getElementById("nav-menu");
nav.classList.toggle("show");

// Check class
if (balanceEl.classList.contains("text-success")) { /* ... */ }
```

### Creating & Appending Elements (Exercise 3)

```javascript
// 3a. Create element
const newCard = document.createElement("div");

// 3b. Set class
newCard.className = "card";

// 3c. Set inner HTML (uses calcSavingsRate from module)
newCard.innerHTML = `
    <h3>Savings Rate</h3>
    <p>${calcSavingsRate(12000, 8500)}%</p>
`;

// 3d. Append to parent
document.getElementById("container").appendChild(newCard);
```

### Coloring Balance Green/Red (universal pattern — appears in EVERY Part B)

```javascript
const balanceEl = document.getElementById("total-balance");
balanceEl.textContent = balance.toLocaleString() + " QAR";

// Approach 1 — classList (preferred in labs)
balanceEl.classList.remove("text-success", "text-danger");
balanceEl.classList.add(balance >= 0 ? "text-success" : "text-danger");

// Approach 2 — inline style (used in Lab 7 Part B starter)
balanceEl.style.color = balance >= 0 ? "green" : "red";
```

---

## 5. Event Listeners

> **Source:** Lab 5 Module 5 — `Startup Code/Part A/module5/js/practice.js`

### Click Events (Exercise 1 — running balance)

```javascript
let "change to balance variable" = 0;
const "change to balance display element variable" = document.getElementById("change to balance display ID");

// 1a. Add income button (+1000)
document.getElementById("change to income button ID").addEventListener("click", () => {
    "change to balance variable" += 1000;
    "change to balance display element variable".textContent = "change to balance variable".toLocaleString() + " QAR";
});

// 1b. Add expense button (-500)
document.getElementById("change to expense button ID").addEventListener("click", () => {
    "change to balance variable" -= 500;
    "change to balance display element variable".textContent = "change to balance variable".toLocaleString() + " QAR";
});

// 1c. Reset button
document.getElementById("change to reset button ID").addEventListener("click", () => {
    "change to balance variable" = 0;
    "change to balance display element variable".textContent = "0 QAR";
});
```

### Input Events (Exercise 2 — real-time preview)

```javascript
// 2a. Live amount preview as user types
document.getElementById("amount-input").addEventListener("input", (event) => {
    const value = event.target.value;   // read what user typed
    document.getElementById("amount-preview").textContent =
        Number(value).toLocaleString() + " QAR";
});
```

### Form Submit Events (Exercise 3 — the universal pattern)

```javascript
// Step 1: get form + table elements
const itemForm  = document.getElementById("change to form ID");
const itemTable = document.getElementById("change to table body ID");

// Step 2: array to hold data
let "change to array name" = [];

// Step 3: Handle form submission
itemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values from inputs
    const description = document.getElementById("change to description input ID").value;
    const amount      = Number(document.getElementById("change to amount input ID").value);
    const type        = document.getElementById("change to type select ID").value;
    const category    = document.getElementById("change to category select ID").value;

    const newItem = { description, amount, type, category };
    "change to array name".push(newItem);

    // Render table
    itemTable.innerHTML = "change to array name".map(item => `
        <tr>
            <td>${item.description}</td>
            <td class="${item.type === 'income' ? 'text-success' : 'text-danger'}">${item.amount}</td>
        </tr>
    `).join("");

    // Clear form
    e.target.reset();
});
```

### change Event for Dropdowns (used in filter)

```javascript
// Fires when user selects a different option
document.getElementById("filter-type").addEventListener("change", () => {
    renderTransactions();
});
```

### querySelectorAll + forEach (multiple elements)

```javascript
// Active nav link pattern
document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
});
document.querySelector(`.nav-link[onclick*="'${page}'"]`)?.classList.add("active");
```

---

## 6. Mini Budget Calculator Pattern

> **Source:** Lab 5 Module 6 (`module6/js/practice.js`) + Part B (`Part B/js/app.js`) — the canonical full pattern

This is the template every Part B builds on. Know all 4 steps.

```javascript
/* ===== Lab 5 Module 6 + Part B — Full Pattern ===== */

// Step 1: Helper functions
const "change to format currency function name" = ("change to amount parameter") => "change to amount parameter".toLocaleString() + " QAR";

const "change to calculate savings rate function name" = ("change to income parameter", "change to expenses parameter") => {
    if ("change to income parameter" === 0) return "0.0";
    return ((("change to income parameter" - "change to expenses parameter") / "change to income parameter") * 100).toFixed(1);
};

// Step 2: Data storage — empty array
let "change to array name" = [];

// Step 3: updateDashboard()
function "change to update dashboard function name"() {
    const "change to total income variable" = "change to array name"
        .filter(t => t."change to type property" === "income")
        .reduce((sum, t) => sum + t."change to amount property", 0);

    const "change to total expenses variable" = "change to array name"
        .filter(t => t."change to type property" === "expense")
        .reduce((sum, t) => sum + t."change to amount property", 0);

    const "change to balance variable" = "change to total income variable" - "change to total expenses variable";

    document.getElementById("change to total income element ID").textContent   = "change to format currency function name"("change to total income variable");
    document.getElementById("change to total expenses element ID").textContent = "change to format currency function name"("change to total expenses variable");
    document.getElementById("change to balance element ID").textContent  = "change to format currency function name"("change to balance variable");
    document.getElementById("change to savings rate element ID").textContent   = "change to calculate savings rate function name"("change to total income variable", "change to total expenses variable") + "%";

    // Color the balance
    const "change to balance element variable" = document.getElementById("change to balance element ID");
    "change to balance element variable".classList.remove("text-success", "text-danger");
    "change to balance element variable".classList.add("change to balance variable" >= 0 ? "text-success" : "text-danger");
}

// Step 4: renderTransactions()
function renderTransactions() {
    const tableBody = document.getElementById("change to table body ID");

    if ("change to array name".length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3" class="empty-state">No transactions yet</td></tr>`;
        return;
    }

    tableBody.innerHTML = "change to array name".map(t => `
        <tr>
            <td>${t.description}</td>
            <td>${t.type}</td>
            <td class="${t.type === 'income' ? 'text-success' : 'text-danger'}">
                ${t.type === 'income' ? '+' : '-'}${formatCurrency(t.amount)}
            </td>
        </tr>
    `).join("");
}

// Step 5: Form submit listener (#quick-transaction-form in Part B)
document.getElementById("change to form ID").addEventListener("submit", (e) => {
    e.preventDefault();
    const description = document.getElementById("change to description input ID").value;
    const amount      = Number(document.getElementById("change to amount input ID").value);
    const type        = document.getElementById("change to type select ID").value;

    "change to array name".push({ description, amount, type });
    updateDashboard();
    renderTransactions();
    e.target.reset();
});

// Step 6: Clear button (#clear-btn)
document.getElementById("change to clear button ID").addEventListener("click", () => {
    "change to array name".length = 0;  // clear in place
    updateDashboard();
    renderTransactions();
});
```

---

## 7. Classes, Constructors & Methods

> **Source:** Lab 6 Module 1 — `module1/js/practice.js` + solved version in `module2/js/practice.js`

### Exercise 1: Transaction Class (core — appears in every lab from 6 onward)

```javascript
// TODO: Define the "change to class name" class with constructor and 3 methods
class "change to class name" {
    constructor("change to description property", "change to amount property", "change to type property", "change to category property") {
        this."change to description property" = "change to description property";
        this."change to amount property"      = "change to amount property";
        this."change to type property"        = "change to type property";
        this."change to category property"    = "change to category property";
    }

    // Returns "+8,000 QAR" for income, "-3,500 QAR" for expense
    "change to format method"() {
        const sign = this."change to type property" === "income" ? "+" : "-";
        return sign + this."change to amount property".toLocaleString() + " QAR";
    }

    "change to isExpense check method"() { return this."change to type property" === "expense"; }
    "change to isIncome check method"()  { return this."change to type property" === "income";  }
}

// Tests from lab:
const t1 = new Transaction("Salary", 8000, "income", "Salary");
const t2 = new Transaction("Rent", 3500, "expense", "Housing");
console.log(t1.format());    // +8,000 QAR
console.log(t2.format());    // -3,500 QAR
console.log(t1.isIncome());  // true
console.log(t2.isExpense()); // true
```

### Exercise 2: Account Class with Methods

```javascript
// TODO: Define the "change to Account class name" class with constructor and 3 methods
class "change to Account class name" {
    constructor("change to name property", "change to type property", "change to balance property") {
        this."change to name property"      = "change to name property";
        this."change to type property"      = "change to type property";
        this."change to balance property"   = "change to balance property";
        this."change to createdAt property" = new Date().toLocaleDateString();  // auto-set!
    }

    "change to deposit method"(amount) {
        this."change to balance property" += amount;
        console.log(`Deposited ${amount.toLocaleString()} QAR`);
    }

    "change to withdraw method"(amount) {
        if (amount > this."change to balance property") {
            console.log("Insufficient funds");
            return false;  // return false for test assertions
        }
        this."change to balance property" -= amount;
        console.log(`Withdrew ${amount.toLocaleString()} QAR`);
        return true;
    }

    "change to getBalance method"() {
        return this."change to balance property".toLocaleString() + " QAR";
    }
}

// Tests from lab:
const acc = new Account("Main Checking", "checking", 10000);
console.log("Balance:", acc.getBalance());       // 10,000 QAR
acc.deposit(5000);                               // Deposited 5,000 QAR
console.log("After deposit:", acc.getBalance()); // 15,000 QAR
acc.withdraw(3000);                              // Withdrew 3,000 QAR
console.log("After withdraw:", acc.getBalance()); // 12,000 QAR
acc.withdraw(50000);                             // Insufficient funds
```

### Exercise 3: BudgetCategory with toString()

```javascript
// TODO: Define the BudgetCategory class
class BudgetCategory {
    constructor(name, budgeted, spent = 0) {
        this.name     = name;
        this.budgeted = budgeted < 0 ? 0 : budgeted;  // guard negative
        this.spent    = spent;
    }

    addSpending(amount)  { this.spent += amount; }
    getRemaining()       { return this.budgeted - this.spent; }
    isOverBudget()       { return this.spent > this.budgeted; }

    // toString() is called automatically in template literals: `${food}` → food.toString()
    toString() {
        return `${this.name}: ${this.spent.toLocaleString()} / ${this.budgeted.toLocaleString()} QAR`;
    }
}

// Tests from lab:
const food = new BudgetCategory("Food", 2000);
food.addSpending(800);
food.addSpending(400);
console.log(`${food}`);                           // Food: 1,200 / 2,000 QAR
console.log("Over budget?", food.isOverBudget()); // false
food.addSpending(1000);
console.log(`${food}`);                           // Food: 2,200 / 2,000 QAR
console.log("Over budget?", food.isOverBudget()); // true
```

### AccountManager Class (Lab 6 Part B — the full OOP manager)

```javascript
// TODO: Define "change to Manager class name" class here
class "change to Manager class name" {
    constructor() {
        this."change to storage key property" = "change to storage key value";
        const saved       = localStorage.getItem(this."change to storage key property");
        this."change to array name" = saved ? JSON.parse(saved) : [];
    }

    "change to add method"("change to description property", "change to amount property", "change to type property", "change to category property") {
        const t = new "change to class name"("change to description property", "change to amount property", "change to type property", "change to category property");
        this."change to array name".push(t);
        this."change to save method"();
        return t;
    }

    "change to remove method"("change to index parameter") {
        this."change to array name".splice("change to index parameter", 1);
        this."change to save method"();
    }

    "change to get all method"()  { return this."change to array name"; }
    "change to clear method"()   { this."change to array name" = []; this."change to save method"(); }
    "change to save method"()    { localStorage.setItem(this."change to storage key property", JSON.stringify(this."change to array name")); }

    "change to get totals method"() {
        const income   = this."change to array name".filter(t => t."change to type property" === "income")
                             .reduce((sum, t) => sum + Number(t."change to amount property"), 0);
        const expenses = this."change to array name".filter(t => t."change to type property" === "expense")
                             .reduce((sum, t) => sum + Number(t."change to amount property"), 0);
        return { 
            income, 
            expenses, 
            balance: income - expenses, 
            count: this."change to array name".length 
        };
    }

    "change to get category summary method"() {
        return this."change to array name".reduce((acc, t) => {
            if (t."change to type property" === "expense") {
                acc[t."change to category property"] = (acc[t."change to category property"] || 0) + Number(t."change to amount property");
            }
            return acc;
        }, {});
    }

    "change to get savings rate method"() {
        const { income, expenses } = this."change to get totals method"();
        if (income === 0) return "0.0";
        return (((income - expenses) / income) * 100).toFixed(1);
    }
}

// TODO: Create an instance
const manager = new AccountManager();
```

---

## 8. Inheritance: extends, super, instanceof

> **Source:** Lab 6 Module 2 — `module2/js/practice.js`

### Exercise 1: SavingsAccount extends Account

```javascript
// TODO: Define "change to Savings Account class name" class
class "change to Savings Account class name" extends "change to Account class name" {
    constructor("change to name property", "change to balance property", "change to profit rate property") {
        super("change to name property", "savings", "change to balance property");  // MUST be first line
        // "savings" is hardcoded as the type — set by super
        this."change to profit rate property" = "change to profit rate property";
    }

    "change to apply profit method"() {
        const profit = this."change to balance property" * this."change to profit rate property";
        this."change to balance property" += profit;
        console.log(`Profit earned: ${profit.toLocaleString()} QAR`);
        return profit;  // return value used in Mocha tests!
    }
}

// Tests:
const savings = new SavingsAccount("Emergency Fund", 20000, 0.04);
console.log("Type:", savings.type);                // savings (set by super)
console.log("Balance:", savings.getBalance());     // 20,000 QAR (inherited method)
savings.applyProfit();                             // Profit earned: 800 QAR
console.log("After profit:", savings.getBalance()); // 20,800 QAR
```

### Exercise 2: RecurringTransaction extends Transaction

```javascript
// TODO: Define "change to Recurring Transaction class name" class
class "change to Recurring Transaction class name" extends "change to class name" {
    constructor("change to description property", "change to amount property", "change to type property", "change to category property", "change to frequency property") {
        super("change to description property", "change to amount property", "change to type property", "change to category property");  // call constructor
        this."change to frequency property" = "change to frequency property";  // "monthly", "weekly", etc.
    }

    // Override format() using super.format()
    "change to format method"() {
        return super."change to format method"() + ` (${this."change to frequency property"})`;
    }
}

// Tests:
const salary  = new RecurringTransaction("Salary",  8000, "income",  "Salary",        "monthly");
const netflix = new RecurringTransaction("Netflix",  45,   "expense", "Entertainment", "monthly");
console.log(salary.format());              // +8,000 QAR (monthly)
console.log(netflix.format());             // -45 QAR (monthly)
console.log("Is expense?", netflix.isExpense()); // true (inherited)
```

### Exercise 3: instanceof Type Checking

```javascript
// TODO: Create instances and test with instanceof
const salary  = new RecurringTransaction("Salary", 8000, "income", "Salary", "monthly");
const savings = new SavingsAccount("Emergency Fund", 20000, 0.04);
const regular = new Transaction("Lunch", 45, "expense", "Food");

// instanceof goes UP the chain
console.log(salary instanceof Transaction);            // true
console.log(salary instanceof RecurringTransaction);   // true
console.log(savings instanceof Account);               // true
console.log(savings instanceof SavingsAccount);        // true
// A plain Transaction is NOT a RecurringTransaction
console.log(regular instanceof RecurringTransaction);  // false
```

### Inheritance Rules (summary from Lab 6)

| Rule | Detail |
|---|---|
| `super()` MUST be first | Before any `this.` in child constructor — JS throws if you forget |
| All parent methods inherited | No need to redefine unless overriding |
| Override by redefining | Write method again in child; call parent with `super.method()` |
| `instanceof` checks the chain | Child instance is `instanceof` BOTH child and parent |

---

## 9. Unit Testing: Mocha & Chai

> **Source:** Lab 6 Module 3 — `test/transaction.spec.js` (starter) + `Tutorial/B01/module3/test/transaction.spec.js` (solved)

### Setup (run once in module3 folder)

```bash
cd "Startup Code/Part A/module3"
npm init -y
npm install --save-dev mocha chai
```

Edit `package.json` — add these two lines:

```json
{
  "type": "module",
  "scripts": {
    "test": "mocha"
  }
}
```

Run tests: `npm test`

### Import / Export for Tests

```javascript
// In "change to file name".js — export your classes
export { "change to class name", "change to Account class name", "change to Savings Account class name" };

// In "change to test file name".spec.js — import them
import { expect } from "chai";
import { "change to class name", "change to Account class name", "change to Savings Account class name" } from "../js/path_to_file.js";
// ALWAYS include .js extension in ESM imports
```

### Exercise 1: Testing Transaction (solved — Tutorial B01)

```javascript
describe("change to test suite name", () => {

    // TODO: Test that constructor sets properties
    it("change to test description", () => {
        const "change to instance variable" = new "change to class name"("change to description value", 8000, "income", "Salary");
        expect("change to instance variable"."change to description property").to.equal("change to description value");
        expect("change to instance variable"."change to amount property").to.equal(8000);
        expect("change to instance variable"."change to type property").to.equal("income");
        expect("change to instance variable"."change to category property").to.equal("Salary");
    });

    // TODO: Test format() for income
    it("change to test description", () => {
        const "change to instance variable" = new "change to class name"("Salary", 8000, "income", "Salary");
        expect("change to instance variable"."change to format method"()).to.equal("+8,000 QAR");
    });

    // TODO: Test format() for expense
    it("change to test description", () => {
        const "change to instance variable" = new "change to class name"("Rent", 3500, "expense", "Housing");
        expect("change to instance variable"."change to format method"()).to.equal("-3,500 QAR");
    });

    // TODO: Test checks
    it("change to test description", () => {
        const "change to income instance"  = new "change to class name"("Salary", 8000, "income",  "Salary");
        const "change to expense instance" = new "change to class name"("Rent",   3500, "expense", "Housing");
        expect("change to income instance"."change to isIncome check method"()).to.equal(true);
        expect("change to income instance"."change to isExpense check method"()).to.equal(false);
        expect("change to expense instance"."change to isExpense check method"()).to.equal(true);
    });
});
```

### Exercise 2: Testing Account (solved)

```javascript
describe("change to test suite name", () => {

    // TODO: Test deposit
    it("change to test description", () => {
        const "change to instance variable" = new "change to Account class name"("Test", "checking", 1000);
        "change to instance variable"."change to deposit method"(500);
        expect("change to instance variable"."change to balance property").to.equal(1500);
    });

    // TODO: Test successful withdraw
    it("change to test description", () => {
        const "change to instance variable" = new "change to Account class name"("Test", "checking", 1000);
        "change to instance variable"."change to withdraw method"(300);
        expect("change to instance variable"."change to balance property").to.equal(700);
    });

    // TODO: Test insufficient funds
    it("change to test description", () => {
        const "change to instance variable" = new "change to Account class name"("Test", "checking", 1000);
        const "change to result variable" = "change to instance variable"."change to withdraw method"(5000);
        expect("change to result variable").to.equal(false);
        expect("change to instance variable"."change to balance property").to.equal(1000);  // unchanged
    });

    // TODO: Test getBalance formatting
    it("change to test description", () => {
        const "change to instance variable" = new "change to Account class name"("Test", "checking", 15000);
        expect("change to instance variable"."change to getBalance method"()).to.equal("15,000 QAR");
    });
});
```

### Exercise 3: Testing SavingsAccount (solved)

```javascript
describe("change to test suite name", () => {

    // TODO: Test that type is "savings"
    it("change to test description", () => {
        const "change to instance variable" = new "change to Savings Account class name"("Fund", 10000, 0.05);
        expect("change to instance variable"."change to type property").to.equal("savings");
    });

    // TODO: Test inherited deposit
    it("change to test description", () => {
        const "change to instance variable" = new "change to Savings Account class name"("Fund", 10000, 0.05);
        "change to instance variable"."change to deposit method"(5000);
        expect("change to instance variable"."change to balance property").to.equal(15000);
    });

    // TODO: Test applyProfit
    it("change to test description", () => {
        const "change to instance variable" = new "change to Savings Account class name"("Fund", 10000, 0.05);
        const "change to profit variable" = "change to instance variable"."change to apply profit method"();  // returns profit amount
        expect("change to profit variable").to.equal(500);
        expect("change to instance variable"."change to balance property").to.equal(10500);
    });
});
```

### Expected Output (all passing)

```
  Transaction
    ✓ should set all properties from constructor
    ✓ should format income with + sign
    ✓ should format expense with - sign
    ✓ should correctly identify transaction type

  Account
    ✓ should increase balance after deposit
    ✓ should decrease balance after withdraw
    ✓ should return false when withdrawing more than balance
    ✓ should return formatted balance string

  SavingsAccount
    ✓ should have type set to savings
    ✓ should inherit deposit from Account
    ✓ should calculate and add profit correctly

  11 passing
```

### Chai Assertion Cheat Sheet

```javascript
// Primitives — use .to.equal()
expect(value).to.equal(42);
expect(str).to.equal("hello");
expect(bool).to.equal(true);
expect(bool).to.equal(false);

// Objects/Arrays — use .to.deep.equal() (checks structure, not reference)
expect(obj).to.deep.equal({ name: "Ali", age: 22 });
expect(arr).to.deep.equal([1, 2, 3]);

// Numbers
expect(num).to.be.above(10);    // > 10
expect(num).to.be.below(100);   // < 100

// Strings
expect(str).to.include("hello");

// Arrays
expect(arr).to.have.length(3);
```

---

## 10. DOM + Events + LocalStorage

> **Source:** Lab 6 Module 4 — `module4/js/practice.js` + `Tutorial/B01/module4/js/practice.js`

### Exercise 1: Render Class Instances to DOM Table (solved — Tutorial B01)

```javascript
const "change to array name" = [
    new Transaction("Salary",      12000, "income",  "Salary"),
    new Transaction("Freelance",    3000, "income",  "Salary"),
    new Transaction("Rent",         4500, "expense", "Housing"),
    new Transaction("Groceries",     850, "expense", "Food"),
    new Transaction("Electricity",   320, "expense", "Utilities"),
];

// Helper: one item → one table row
function "change to row helper function name"(item) {
    return `
        <tr>
            <td>${item."change to description property"}</td>
            <td>${item."change to category property"}</td>
            <td class="${item.isIncome() ? "text-success" : "text-danger"}">${item.format()}</td>
        </tr>
    `;
}

// TODO: Render "change to array name" into table
const tableElement = document.querySelector("#change to table body ID");
tableElement.innerHTML = "change to array name".map(item => "change to row helper function name"(item)).join("");
```

### Exercise 2: Form Events + Dynamic Rendering

```javascript
// TODO: Create "change to live data array name" array
const "change to live data array name" = [];

// TODO: Write "change to update dashboard function name"()
function "change to update dashboard function name"() {
    const income   = "change to live data array name".filter(t => t."change to isIncome check method"()).reduce((s, t) => s + t."change to amount property", 0);
    const expenses = "change to live data array name".filter(t => t."change to isExpense check method"()).reduce((s, t) => s + t."change to amount property", 0);
    const balance  = income - expenses;

    document.getElementById("change to income display ID").textContent  = income.toLocaleString()   + " QAR";
    document.getElementById("change to expense display ID").textContent = expenses.toLocaleString() + " QAR";

    const balanceEl = document.getElementById("change to balance display ID");
    balanceEl.textContent = balance.toLocaleString() + " QAR";
    balanceEl.className   = balance >= 0 ? "text-success" : "text-danger";
}

// TODO: Write "change to render function name"()
function "change to render function name"() {
    document.getElementById("change to list container ID").innerHTML =
        "change to live data array name".map(t => "change to row helper function name"(t)).join("");
}

// TODO: Add submit listener on "change to form ID"
document.getElementById("change to form ID").addEventListener("submit", (e) => {
    e.preventDefault();
    const "change to temp description variable" = document.getElementById("change to description input ID").value;
    const "change to temp amount variable"      = Number(document.getElementById("change to amount input ID").value);
    const "change to temp type variable"        = document.getElementById("change to type select ID").value;

    "change to live data array name".push(new "change to class name"("change to temp description variable", "change to temp amount variable", "change to temp type variable", "General"));
    "change to update dashboard function name"();
    "change to render function name"();
    e.target.reset();
});
```

### Exercise 3: localStorage Persistence

```javascript
const "change to storage key variable" = "change to storage key value";

// TODO: Load from localStorage on startup
const saved = localStorage.getItem("change to storage key variable");
let "change to array name" = saved ? JSON.parse(saved) : [];
"change to update dashboard function name"();
"change to render function name"();

// TODO: Save to localStorage after each add
localStorage.setItem("change to storage key variable", JSON.stringify("change to array name"));

// TODO: Add clear button listener
document.getElementById("change to clear button ID").addEventListener("click", () => {
    localStorage.removeItem("change to storage key variable");
    "change to array name" = [];
    "change to update dashboard function name"();
    "change to render function name"();
});

// TODO: Add count button listener
document.getElementById("change to count button ID").addEventListener("click", () => {
    document.getElementById("change to count display ID").textContent =
        `${"change to array name"}.length items saved`;
});
```

### localStorage API — Complete Reference

```javascript
// Save (MUST stringify — localStorage only stores strings)
localStorage.setItem("myKey", JSON.stringify(dataArray));

// Load (MUST parse — with fallback to empty array)
const raw  = localStorage.getItem("myKey");
const data = raw ? JSON.parse(raw) : [];

// Alternative one-liner fallback
const data = JSON.parse(localStorage.getItem("myKey") || "[]");

// Remove one key
localStorage.removeItem("myKey");

// Remove ALL keys
localStorage.clear();
```

**Critical rules:**
- `localStorage` only stores **strings** — always `JSON.stringify` when saving
- Class instances lose their methods when stored/loaded — they come back as plain objects
- Data survives page refreshes and browser restarts

---

## 11. JSON & Data Transformation

> **Source:** Lab 7 Module 1 — `module1/js/practice.js` + Tutorial B01 (solved)

### Exercise 1: JSON.stringify and JSON.parse

```javascript
const transaction = { description: "Salary", amount: 12000, type: "income", category: "Salary" };

// Object → JSON string (to SEND to server / SAVE to localStorage)
const jsonString = JSON.stringify(transaction);
// '{"description":"Salary","amount":12000,"type":"income","category":"Salary"}'
console.log(typeof jsonString);  // "string"

// JSON string → Object (after RECEIVING from server / LOADING from localStorage)
const parsed = JSON.parse(jsonString);
console.log(parsed.description);  // "Salary"
console.log(typeof parsed);       // "object"

// Pretty-print with indentation (for debugging)
console.log(JSON.stringify(transaction, null, 2));
```

### Exercise 2a: Extract just descriptions

```javascript
// TODO: a) Extract just the descriptions into a new array and log it
const descriptions = transactions.map(t => t.description);
// ["Salary", "Freelance", "Rent", "Groceries", ...]
console.log(descriptions);
```

### Exercise 2b: Total all expenses

```javascript
// TODO: b) Calculate the total amount of all expenses and log it
const total = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);
console.log(`Total expense is ${total}`);
```

### Exercise 2c: Formatted strings

```javascript
// TODO: c) "Salary: +8,000 QAR" format — Tutorial B01 solution
const formatted = transactions.map(t => {
    const sign = t.type === "income" ? "+" : "-";
    return `${t.description}: ${sign}${t.amount.toLocaleString()} QAR`;
});
console.log(formatted);
```

### Exercise 2d: Find largest expense

```javascript
// TODO: d) Find which single expense has the highest amount
const largestExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((max, t) => t.amount > max.amount ? t : max);
console.log(largestExpense.description, largestExpense.amount);
```

### Exercise 3: Group by category

```javascript
// TODO: Group by category using reduce
const byCategory = transactions.reduce((groups, t) => {
    groups[t.category] = (groups[t.category] || 0) + t.amount;
    return groups;
}, {});

// TODO: Log each category with Object.entries().forEach()
Object.entries(byCategory).forEach(([category, total]) => {
    console.log(`${category}: ${total.toLocaleString()} QAR`);
});
```

### Destructuring (from Tutorial B01 instructor notes)

```javascript
// Array destructuring
const [a, b, ...rest] = [1, 2, 3, 4, 6, 7];
// a=1, b=2, rest=[3,4,6,7]

// Object destructuring
const { gender } = person;  // pull out only what you need

// Used in Object.entries loop
Object.entries(byCategory).forEach(([category, total]) => { ... });

// Used in Promise.all
const [users, products, settings] = await Promise.all([...]);
```

---

## 12. Async / Await & Promises

> **Source:** Lab 7 Module 2 — `module2/js/practice.js` + Tutorial B01

### Why Async? (from Lab 7 explanation)

JavaScript is single-threaded — it can only do one thing at a time. If fetching data from a server took 3 seconds and JS just waited, your entire page would freeze. `async/await` lets JS say "start this, and when it's done run this code." The rest of the page keeps working while waiting.

### Provided Helper Functions (given in lab — do not rewrite)

```javascript
function loadTransactions(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve([
                    { description: "Salary", amount: 8000, type: "income" },
                    { description: "Rent",   amount: 4000, type: "expense" },
                    { description: "Food",   amount: 650,  type: "expense" },
                ]);
            } else {
                reject(new Error("Failed to load data"));
            }
        }, 1000);
    });
}

function simulateApiCall(name, ms) {
    return new Promise(resolve => setTimeout(() => resolve(name), ms));
}
```

### Exercise 1: Basic async/await

```javascript
// TODO: Write async function "change to async function name"()
async function "change to async function name"() {
    console.log("Loading...");
    const "change to data variable" = await "change to promise helper function"(true);  // pauses here
    "change to data variable".forEach(t => {
        console.log(`  ${t."change to description property"}: ${t."change to amount property".toLocaleString()} QAR`);
    });
    console.log(`Done! Loaded ${"change to data variable".length} items`);
}

// TODO: Call "change to async function name"()
"change to async function name"();  // starts the async work; doesn't block what's below
console.log("This prints IMMEDIATELY — not blocked");
```

### Exercise 2: Error Handling with try/catch

```javascript
// TODO: Write async function loadWithErrorHandling()
async function loadWithErrorHandling() {
    try {
        const data = await loadTransactions(false);  // WILL reject/fail
        console.log(data);  // never reached
    } catch (error) {
        console.log("Error caught:", error.message);  // "Error caught: Failed to load data"
    }
}

// TODO: Call loadWithErrorHandling()
loadWithErrorHandling();
```

### Exercise 3: Sequential vs Parallel (Promise.all)

```javascript
// TODO: Write async function runSequential()
async function runSequential() {
    console.time("Sequential");
    const accounts     = await simulateApiCall("accounts",     1000);  // wait 1s
    const transactions = await simulateApiCall("transactions", 1000);  // then 1s
    const goals        = await simulateApiCall("goals",        1000);  // then 1s
    console.log(accounts, transactions, goals);
    console.timeEnd("Sequential");  // ~3000ms total
}

// TODO: Write async function runParallel()
async function runParallel() {
    console.time("Parallel");
    const [accounts, transactions, goals] = await Promise.all([
        simulateApiCall("accounts",     1000),  // all 3 start at once
        simulateApiCall("transactions", 1000),
        simulateApiCall("goals",        1000),
    ]);
    console.log(accounts, transactions, goals);
    console.timeEnd("Parallel");  // ~1000ms total
}

// TODO: Call both — wrap in async so sequential finishes before parallel starts
(async () => {
    await runSequential();
    await runParallel();
})();
```

### Promise States (from Lab 7 notes)

| State | Meaning |
|---|---|
| Pending | Still working on it |
| Fulfilled | Done, here's the result |
| Rejected | Failed, here's the error |

---

## 13. Fetch API — GET & Display

> **Source:** Lab 7 Module 3 — `module3/js/practice.js` + Tutorial B01 (solved)

**IMPORTANT:** `fetch()` only works over HTTP, not `file://`. Always use **Live Server** (right-click `index.html` → Open with Live Server).

**API URL:** `https://myfinance-api-bay.vercel.app/transactions`

### Two-Step Fetch Pattern (memorize this)

```javascript
// fetch() → Promise for the response object
// response.json() → Promise for the parsed body
// You ALWAYS need two awaits:
const response = await fetch(API_URL);
const formattedText     = await response.json();
// data is now a JS array/object ready to use
```

### Exercise 1: Fetch and Display — solved (Tutorial B01)

```javascript
const "change to API URL constant" = "change to API endpoint URL";

// Select elements
const "change to load button variable"    = document.getElementById("change to load button ID");
const "change to status text variable"    = document.getElementById("change to status text ID");
const "change to table body variable"     = document.getElementById("change to table body ID");

"change to load button variable".addEventListener("click", "change to load function name");

async function "change to load function name"() {
    "change to status text variable".textContent = "Loading...";

    try {
        const response     = await fetch("change to API URL constant");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);  // always check .ok!
        "change to array name" = await response.json();

        "change to table body variable".innerHTML = "change to array name"
            .map(t => "change to row helper function name"(t))
            .join("");

        "change to status text variable".textContent = `Loaded ${"change to array name"}.length items`;
    } catch (err) {
        "change to status text variable".textContent = `Error: ${err.message}`;
    }
}

function transToHTMLRow(t) {
    const amountClass = t.type === "expense" ? "text-danger" : "text-success";
    return `
        <tr>
            <td>${t.description}</td>
            <td>${t.category}</td>
            <td>${t.type}</td>
            <td class="${amountClass}">${t.amount.toLocaleString()} QAR</td>
            <td>
                <button onclick="startEdit(${t.id})" class="btn btn-sm btn-primary">Edit</button>
                <button onclick="deleteTransaction(${t.id})" class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    `;
}
```

### Exercise 2: Fetch, Transform, and Summarize — solved (Tutorial B01)

```javascript
const summaryBtn   = document.getElementById("summary-btn");
const summaryCards = document.getElementById("summary-container");

summaryBtn.addEventListener("click", displaySummaryCards);

async function displaySummaryCards() {
    try {
        const response     = await fetch(API_URL);
        transactions = await response.json();

        const income = transactions
            .filter(t => t.type === "income")
            .reduce((total, t) => total + t.amount, 0);

        const expenses = transactions
            .filter(t => t.type === "expense")
            .reduce((total, t) => total + t.amount, 0);

        const balance = income - expenses;

        summaryCards.innerHTML = `
            <div class="card card--success">
                <h3>Total Income</h3>
                <p class="amount">${income.toLocaleString()} QAR</p>
            </div>
            <div class="card card--danger">
                <h3>Total Expenses</h3>
                <p class="amount">${expenses.toLocaleString()} QAR</p>
            </div>
            <div class="card ${balance >= 0 ? 'card--success' : 'card--danger'}">
                <h3>Balance</h3>
                <p class="amount">${balance.toLocaleString()} QAR</p>
            </div>
        `;
    } catch (err) {
        console.error("Summary load error:", err);
    }
}
```

### Why check response.ok?

```javascript
// A 404 does NOT throw an exception — the fetch "succeeded" (server responded)
// but the resource doesn't exist. You MUST check manually:
if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
```

---

## 14. CRUD Operations — POST, PUT, DELETE

> **Source:** Lab 7 Module 4 — `module4/js/practice.js` + Tutorial B01 (solved)

### HTTP Methods Reference (from Lab 7)

| Method | Purpose | URL | Body? |
|---|---|---|---|
| GET | Read all | `/transactions` | No |
| GET | Read one | `/transactions/3` | No |
| POST | Create new | `/transactions` | Yes — JSON |
| PUT | Update existing | `/transactions/3` | Yes — JSON |
| DELETE | Remove | `/transactions/3` | No |

### Exercise 1: POST — Create (Tutorial B01 solved)

```javascript
const addForm   = document.getElementById("transaction-form");
const addStatus = document.getElementById("status-text");

addForm.addEventListener("submit", addTransaction);

async function addTransaction(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.amount = parseFloat(data.amount);

    try {
        const response = await fetch(API_URL, {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(data)
        });
        const created = await response.json();  // server returns new item with assigned id

        addStatus.textContent = `Created: ${created.description} (ID: ${created.id})`;
        loadTransactions(); // Reload data to show new item
        e.target.reset();
    } catch (err) {
        console.error("Add error:", err);
    }
}
```

### Exercise 2: PUT — Update (Tutorial B01 solved)

```javascript
// TODO: Write startEdit(id)
async function startEdit(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const t        = await response.json();

        // Populate edit form fields
        document.querySelector("#edit-id").value       = t.id;
        document.querySelector("#edit-desc").value     = t.description;
        document.querySelector("#edit-amount").value   = t.amount;
        document.querySelector("#edit-type").value     = t.type;
        document.querySelector("#edit-category").value = t.category;

        document.getElementById("edit-hint").style.display       = "none";
        document.getElementById("cancel-edit-btn").style.display = "block";
        document.getElementById("edit-status").textContent =
            `Editing transaction ${id}: ${t.description}`;
    } catch (err) { console.log(err); }
}

// Edit form submit — PUT request
document.getElementById("change to edit form ID").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = document.getElementById("change to edit id input ID").value;
    if (!id) {
        document.getElementById("change to edit status ID").textContent = "Click Edit on a row first";
        return;
    }

    const formData    = new FormData(e.target);
    const "change to item variable" = Object.fromEntries(formData.entries());
    "change to item variable"."change to amount property" = parseFloat("change to item variable"."change to amount property");

    try {
        const response = await fetch(`${"change to API URL constant"}/${id}`, {
            method:  "PUT",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify("change to item variable")
        });
        if (!response.ok) throw new Error(`Failed to update item ${id}`);

        document.getElementById("change to edit status ID").textContent = `Updated item ${id}`;
        "change to cancel edit function name"();
        "change to load function name"();
    } catch (err) { console.error("Update failed:", err.message); }
});
```

### Exercise 3: DELETE — Remove (Tutorial B01 solved)

```javascript
// TODO: Write "change to delete function name"(id)
async function "change to delete function name"(id) {
    if (!confirm("Are you sure?")) return;

    try {
        await fetch(`${"change to API URL constant"}/${id}`, { method: "DELETE" });
        document.getElementById("change to status text ID").textContent = `Deleted item ${id}`;
        "change to load function name"();
    } catch (err) { console.error("Delete failed:", err.message); }
}
```

---

## 15. Full CRUD App Architecture (Practice patterns)

> **Source:** Lab 7 Part B — `Part B/js/app.js` + Practice Session `js/app.js`

### Q2: loadTransactions — Fetch from API (GET)

```javascript
const "change to API URL constant" = "https://your-api.vercel.app/transactions";
let "change to array name" = [];

// TODO: Write async function "change to load items function name"()
async function "change to load items function name"() {
    try {
        const response = await fetch("change to API URL constant");
        const "change to data variable" = await response.json();

        // 1. Store in global array
        "change to array name" = "change to data variable";

        // 2. Call refresh function (which calls summary + render)
        "change to refresh function name"();

        // 3. Update status (optional)
        document.getElementById("change to status text ID").textContent = "Loaded!";
    } catch (err) {
        console.error("Load failed:", err);
    }
}
```

### Q3: updateSummary — Calculate totals (filter + reduce)

```javascript
// TODO: Write function "change to update summary function name"()
function "change to update summary function name"() {
    const totalIncome = "change to array name"
        .filter(t => t."change to type property" === "income")
        .reduce((total, t) => total + t."change to amount property", 0);

    const totalExpenses = "change to array name"
        .filter(t => t."change to type property" === "expense")
        .reduce((total, t) => total + t."change to amount property", 0);

    const balance = totalIncome - totalExpenses;

    // Update displays
    document.getElementById("change to total income element ID").textContent   = totalIncome.toLocaleString()   + " change to currency unit";
    document.getElementById("change to total expenses element ID").textContent = totalExpenses.toLocaleString() + " change to currency unit";
    document.getElementById("change to total balance element ID").textContent  = balance.toLocaleString()       + " change to currency unit";

    // Color balance sign
    const balanceEl = document.getElementById("change to total balance element ID");
    balanceEl.classList.remove("text-success", "text-danger");
    balanceEl.classList.add(balance >= 0 ? "text-success" : "text-danger");
}
```

### Q4: renderTransactions — Render rows (map + join)

```javascript
// TODO: Write function "change to render items function name"()
function "change to render items function name"() {
    // ALWAYS call the filter function first if your exam has Q8 search/filter
    const filtered = "change to get filtered items function name"();
    const tableBody = document.getElementById("change to table body ID");

    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" class="empty-state">No items found</td></tr>`;
        return;
    }

    tableBody.innerHTML = filtered.map(t => `
        <tr>
            <td>${t."change to description property"}</td>
            <td>${t."change to category property"}</td>
            <td>${t."change to type property"}</td>
            <td class="${t."change to type property" === 'income' ? 'text-success' : 'text-danger'}">
                ${t."change to type property" === 'income' ? '+' : '-'}${t."change to amount property".toLocaleString()} "change to currency unit"
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="change to start edit function name(${t."change to id property"})">Edit</button>
                <button class="btn btn-sm btn-danger"  onclick="change to delete item function name(${t."change to id property"})">Delete</button>
            </td>
        </tr>
    `).join("");
}
```

### Q5: addTransaction — POST fetch

```javascript
// TODO: Write async function "change to add item function name"(data)
async function "change to add item function name"(data) {
    try {
        const response = await fetch("change to API URL constant", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const created = await response.json();

        // 1. Add to local array
        "change to array name".push(created);

        // 2. Refresh page summary/table
        "change to refresh function name"();
    } catch (error) { console.error("Add error:", error); }
}
```

### Q6: updateTransaction — PUT fetch

```javascript
// TODO: Write async function "change to update item function name"(id, data)
async function "change to update item function name"(id, data) {
    try {
        const response = await fetch(`${"change to API URL constant"}/${id}`, {
            method:  "PUT",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(data)
        });
        const updated = await response.json();

        // Replace in local array (findIndex then swap)
        const index = "change to array name".findIndex(t => t."change to id property" === id);
        "change to array name"[index] = updated;

        "change to refresh function name"();
    } catch (error) { console.error("Update error:", error); }
}
```

### Q7: deleteTransaction — DELETE fetch

```javascript
// TODO: Write async function "change to delete item function name"(id)
async function "change to delete item function name"(id) {
    if (!confirm("Are you sure?")) return;
    try {
        await fetch(`${"change to API URL constant"}/${id}`, { method: "DELETE" });

        // Remove from local array
        "change to array name" = "change to array name".filter(t => t."change to id property" !== id);

        "change to refresh function name"();
    } catch (error) { console.error("Delete error:", error); }
}
```

### refreshAll() — Provided helper

```javascript
// Call this after any local data change (add, update, delete, load)
function "change to refresh function name"() {
    "change to update summary function name"();
    "change to render items function name"();
}
```

### Q8: getFilteredTransactions — Search & Dropdown filter

```javascript
// TODO: Write function "change to get filtered items function name"()
function "change to get filtered items function name"() {
    const searchTerm = document.getElementById("change to search input ID").value.toLowerCase();
    const filterType = document.getElementById("change to filter element ID").value;  // "all", "income", "expense"

    return "change to array name".filter(t => {
        // Description search — case-insensitive partial match
        const matchesSearch = t."change to description property".toLowerCase().includes(searchTerm);

        // Type filter — "all" means no type restriction
        const matchesType = filterType === "all" || t."change to type property" === filterType;

        // BOTH conditions must be true
        return matchesSearch && matchesType;
    });
}
```

### Q9: startEdit & cancelEdit — Edit Mode toggle

```javascript
let "change to editing ID variable" = null;  // null = add, ID = edit

async function "change to start edit function name"(id) {
    const item = "change to array name".find(i => i."change to id property" === id);
    if (!item) return;

    "change to editing ID variable" = id;

    // Populate form inputs
    document.getElementById("change to description input ID").value = item."change to description property";
    document.getElementById("change to amount input ID").value      = item."change to amount property";
    document.getElementById("change to type select ID").value       = item."change to type property";
    document.getElementById("change to category select ID").value   = item."change to category property";

    // Update UI text (optional)
    document.getElementById("change to submit button ID").textContent = "Update Item";
    const cancelBtn = document.getElementById("change to cancel button ID");
    if (cancelBtn) cancelBtn.classList.remove("hidden");
}

function "change to cancel edit function name"() {
    "change to editing ID variable" = null;
    document.getElementById("change to form ID").reset();

    // Reset UI text
    document.getElementById("change to submit button ID").textContent = "Add Item";
    const cancelBtn = document.getElementById("change to cancel button ID");
    if (cancelBtn) cancelBtn.classList.add("hidden");
}

/* Handle Form Submit (Add or Update Branch) */
document.getElementById("change to form ID").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.amount = Number(data.amount); // VERY IMPORTANT

    if ("change to editing ID variable") {
        await "change to update item function name"("change to editing ID variable", data);
        "change to cancel edit function name"();
    } else {
        await "change to add item function name"(data);
        e.target.reset();
    }
});
```

### Initialization

```javascript
// Start the app when page opens
"change to load items function name"();
```

---

## 16. SPA Navigation — loadPage() Pattern

> **Source:** Assignment 2 — `recipevault/js/app.js` TODO 5

### How SPA Navigation Works

Instead of linking to different HTML files (which reloads the page), a Single Page App fetches HTML *fragments* and injects them into a `<main>` container.

```javascript
// TODO 5: "change to load page function name"(page)
async function "change to load page function name"(page) {
    // 1. Fetch the HTML fragment
    const response = await fetch(`"change to pages directory name"/${page}.html`);
    const content  = await response.text();

    // 2. Inject into main container
    document.querySelector("#change to main container ID").innerHTML = content;

    // 3. Update active nav link
    document.querySelectorAll(".change to nav link class").forEach(link => {
        link.classList.remove("active");
    });
    const selector = `.change to nav link class[onclick*="'${page}'"]`;
    document.querySelector(selector)?.classList.add("active");

    // 4. Wire up page-specific handlers AFTER injection
    if (page === "change to page name A") {
        "change to load items function name A"();
    }
    if (page === "change to page name B") {
        const form = document.querySelector("change to form selector");
        if (form) form.addEventListener("submit", "change to handle form submit function name");
    }
}
```

### DOMContentLoaded — Initialize on Page Load (TODO 13)

```javascript
// TODO 13: Add a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    loadPage("home");  // show default page on first load
});
```

### HTML — Navigation links using onclick

```html
<nav>
    <a class="nav-link active" href="#" onclick="loadPage('home')">Home</a>
    <a class="nav-link"        href="#" onclick="loadPage('recipes')">Recipes</a>
</nav>

<main id="main-content">
    <!-- loadPage() injects content here -->
</main>
```

---

## 17. FormData Pattern

> **Source:** Assignment 2 — `recipevault/js/app.js` TODO 9

### Why FormData?

Instead of reading each input one by one, `FormData` collects ALL named inputs from a form at once.

```javascript
// TODO 4: "change to extract data function name"(formElement)
function "change to extract data function name"(form) {
    // 1. Create FormData object from form element
    const formData = new FormData(form);

    // 2. Convert to plain JS object
    const data = {
        "change to property name A": formData.get("change to input name A"),
        "change to property name B": Number(formData.get("change to input name B")),
        "change to property name C": formData.get("change to input name C"),
        "change to property name D": formData.get("change to input name D")
    };

    return data;
}

// TODO 5: "change to handle form submit function name"(e)
async function "change to handle form submit function name"(e) {
    e.preventDefault();
    const data = "change to extract data function name"(e.target);

    if ("change to editing ID variable") {
        await "change to update item function name"("change to editing ID variable", data);
        "change to cancel edit function name"();
    } else {
        await "change to add item function name"(data);
    }
}
```

// When inputs don't have name attributes, or for Lab 7 style
const "change to description variable" = document.getElementById("change to description input ID").value;
const "change to amount variable"      = Number(document.getElementById("change to amount input ID").value);
const "change to type variable"        = document.getElementById("change to type select ID").value;
const "change to category variable"    = document.getElementById("change to category select ID").value;

const "change to data variable" = { 
    "change to description property": "change to description variable", 
    "change to amount property": "change to amount variable", 
    "change to type property": "change to type variable", 
    "change to category property": "change to category variable" 
};

### FormData requires `name` attributes on inputs

```html
<!-- FormData picks up ONLY inputs with a name="" attribute -->
<input type="text"   name="change to description property" id="change to description input ID">
<input type="number" name="change to amount property"      id="change to amount input ID">
<select              name="change to type property"        id="change to type select ID">
    <option value="income">Income</option>
    <option value="expense">Expense</option>
</select>
```

---

## 18. Template Literal HTML Cards

> **Source:** Assignment 2 TODO 6 (`recipeToHTMLCard`) + Lab 7 Module 4 (`loadTransactions`)

### Item Card Template (Assignment 2 style)

```javascript
// TODO 6: itemToHTMLCard(item)
// TODO 6: "change to item to card function name"(item)
function "change to item to card function name"(item) {
    return `
        <div class="card">
            <div class="card-body">
                <h3>${item."change to description property"}</h3>
                <p>Category: ${item."change to category property"}</p>
                <div class="meta">
                    <span class="${item."change to type property" === 'income' ? 'text-success' : 'text-danger'}">
                        ${item."change to type property" === 'income' ? '+' : '-'}${item."change to amount property".toLocaleString()} "change to currency unit"
                    </span>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn btn-primary btn-sm" onclick="change to start edit function name(${item."change to id property"})">Edit</button>
                <button class="btn btn-danger btn-sm"  onclick="change to delete item function name(${item."change to id property"})">Delete</button>
            </div>
        </div>
    `;
}

// TODO 7: "change to render items function name"()
function "change to render items function name"() {
    const grid = document.getElementById("change to item grid ID");
    if (!grid) return;

    if ("change to array name".length === 0) {
        grid.innerHTML = "<p class='empty-state'>No items found</p>";
        return;
    }

    grid.innerHTML = "change to array name".map(item => "change to item to card function name"(item)).join("");
}
```

---

## 19. Search & Filter

> **Source:** Lab 7 Part B Task 7 / Practice Session Q8

### getFilteredTransactions() — description search + type dropdown

```javascript
// TODO: Write function "change to get filtered items function name"()
function "change to get filtered items function name"() {
    const searchTerm = document.getElementById("change to search input ID").value.toLowerCase();
    const filterType = document.getElementById("change to filter element ID").value;

    return "change to array name".filter(t => {
        // Description search — case-insensitive partial match
        const matchesSearch = t."change to description property".toLowerCase().includes(searchTerm);

        // Type filter — "all" means no type restriction
        const matchesType = filterType === "all" || t."change to type property" === filterType;

        // BOTH conditions must be true
        return matchesSearch && matchesType;
    });
}

// TODO: Add event listeners for search and filter
const searchInput = document.getElementById("change to search input ID");
if (searchInput) searchInput.addEventListener("input", "change to render items function name");

const filterSelect = document.getElementById("change to filter element ID");
if (filterSelect) filterSelect.addEventListener("change", "change to render items function name");
```

---

## 20. Edit Mode: startEdit / cancelEdit

> **Source:** Lab 7 Part B Task 8 / Practice Session Q9 / Assignment 2 TODOs 10–11

```javascript
let "change to editing ID variable" = null;  // null = add mode, any id value = edit mode

// TODO 10: "change to start edit function name"(id)
async function "change to start edit function name"(id) {
    const item = "change to array name".find(i => i."change to id property" === id);
    if (!item) return;

    "change to editing ID variable" = id;

    // Populate form fields
    document.getElementById("change to description input ID").value     = item."change to description property";
    document.getElementById("change to amount input ID").value   = item."change to amount property";
    document.getElementById("change to type select ID").value    = item."change to type property";
    document.getElementById("change to category select ID").value = item."change to category property";

    // Update UI for edit mode
    document.getElementById("change to submit button ID").textContent = "Update Item";
    const cancelBtn = document.getElementById("change to cancel button ID");
    if (cancelBtn) cancelBtn.classList.remove("hidden");
}

// TODO 11: "change to cancel edit function name"()
function "change to cancel edit function name"() {
    "change to editing ID variable" = null;
    document.getElementById("change to form ID").reset();
    // hide cancel button, restore text
}
```

---

## 21. CSS: Layouts, Grids & Responsive Design

### Dashboard Grid (Responsive auto-scaling)

```css
.dashboard-grid {
    display: grid;
    /* auto-fit makes columns fill available space */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}
```

### Flexbox Pattern (Centering & Nav)

```css
/* Center content vertically and horizontally */
.center-container {
    display: flex;
    justify-content: center; /* horizontal */
    align-items: center;     /* vertical */
    min-height: 200px;
}

/* Navbar layout */
.navbar {
    display: flex;
    justify-content: space-between; /* logo left, links right */
    align-items: center;
    padding: 10px 20px;
}
```

---

## 22. CSS: States, Colors & Utility Classes

### Text Color Utilities (income/expense)

```css
.text-success { color: "change to success color"; } /* Green for income */
.text-danger  { color: "change to danger color"; } /* Red for expense */
```

### Utility Classes

```css
.hidden { display: none !important; }

.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-primary { background: "change to primary color"; color: white; }
.btn-danger  { background: "change to danger color"; color: white; }
```

---

## 23. HTML: UI Components

### Dashboard Summary

```html
<div class="dashboard-grid">
    <div class="card">
        <h3>Total Balance</h3>
        <p id="change to balance element ID">0 QAR</p>
    </div>
    <div class="card">
        <h3>Income</h3>
        <p id="change to total income element ID" class="text-success">0 QAR</p>
    </div>
    <div class="card">
        <h3>Expenses</h3>
        <p id="change to total expenses element ID" class="text-danger">0 QAR</p>
    </div>
</div>
```

### Item Form

```html
<form id="change to form ID" class="card p-20">
    <div class="form-group">
        <label>Description</label>
        <input type="text" id="change to description input ID" name="description" required>
    </div>
    <div class="form-row">
        <div class="form-group">
            <label>Amount</label>
            <input type="number" id="change to amount input ID" name="amount" step="0.01" required>
        </div>
        <div class="form-group">
            <label>Type</label>
            <select id="change to type select ID" name="type">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>
    </div>
    <div class="form-actions mt-20">
        <button type="submit" id="change to submit button ID" class="btn btn-primary">Add Item</button>
        <button type="button" id="change to cancel button ID" class="btn hidden" onclick="cancelEdit()">Cancel</button>
    </div>
</form>
```

---

## 24. Validation & Guards

```javascript
/* Guard Clauses (Common in Lab 6-7) */
function deleteTransaction(id) {
    if (!id) return; // guard against null id
    if (!confirm("Are you sure?")) return; // guard against accidental click
    // ... delete logic
}

/* Guard Clauses (Common in Lab 6-7) */
function "change to delete item function name"(id) {
    if (!id) return; // guard against null id
    if (!confirm("Are you sure?")) return; // guard against accidental click
    // ... delete logic
}

/* Regex validation (Lab 5-7 patterns) */
const "change to email pattern variable" = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const "change to is valid email variable" = "change to email pattern variable".test("change to email string");
```

---

## 25. Common Mistakes & Bug Fixes Checklist

| # | Mistake | Fix |
|---|---|---|
| 1 | Missing `e.preventDefault()` | Page reloads on submit |
| 2 | Forgetting `Number()` on input | Adds `"100" + "100"` as `"100100"` |
| 3 | Misspelling `getElementById` | `getElementbyId` (lowercase 'd') will throw error |
| 4 | `JSON.parse` with no fallback | Use `JSON.parse(data || '[]')` |
| 5 | Forgetting `await` on `.json()` | It's a promise, needs its own await |
| 6 | PUT/POST missing headers | Add `headers: { "Content-Type": "application/json" }` |
| 7 | Body not stringified | Use `body: JSON.stringify(data)` |
| 8 | Case sensitivity in search | Use `.toLowerCase()` on both values |
| 9 | Deleting with index instead of ID | Use `items.filter(i => i.id !== id)` |
| 10| `classList.add` with a `.` | Use `add("hidden")`, NOT `add(".hidden")` |

---

## 26. Complete TODO Inventory

### Lab 5 Module 1

```
// 1a. Declare a constant called accountName → "Main Checking"
// 1b. Declare a variable (let) called balance → 15250
// 1c. Declare a constant called isActive → true
// 1d. Log all three to the console
// 2a. Create a transaction object with: description, amount, category, type
// 2b. Log the full object to the console
// 2c. Log just the description and amount individually using dot notation
// 3a. Using your transaction object, create a formatted string with template literals
// 3b. Create a multi-line receipt string that displays all properties
// 3c. Log both strings to the console
```

### Lab 5 Module 2

```
// 1a. Write a function formatCurrency(amount) → "15,250 QAR"
// 1b. Write a function calculateRemaining(income, expenses) → difference
// 1c. Test both: formatCurrency(15250) and calculateRemaining(12000, 8500)
// 2a. Rewrite formatCurrency as a one-line arrow function (formatCurrencyArrow)
// 2b. Write arrow function calcSavingsRate(income, expenses) → rate with 1 decimal
// 2c. Test: calcSavingsRate(12000, 8500) → "29.2"
// 3a. Write function calculateTotal(items) → sum of all items
// 3b. Use calculateTotal to get the total expenses and log it
// 3c. Calculate and log the remaining balance
// 3d. Calculate and log the savings rate
```

### Lab 5 Module 3

```
// 1a. .filter() for expense transactions. Log the count.
// 1b. .filter() for income transactions. Log the count.
// 1c. .map() to create array of just description strings. Log it.
// 1d. .map() to create formatted strings like "+12,000 QAR" or "-4,500 QAR". Log it.
// 2a. .filter() + .reduce() to calculate total income. Log it.
// 2b. .filter() + .reduce() to calculate total expenses. Log it.
// 2c. Calculate and log the balance.
// 3a. .filter() + .reduce() to group expenses by category. { Housing: 4500, Food: 1400, ... }
// 3b. Object.entries() + .map() to log each category with its total.
```

### Lab 5 Module 4

```
// Exercise 0: Add <script src="js/practice.js"></script> at bottom of <body>
// 1a. getElementById for: "balance-display", "income-display", "expenses-display"
// 1b. Log textContent of each
// 1c. querySelector for first ".card" → log its h3 text
// 1d. querySelectorAll for ".amount" → log how many
// 2a. Change balance display's textContent to "50,000"
// 2b. classList.add("text-success") to balance element
// 2c. Change backgroundColor of #output2 using .style
// 3a. document.createElement("div") for new card
// 3b. Set its className to "card"
// 3c. Set innerHTML to show a "Savings Rate" card
// 3d. document.querySelector("#new-cards").appendChild(newCard)
```

### Lab 5 Module 5

```
// 1a. click listener on #add-income-btn → add 1000 to currentBalance, update display
// 1b. click listener on #add-expense-btn → subtract 500 from currentBalance
// 1c. click listener on #reset-btn → reset currentBalance to 0
// 2a. "input" listener on #amount-input → update #amount-preview with formatted value
// 3a. "submit" listener on #transaction-form:
//     preventDefault, read #desc-input/#form-amount/#type-select,
//     push to transactions[], display all, reset form
```

### Lab 5 Module 6

```
// Step 1: Write updateDashboard() — filter+reduce totals, update 4 DOM elements, color balance
// Step 2: Write renderTransactions() — map to HTML, handle empty state
// Step 3: "submit" listener on #calc-form — preventDefault, read 4 inputs, push, call both
// Step 4: "click" listener on #clear-all-btn — empty array, call both
```

### Lab 5 Part B

```
// Step 1: formatCurrency(amount) and calcSavingsRate(income, expenses)
// Step 2: Empty array for transactions
// Step 3: updateDashboard() → #total-income, #total-expenses, #total-balance, #savings-rate
// Step 4: renderTransactions() → #transaction-body table
// Step 5: "submit" on #quick-transaction-form → #quick-desc, #quick-amount, #quick-type
// Step 6: "click" on #clear-btn → empty array, call both
```

### Lab 6 Module 1

```
// TODO: Define the Transaction class with constructor and 3 methods
// TODO: Define the Account class with constructor and 3 methods
// TODO: Define the BudgetCategory class
```

### Lab 6 Module 2

```
// TODO: Define SavingsAccount class (extends Account)
// TODO: Define RecurringTransaction class (extends Transaction)
// TODO: Create instances and test with instanceof
```

### Lab 6 Module 3 (test file)

```
// TODO: Test that constructor sets properties (4 properties)
// TODO: Test format() for income (+8,000 QAR)
// TODO: Test format() for expense (-3,500 QAR)
// TODO: Test isExpense() and isIncome() booleans
// TODO: Test deposit increases balance
// TODO: Test withdraw decreases balance
// TODO: Test withdraw returns false when insufficient funds
// TODO: Test getBalance returns formatted string
// TODO: Test SavingsAccount type is "savings"
// TODO: Test SavingsAccount inherits deposit
// TODO: Test applyProfit calculates and adds profit
```

### Lab 6 Module 4

```
// TODO: Render sampleTransactions into #transaction-table using map + join
// TODO: Create liveTransactions array
// TODO: Write updateDashboard()
// TODO: Write renderLiveTransactions()
// TODO: "submit" listener on #transaction-form
// TODO: Load from localStorage on startup (key: "module4-transactions")
// TODO: Save to localStorage after each add
// TODO: "click" listener on #clear-btn → removeItem + reset + refresh
// TODO: "click" listener on #count-btn → show count in #storage-output
```

### Lab 6 Part B

```
// TODO: Define Transaction class
// TODO: Define AccountManager class
// TODO: Create instance: const manager = new AccountManager()
// TODO: Write updateDashboard() — uses manager.getTotals() and manager.getSavingsRate()
// TODO: Write renderTransactions() — uses manager.getAll(), map to rows, delete button
// TODO: Write deleteTransaction(index) — manager.remove(index), refresh
// TODO: Write renderCategorySummary() — manager.getCategorySummary(), Object.entries, cards
// TODO: "submit" on #transaction-form — read 4 inputs, manager.add(), refresh all, reset
// TODO: "click" on #clear-btn — manager.clear(), refresh all
// TODO: Call updateDashboard(), renderTransactions(), renderCategorySummary() on page load
```

### Lab 7 Module 1

```
// TODO: Create object, stringify, parse, log
// TODO: a) Extract descriptions array with .map()
// TODO: b) Total expenses with .filter() + .reduce()
// TODO: c) Formatted strings "Salary: +8,000 QAR" with .map()
// TODO: d) Find largest expense with .filter() + .reduce()
// TODO: Group by category using reduce
// TODO: Log each category with Object.entries().forEach()
```

### Lab 7 Module 2

```
// TODO: Write async function displayTransactions()
// TODO: Call displayTransactions()
// TODO: Write async function loadWithErrorHandling()
// TODO: Call loadWithErrorHandling()
// TODO: Write async function runSequential() — console.time/timeEnd
// TODO: Write async function runParallel() — Promise.all, console.time/timeEnd
// TODO: Call both using async wrapper (await runSequential(), then await runParallel())
```

### Lab 7 Module 3

```
// TODO: click listener on #load-btn — fetch, show loading, render rows, update status
// TODO: click listener on #summary-btn — fetch, calculate 4 totals, render 4 cards
```

### Lab 7 Module 4

```
// TODO: "submit" listener on #add-form — POST fetch with FormData, show status, refresh
// TODO: Write startEdit(id) — GET fetch, populate edit form, show cancel, update status
// TODO: Write cancelEdit() — reset form, clear id, show hint, clear status
// TODO: "click" listener on #cancel-edit-btn → cancelEdit()
// TODO: "submit" listener on #edit-form — read id, PUT fetch, check .ok, refresh
// TODO: Write deleteTransaction(id) — DELETE fetch, show status, refresh
```

### Lab 7 Part B

```
// TODO: Write async function loadTransactions()
// TODO: Write function updateSummary()
// TODO: Write function renderTransactions()
// TODO: Write async function addTransaction(data)
// TODO: Write async function updateTransaction(id, data)
// TODO: Write async function deleteTransaction(id)
// TODO: Write function getFilteredTransactions()
// TODO: "input" listener on #search → renderTransactions()
// TODO: "change" listener on #filter-type → renderTransactions()
// TODO: Write function startEdit(id)
// TODO: Write function cancelEdit()
// TODO: "submit" listener on #transaction-form — branch on editingId
// TODO: Call loadTransactions() at bottom of file
```

### Assignment 2

```
// TODO 1:  fetchAllRecipes()         — GET, parse, return array
// TODO 2:  createRecipe(data)        — POST, headers, body, return created
// TODO 3:  updateRecipe(id, data)    — PUT to API_URL+"/"+id, return updated
// TODO 4:  deleteRecipeById(id)      — DELETE to API_URL+"/"+id
// TODO 5:  loadPage(page)            — fetch .html, inject, active nav, wire handlers
// TODO 6:  recipeToHTMLCard(recipe)  — template literal with all recipe fields
// TODO 7:  renderRecipes()           — map cards into #recipes-grid, empty state
// TODO 8:  loadRecipes()             — fetchAllRecipes, store, renderRecipes
// TODO 9:  handleRecipeSubmit(e)     — FormData, Number conversion, branch editingId
// TODO 10: startEdit(id)             — find, set editingId, await loadPage, populate all fields
// TODO 11: cancelEdit()              — null editingId, reset form, restore UI
// TODO 12: handleDelete(id)          — confirm(), deleteRecipeById, loadRecipes
// TODO 13: DOMContentLoaded → loadPage("recipes")
```

### Practice Session

```
// Q1  (5 marks):  Fix .dashboard-grid — display:grid, repeat(auto-fit, minmax(...))
// Q2  (10 marks): loadTransactions() — GET fetch, store, refreshAll()
// Q3  (12 marks): updateSummary() — filter+reduce, update 3 elements, color balance
// Q4  (15 marks): renderTransactions() — getFilteredTransactions, map rows, +/- color, empty state
// Q5  (10 marks): addTransaction(data) — POST, push created, refreshAll()
// Q6  (10 marks): updateTransaction(id, data) — PUT, findIndex+replace, refreshAll()
// Q7  (10 marks): deleteTransaction(id) — DELETE, filter out id, refreshAll()
// Q8  (12 marks): getFilteredTransactions() — search+type filter; "input"+"change" listeners
// Q9  (16 marks): startEdit(id) + cancelEdit() + form submit branch on editingId
```

---

## 27. FINAL RECAP: The 10 Essential Code Patterns

### Type 1 — Calculate totals (filter + reduce)

```javascript
const "change to total variable" = "change to array name"
    .filter(t => t."change to type property" === "income")
    .reduce((sum, t) => sum + t."change to amount property", 0);
```

### Type 2 — Render list to table (map + join)

```javascript
document.getElementById("change to container ID").innerHTML = "change to array name".map(t => `
    <tr>
        <td>${t."change to property A"}</td>
        <td>${t."change to property B"}</td>
    </tr>
`).join("");
```

### Type 3 — Add via form (preventDefault + Number + push + reset)

```javascript
document.getElementById("change to form ID").addEventListener("submit", (e) => {
    e.preventDefault();
    const amount = Number(document.getElementById("change to amount input ID").value);
    "change to array name".push({ "change to description property": "change to description value", amount, "change to type property": "expense", "change to category property": "change to category value" });
    "change to refresh function name"();
    e.target.reset();
});
```

### Type 4 — Fetch from API (async + two awaits + try/catch)

```javascript
async function "change to load function name"() {
    try {
        const response = await fetch("change to API URL constant");
        const "change to data variable" = await response.json();
        // use "change to data variable"
    } catch (err) { console.error("Load failed:", err); }
}
```

### Type 5 — POST to API (method + headers + JSON.stringify)

```javascript
await fetch("change to API URL constant", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify("change to data variable")
});
```

### Type 6 — Define a class (constructor + methods)

```javascript
class "change to class name" {
    constructor("change to property A", "change to property B", "change to property C", "change to property D") {
        this."change to property A" = "change to property A"; this."change to property B" = "change to property B";
        this."change to property C" = "change to property C"; this."change to property D" = "change to property D";
    }
    "change to format method"()    { const sign = this."change to property C" === "income" ? "+" : "-"; return sign + this."change to property B".toLocaleString() + " QAR"; }
    "change to isExpense check method"() { return this."change to property C" === "expense"; }
    "change to isIncome check method"()  { return this."change to property C" === "income";  }
}
```

### Type 7 — Write a unit test (describe + it + expect + .to.equal)

```javascript
describe("change to test suite name", () => {
    it("change to test description", () => {
        const "change to instance variable" = new "change to class name"("Value A", 8000, "income", "Value D");
        expect("change to instance variable"."change to format method"()).to.equal("+8,000 QAR");
    });
});
```

### Type 8 — Persist with localStorage (JSON.stringify/parse + fallback)

```javascript
// Save
localStorage.setItem("change to storage key variable", JSON.stringify("change to array name"));
// Load with fallback
const data = JSON.parse(localStorage.getItem("change to storage key variable") || "[]");
```

### Type 9 — Search and filter (toLowerCase + includes + dropdown)

```javascript
return "change to array name".filter(t => {
    const matchesSearch = t."change to property name".toLowerCase().includes("change to search term variable".toLowerCase());
    const matchesFilter = "change to filter variable" === "all" || t."change to filter property" === "change to filter variable";
    return matchesSearch && matchesFilter;
});
```

### Type 10 — Edit mode toggle (editingId + startEdit + cancelEdit + branch)

```javascript
let "change to editing ID variable" = null;

function "change to start edit function name"(id) {
    "change to editing ID variable" = id;
    // populate form + show cancel button
}

function "change to cancel edit function name"() {
    "change to editing ID variable" = null;
    document.getElementById("change to form ID").reset();
    // hide cancel button, restore text
}

document.getElementById("change to form ID").addEventListener("submit", async (e) => {
    e.preventDefault();
    const "change to data variable" = "change to extract data logic";

    if ("change to editing ID variable" !== null) {
        await "change to update item function name"("change to editing ID variable", "change to data variable");
        "change to cancel edit function name"();
    } else {
        await "change to add item function name"("change to data variable");
    }
    e.target.reset();
});
```

---

*Last updated: April 2026 — covers all material from Labs 5–7 starter code, Tutorial B01 solutions, Assignment 2, and Practice Session*
