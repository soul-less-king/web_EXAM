/* =================================
   MyFinance Transaction Manager
   Practice Session

   API URL: https://corsproxy.io/?https://myfinance-api-bay.vercel.app/transactions

   Endpoints:
     GET    /transactions       → Fetch all transactions
     GET    /transactions/:id   → Fetch one transaction
     POST   /transactions       → Create a new transaction
     PUT    /transactions/:id   → Update a transaction
     DELETE /transactions/:id   → Delete a transaction
   ================================= */

// Write ALL your code below this line

const API_URL = "https://corsproxy.io/?https://myfinance-api-bay.vercel.app/transactions"; // ← replace URL

let arrayx = [];
let editingId = null;

/**
 * Q2: loadTransactions — Fetch from API (GET)
 */
async function loadTransactions() { // ← replace function name
    try {
        const response = await fetch(API_URL); // ← replace API_URL
        const data = await response.json();

        // 1. Store in global array
        arrayx = data; // ← replace global array name

        // 2. Refresh page summary/table
        refreshAll();
    } catch (err) {
        console.error("Load failed:", err);
    }
}

/**
 * Q3: updateSummary — Calculate totals (filter + reduce)
 */
function updateSummary() { // ← replace function name
    const totalIncome = arrayx // ← replace array name
        .filter(t => t.type === "income") // ← replace .type and "income"
        .reduce((total, t) => total + t.amount, 0); // ← replace .amount

    const totalExpenses = arrayx
        .filter(t => t.type === "expense")
        .reduce((total, t) => total + t.amount, 0);

    const balance = totalIncome - totalExpenses;

    // Update displays
    document.getElementById("total-income").textContent   = totalIncome.toLocaleString()   + " QAR"; // ← replace IDs
    document.getElementById("total-expenses").textContent = totalExpenses.toLocaleString() + " QAR";
    document.getElementById("total-balance").textContent  = balance.toLocaleString()       + " QAR";

    // Color balance sign
    const balanceEl = document.getElementById("total-balance"); // ← replace ID
    balanceEl.classList.remove("text-success", "text-danger");
    balanceEl.classList.add(balance >= 0 ? "text-success" : "text-danger");
}

/**
 * Q4: renderTransactions — Render rows (map + join)
 */
function renderTransactions() { // ← replace function name
    // ALWAYS call the filter function first for search/filter (Q8)
    const filtered = getFilteredTransactions(); // ← replace with your filter function name
    const tableBody = document.getElementById("transaction-body"); // ← replace ID

    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="empty-message">No transactions found</td></tr>`;
        return;
    }

    tableBody.innerHTML = filtered.map(t => `
        <tr>
            <td>${t.description}</td> <!-- ← replace property names -->
            <td>${t.category}</td>
            <td>${t.type}</td>
            <td class="${t.type === 'income' ? 'text-success' : 'text-danger'}">
                ${t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()} QAR
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="startEdit(${t.id})">Edit</button>
                <button class="btn btn-sm btn-danger"  onclick="deleteTransaction(${t.id})">Delete</button>
            </td>
        </tr>
    `).join("");
}

/**
 * Q5: addTransaction — POST fetch
 */
async function addTransaction(data) { // ← replace function name and keep "data" param
    try {
        const response = await fetch(API_URL, { // ← replace API_URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const created = await response.json();

        // 1. Add to local array
        arrayx.push(created); // ← replace array name

        // 2. Refresh page summary/table
        refreshAll(); // ← replace refresh function name
    } catch (error) { console.error("Add error:", error); }
}

/**
 * Q6: updateTransaction — PUT fetch
 */
async function updateTransaction(id, data) { // ← replace function name
    try {
        const response = await fetch(`${API_URL}/${id}`, { // ← replace API_URL
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const updated = await response.json();

        // Replace in local array (findIndex then swap)
        const index = arrayx.findIndex(t => t.id === id); // ← replace array and .id
        if (index !== -1) arrayx[index] = updated; // ← replace array name

        refreshAll(); // ← replace refresh function name
    } catch (error) { console.error("Update error:", error); }
}

/**
 * Q7: deleteTransaction — DELETE fetch
 */
async function deleteTransaction(id) { // ← replace function name
    if (!confirm("Are you sure?")) return;
    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" }); // ← replace API_URL

        // Remove from local array
        arrayx = arrayx.filter(t => t.id !== id); // ← replace array and .id

        refreshAll(); // ← replace refresh function name
    } catch (error) { console.error("Delete error:", error); }
}

/**
 * Q8: getFilteredTransactions — Search & Dropdown filter
 */
function getFilteredTransactions() { // ← replace function name
    const searchTerm = document.getElementById("search").value.toLowerCase(); // ← replace ID
    const filterType = document.getElementById("filter-type").value; // ← replace ID

    return arrayx.filter(t => { // ← replace array name
        // Description search — case-insensitive partial match
        const matchesSearch = t.description.toLowerCase().includes(searchTerm); // ← replace .description
        // Type filter — "all" means no type restriction
        const matchesType = filterType === "all" || t.type === filterType; // ← replace .type
        return matchesSearch && matchesType;
    });
}

/**
 * Q9: startEdit & cancelEdit — Edit Mode toggle
 */
async function startEdit(id) {
    const item = arrayx.find(i => i.id === id); // ← replace array and .id
    if (!item) return;

    editingId = id; // ← replace variable name

    // Populate form inputs
    document.getElementById("desc").value      = item.description; // ← replace IDs and properties
    document.getElementById("amount").value    = item.amount;
    document.getElementById("type").value      = item.type;
    document.getElementById("category").value  = item.category;

    // Update UI text (showing the cancel button)
    document.getElementById("submit-btn").textContent = "Update Transaction"; // ← replace ID
    const cancelBtn = document.getElementById("cancel-btn"); // ← replace ID
    if (cancelBtn) cancelBtn.style.display = "inline-block";
    document.getElementById("form-title").textContent = "Edit Transaction";
}

function cancelEdit() { // ← replace function name
    editingId = null; // ← replace variable name
    document.getElementById("transaction-form").reset(); // ← replace ID

    // Reset UI text (hiding the cancel button)
    document.getElementById("submit-btn").textContent = "Add Transaction"; // ← replace ID
    const cancelBtn = document.getElementById("cancel-btn"); // ← replace ID
    if (cancelBtn) cancelBtn.style.display = "none";
    document.getElementById("form-title").textContent = "Add Transaction";
}

/**
 * refreshAll() — Provided helper to re-run summary and render
 */
function refreshAll() {
    updateSummary();
    renderTransactions();
}

/**
 * EVENT LISTENERS
 */

// 1. Initial Load (Q2)
loadTransactions();

// 2. Search and Filter listeners (Q8)
document.getElementById("search").addEventListener("input", renderTransactions);
document.getElementById("filter-type").addEventListener("change", renderTransactions);

// 3. Cancel Button click
document.getElementById("cancel-btn").addEventListener("click", cancelEdit);

// 4. Form Submit (Branching between Add and Update)
document.getElementById("transaction-form").addEventListener("submit", async (e) => { // ← replace ID
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.amount = Number(data.amount); 

    if (editingId) { // ← replace variable name
        await updateTransaction(editingId, data); // ← replace function names and variable
        cancelEdit(); // ← replace function name
    } else {
        await addTransaction(data); // ← replace function name
        e.target.reset();
    }
});
