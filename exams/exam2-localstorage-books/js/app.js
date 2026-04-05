/* =================================
   Book Collection Manager
   Exam 2: localStorage — 100 marks | 60 minutes
   =================================

   INSTRUCTIONS:
   - Write ALL your JavaScript code in this file
   - Use localStorage to persist data across page refreshes
   - Read index.html to find all the element IDs you need
   - Open index.html with Live Server to test

   API URL: https://freetestapi.com/api/v1/books

   BOOK DATA SHAPE (from API):
   {
       "id": 1,
       "title": "To Kill a Mockingbird",
       "author": "Harper Lee",
       "publication_year": 1960,
       "genre": ["Fiction", "Classic"],
       "description": "A novel about...",
       "cover_image": "https://..."
   }

   ==========================================
   QUESTIONS
   ==========================================

   Q1 (5 marks) — CSS Fix
   Open css/styles.css and fix the .grid-container rule.
   The cards are not displaying in a grid because the display property is missing.
   Add the correct CSS property so cards appear in a responsive grid layout.

   Q2 (15 marks) — loadBooks()
   Write an async function loadBooks() that:
     1. Checks localStorage first (key: "book_collection")
     2. If cached data exists, parse it and use it (skip the API call)
     3. If no cache, fetch from the API: https://freetestapi.com/api/v1/books
     4. Store the fetched data in localStorage under "book_collection"
     5. Store data in a global array variable
     6. Call renderBooks() after loading
   Use try/catch for error handling.
   This function should run automatically when the page loads.

   Q3 (12 marks) — getFilteredBooks()
   Write a function getFilteredBooks() that:
     - Reads the search term from #search — filter by title (case-insensitive partial match)
     - Reads the sort option from #sort-options:
         "all"       → no sorting (default order)
         "title"     → sort alphabetically by title using .localeCompare()
         "year"      → sort by publication_year ascending (oldest first)
         "year-desc" → sort by publication_year descending (newest first)
     - Returns the filtered and sorted array

   Q4 (18 marks) — renderBooks()
   Write a function renderBooks() that:
     1. Calls getFilteredBooks() to get the filtered/sorted data
     2. Renders book cards into #book-grid
     3. Each card should use this structure:
        <div class="book-card">
            <img src="${book.cover_image}" alt="${book.title}">
            <div class="card-body">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="year">${book.publication_year}</p>
                (map book.genre array to genre-tag spans)
            </div>
            <div class="card-actions">
                <button class="btn btn-primary btn-sm" onclick="showDetails(${book.id})">Details</button>
                <button class="btn btn-success btn-sm" onclick="addToReadingList(${book.id})">+ Reading List</button>
            </div>
        </div>
     4. If no books match, show an empty state message
     Use .map() and .join("")

   Q5 (8 marks) — Event Listeners
   Add event listeners:
     - "input" on #search → call renderBooks()
     - "change" on #sort-options → call renderBooks()
     - "click" on #clear-list-btn → call clearReadingList()

   Q6 (15 marks) — showDetails(id) and goBack()
   Write showDetails(id) that:
     1. Finds the book in the global array using .find()
     2. Hides #book-grid (style.display = "none")
     3. Shows #details-container (style.display = "block")
     4. Renders a detailed view with:
        - cover_image, title, author, publication_year
        - Full description text
        - Genre tags
        - A "Back to Collection" button that calls goBack()
     Use the CSS class "detail-card" for the container.

   Write goBack() that:
     1. Hides #details-container
     2. Shows #book-grid

   Q7 (17 marks) — Reading List (localStorage)
   Write addToReadingList(bookId) that:
     1. Checks if the book already exists in the reading list (use .find())
        - If yes, alert "Already in your reading list!" and return
     2. Finds the book from the main array
     3. Pushes it to a reading list array
     4. Saves the reading list to localStorage (key: "reading_list")
     5. Calls renderReadingList()

   Write renderReadingList() that:
     1. Reads the reading list from the global array
     2. Renders cards into #reading-list (simpler cards with title, author, and a Remove button)
     3. Updates #list-count with the count (e.g., "3 books saved")
     4. Shows empty state if list is empty

   Write removeFromReadingList(bookId) that:
     1. Filters out the removed book
     2. Saves updated list to localStorage
     3. Calls renderReadingList()

   Write clearReadingList() that:
     1. Removes "reading_list" from localStorage
     2. Empties the reading list array
     3. Calls renderReadingList()

   Load the reading list from localStorage at startup:
     let readingList = JSON.parse(localStorage.getItem("reading_list") || "[]");

   Q8 (10 marks) — Initialization
   Make sure:
     - loadBooks() runs when the page opens
     - renderReadingList() runs on page load to show saved reading list
     - All event listeners are wired up

   ==========================================
   Write your code below
   ==========================================
*/
