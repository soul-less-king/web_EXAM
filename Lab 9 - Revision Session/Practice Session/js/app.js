/* =================================
   MyFinance Transaction Manager
   Practice Session

   API URL: https://myfinance-api-bay.vercel.app/transactions

   Endpoints:
     GET    /transactions       → Fetch all transactions
     GET    /transactions/:id   → Fetch one transaction
     POST   /transactions       → Create a new transaction
     PUT    /transactions/:id   → Update a transaction
     DELETE /transactions/:id   → Delete a transaction
   ================================= */

// Write ALL your code below this line

const API_URL= "  https://myfinance-api-bay.vercel.app/transactions  ";

let arrayx=[];


async function loadTransactions() {
    try {
        const response = await fetch(API_URL);
        const data= await response.json();

        // 1. Store in global array
       arrayx = data;

        // 2. Render to DOM
        const tableBody = document.getElementById("change to table body ID");
        tableBody.innerHTML = "change to array name".map(t => `
            <tr>
                <td>${t.description}</td>
                <td>${t.amount.toLocaleString()} QAR</td>
            </tr>
        `).join("");

        // 3. Update status
        document.getElementById("change to status text ID").textContent = "Loaded!";
    } catch (err) {
        console.error("Load failed:", err);
    }
}