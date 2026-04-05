/* =================================
   TechStore Product Manager
   Exam 4: localStorage — 100 marks | 60 minutes
   =================================

   INSTRUCTIONS:
   - Write ALL your JavaScript code in this file
   - Use localStorage for ALL data persistence
   - Read index.html to find all element IDs you need
   - Open index.html with Live Server to test

   API URL: https://freetestapi.com/api/v1/products

   PRODUCT SHAPE (from API):
   {
       "id": 1,
       "name": "Laptop Pro X1",
       "description": "High performance laptop...",
       "price": 1299.99,
       "category": "Electronics",
       "stock": 45,
       "image": "https://..."
   }

   ==========================================
   QUESTIONS
   ==========================================

   Q1 (5 marks) — CSS Fix
   Open css/styles.css and fix the .grid-container rule.
   The display property uses the wrong value ("block").
   Change it so the grid layout works with the grid-template-columns already defined.

   Q2 (15 marks) — loadProducts()
   Write an async function loadProducts() that:
     1. Checks localStorage first (key: "techstore_products")
     2. If cached data exists, parse it and use it (skip API call)
     3. If no cache, fetch from: https://freetestapi.com/api/v1/products
     4. Save fetched data to localStorage under "techstore_products"
     5. Store data in a global array variable
     6. Call refreshAll()
   Use try/catch for error handling.

   Q3 (12 marks) — updateSummary()
   Write a function updateSummary() that calculates and displays:
     - Total number of products → #total-products
     - Count of products where stock > 0 → #in-stock-count
     - Count of products where stock === 0 → #out-of-stock-count
     - Total inventory value (sum of price * stock for all products) → #total-value
       Format total value with $ prefix and .toLocaleString()
   Use .filter() and .reduce() on the products array.

   Q4 (10 marks) — getFilteredProducts()
   Write a function getFilteredProducts() that:
     - Reads search from #search — filter by name (case-insensitive partial match)
     - Reads stock filter from #filter-stock:
         "all"          → show all
         "in-stock"     → show only products where stock > 0
         "out-of-stock" → show only products where stock === 0
     - Reads sort from #sort-options:
         "all"        → no sorting
         "name"       → sort by name (A-Z) using .localeCompare()
         "price-low"  → sort by price ascending
         "price-high" → sort by price descending
     Returns the filtered/sorted array.

   Q5 (15 marks) — renderProducts()
   Write a function renderProducts() that:
     1. Calls getFilteredProducts()
     2. Renders cards into #product-grid using class "product-card"
     3. Each card shows: image, name, category, price (formatted with $),
        stock status (use class "stock-in" if stock > 0, "stock-out" if stock === 0,
        text: "In Stock (XX)" or "Out of Stock")
     4. Two buttons: "Edit" (calls startEdit) and "Delete" (calls deleteProduct)
     5. Empty state if no products match
     Use .map() and .join("")

   Q6 (8 marks) — Event Listeners
   Add event listeners:
     - "input" on #search → renderProducts()
     - "change" on #filter-stock → renderProducts()
     - "change" on #sort-options → renderProducts()
     - "click" on #cancel-btn → cancelEdit()

   Q7 (15 marks) — startEdit(id) and cancelEdit()
   Write startEdit(id) that:
     1. Finds the product in the global array using .find()
     2. Sets a global editingId variable to the product's ID
     3. Populates the form with: #product-name, #product-category,
        #product-price, #product-stock, #product-description
     4. Changes #submit-btn text to "Update Product"
     5. Shows #cancel-btn (style.display = "inline-block")
     6. Changes #form-title text to "Edit Product"

   Write cancelEdit() that:
     1. Sets editingId back to null
     2. Resets #product-form
     3. Restores #submit-btn text to "Add Product"
     4. Hides #cancel-btn (style.display = "none")
     5. Restores #form-title text to "Add New Product"

   Q8 (20 marks) — Form Submit (Add / Edit branch) + Delete
   Add a "submit" event listener on #product-form that:
     1. Calls e.preventDefault()
     2. Reads values from form inputs (convert price and stock with Number())
     3. If editingId is set (edit mode):
        - Find the product's index with .findIndex()
        - Update the product's properties at that index
        - Save updated array to localStorage ("techstore_products")
        - Call cancelEdit()
     4. If editingId is null (add mode):
        - Create a new product object with id: Date.now()
        - Push to the global array
        - Save to localStorage
        - Reset the form
     5. Call refreshAll()

   Write deleteProduct(id) that:
     1. Shows confirm("Are you sure?") — return if cancelled
     2. Filters out the product from the global array
     3. Saves updated array to localStorage
     4. Calls refreshAll()

   ==========================================
   HELPER (provided):
   ==========================================
   function refreshAll() {
       updateSummary();
       renderProducts();
   }

   ==========================================
   INITIALIZATION:
   Call loadProducts() at the bottom so data loads on page open.
   ==========================================

   Write your code below
   ==========================================
*/
