/* =================================
   Recipe Favorites Tracker
   Exam 3: localStorage — 100 marks | 60 minutes
   =================================

   INSTRUCTIONS:
   - Write ALL your JavaScript code in this file
   - Use localStorage to persist data across page refreshes
   - Read index.html to find all the element IDs you need
   - Open index.html with Live Server to test

   API URL: https://freetestapi.com/api/v1/recipes

   RECIPE SHAPE (from API):
   {
       "id": 1,
       "name": "Spaghetti Carbonara",
       "ingredients": ["spaghetti", "eggs", "bacon"],
       "instructions": ["Boil pasta...", "Fry bacon..."],
       "prepTimeMinutes": 15,
       "cookTimeMinutes": 20,
       "servings": 4,
       "difficulty": "Medium",
       "cuisine": "Italian",
       "image": "https://..."
   }

   ==========================================
   QUESTIONS
   ==========================================

   Q1 (5 marks) — CSS Fix
   Open css/styles.css and fix the .grid-container rule.
   The gap property has a missing unit. Add the correct CSS unit so cards
   have proper spacing between them.

   Q2 (15 marks) — loadRecipes()
   Write an async function loadRecipes() that:
     1. Checks localStorage first (key: "recipe_cache")
     2. If cached data exists, parse it and use it (skip the API call)
     3. If no cache, fetch from API: https://freetestapi.com/api/v1/recipes
     4. Save fetched data to localStorage under "recipe_cache"
     5. Store data in a global array variable
     6. Call refreshAll() after loading
   Use try/catch for error handling.

   Q3 (10 marks) — updateStats()
   Write a function updateStats() that calculates and displays:
     - Total number of recipes → #total-recipes
     - Number of saved favorites → #total-favorites
     - Average prep time across all recipes → #avg-prep-time (append " min")
   Use .reduce() to calculate the average prep time.

   Q4 (12 marks) — getFilteredRecipes()
   Write a function getFilteredRecipes() that:
     - Reads search term from #search — filter by name (case-insensitive partial match)
     - Reads difficulty filter from #filter-difficulty — "all", "Easy", "Medium", or "Hard"
     - Reads sort from #sort-options:
         "all"      → no sorting
         "name"     → sort by name alphabetically using .localeCompare()
         "prep"     → sort by prepTimeMinutes ascending
         "servings" → sort by servings descending
     Both search AND difficulty filter must apply together.
     Returns the filtered and sorted array.

   Q5 (15 marks) — renderRecipes()
   Write a function renderRecipes() that:
     1. Calls getFilteredRecipes()
     2. Renders cards into #recipe-grid
     3. Each card structure (use class "recipe-card"):
        - Image, name, cuisine, meta info (prep time + servings)
        - Difficulty tag with dynamic class:
            "Easy" → "difficulty-easy", "Medium" → "difficulty-medium", "Hard" → "difficulty-hard"
        - Two buttons: "Details" (calls showDetails) and "♥ Favorite" (calls addToFavorites)
     4. Empty state if no recipes match
     Use .map() and .join("")

   Q6 (13 marks) — showDetails(id) and goBack()
   Write showDetails(id) that:
     1. Finds the recipe in the global array with .find()
     2. Hides #recipe-grid, shows #details-container
     3. Renders: image, name, cuisine, prepTime, cookTime, servings, difficulty
     4. Lists ingredients as <ul> and instructions as <ol>
     5. "Back to Recipes" button calls goBack()

   Write goBack() that hides details and shows the grid.

   Q7 (8 marks) — Event Listeners
   Add event listeners:
     - "input" on #search → renderRecipes()
     - "change" on #filter-difficulty → renderRecipes()
     - "change" on #sort-options → renderRecipes()
     - "click" on #clear-favorites-btn → clearFavorites()

   Q8 (12 marks) — handleAddRecipe (Form Submit)
   Add a "submit" event listener on #recipe-form that:
     1. Calls e.preventDefault()
     2. Reads values from: #recipe-name, #recipe-cuisine, #recipe-prep,
        #recipe-cook, #recipe-servings, #recipe-difficulty
     3. Creates a new recipe object with id: Date.now() and the form values
        (convert numeric fields with Number())
     4. Pushes the new recipe to the global array
     5. Saves updated array to localStorage ("recipe_cache")
     6. Resets the form and calls refreshAll()

   Q9 (10 marks) — Favorites (localStorage)
   Write addToFavorites(recipeId):
     1. Check if already in favorites (use .find()) — alert and return if duplicate
     2. Find recipe from main array, push to favorites array
     3. Save to localStorage (key: "recipe_favorites")
     4. Call renderFavorites()

   Write renderFavorites():
     1. Render simplified cards into #favorites-grid (name, cuisine, Remove button)
     2. Update #total-favorites count
     3. Show empty state if no favorites

   Write removeFromFavorites(recipeId):
     1. Filter out the recipe
     2. Save to localStorage
     3. Call renderFavorites()

   Write clearFavorites():
     1. Remove "recipe_favorites" from localStorage
     2. Empty favorites array
     3. Call renderFavorites()

   Load favorites from localStorage at startup:
     let favorites = JSON.parse(localStorage.getItem("recipe_favorites") || "[]");

   ==========================================
   HELPER (provided):
   ==========================================
   function refreshAll() {
       updateStats();
       renderRecipes();
       renderFavorites();
   }

   ==========================================
   Write your code below
   ==========================================
*/
