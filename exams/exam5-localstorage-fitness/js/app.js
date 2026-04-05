/* =================================
   FitLog Workout Tracker
   Exam 5: localStorage — 100 marks | 60 minutes
   =================================

   INSTRUCTIONS:
   - Write ALL your JavaScript code in this file
   - Use localStorage for ALL data persistence — no API
   - Read index.html to find all element IDs you need
   - Open index.html with Live Server to test

   NO API — All data is created locally via the form.
   localStorage key: "fitlog_workouts"

   WORKOUT DATA SHAPE (created from the form):
   {
       id: Date.now(),
       exercise: "Running",
       duration: 30,
       calories: 350,
       type: "cardio",
       date: "2026-04-05",
       notes: "Morning run in the park"
   }

   type is: "cardio", "strength", or "flexibility"

   ==========================================
   QUESTIONS
   ==========================================

   Q1 (5 marks) — CSS Fix
   Open css/styles.css and fix the th rule.
   The table header text is invisible because the color matches
   the background. Change the color to make the header text white.

   Q2 (10 marks) — Data Setup & Loading
   At the top of your script:
     1. Declare a variable for the localStorage key: "fitlog_workouts"
     2. Load workouts from localStorage into a global array variable:
        JSON.parse(localStorage.getItem(key) || "[]")
     3. Declare let editingId = null
     4. Call refreshAll() at the bottom to render on page load

   Q3 (15 marks) — updateSummary()
   Write a function updateSummary() that calculates and displays:
     - Total number of workouts → #total-workouts
     - Sum of all durations → #total-duration (append " min")
     - Sum of all calories → #total-calories (append " kcal")
       Format with .toLocaleString()
     - Average duration across all workouts → #avg-duration (append " min")
       Round to 1 decimal with .toFixed(1). If 0 workouts, show "0 min".
   Use .reduce() for calculations.

   Q4 (12 marks) — getFilteredWorkouts()
   Write a function getFilteredWorkouts() that:
     - Reads search from #search — filter by exercise name (case-insensitive partial match)
     - Reads type filter from #filter-type — "all", "cardio", "strength", "flexibility"
     - Reads sort from #sort-by:
         "date-new"  → sort by date descending (newest first)
         "date-old"  → sort by date ascending (oldest first)
         "duration"  → sort by duration descending
         "calories"  → sort by calories descending
     Both search AND type filter must apply together.
     Returns the filtered/sorted array.

   Q5 (15 marks) — renderWorkouts()
   Write a function renderWorkouts() that:
     1. Calls getFilteredWorkouts()
     2. Renders rows into #workout-body
     3. Each row shows: exercise name, type (as badge using class "type-badge"
        and "type-cardio"/"type-strength"/"type-flexibility"),
        duration (append " min"), calories (append " kcal"), date, and action buttons
     4. Two buttons per row: "Edit" (calls startEdit) and "Delete" (calls deleteWorkout)
     5. Empty state message if no workouts match
     Use .map() and .join("")

   Q6 (8 marks) — Event Listeners
   Wire up event listeners:
     - "input" on #search → renderWorkouts()
     - "change" on #filter-type → renderWorkouts()
     - "change" on #sort-by → renderWorkouts()
     - "click" on #cancel-btn → cancelEdit()
     - "click" on #clear-all-btn → clearAll()

   Q7 (15 marks) — startEdit(id) and cancelEdit()
   Write startEdit(id) that:
     1. Finds the workout in the global array with .find()
     2. Sets editingId to the workout's ID
     3. Populates the form: #exercise, #workout-type, #duration,
        #calories, #workout-date, #notes
     4. Changes #submit-btn text to "Update Workout"
     5. Shows #cancel-btn
     6. Changes #form-title to "Edit Workout"

   Write cancelEdit() that:
     1. Sets editingId to null
     2. Resets #workout-form
     3. Restores #submit-btn text to "Log Workout"
     4. Hides #cancel-btn
     5. Restores #form-title to "Log New Workout"

   Q8 (20 marks) — Form Submit (Add/Edit) + Delete + Clear
   Add a "submit" listener on #workout-form:
     1. e.preventDefault()
     2. Read values from all form inputs (convert duration and calories with Number())
     3. If editingId is set (edit mode):
        - Find the workout's index with .findIndex()
        - Update all properties at that index
        - Save to localStorage ("fitlog_workouts")
        - Call cancelEdit()
     4. If editingId is null (add mode):
        - Create new workout object with id: Date.now()
        - Push to array
        - Save to localStorage
        - Reset the form
     5. Call refreshAll()

   Write deleteWorkout(id):
     1. confirm("Are you sure?") — return if cancelled
     2. Filter the workout out of the global array
     3. Save to localStorage
     4. Call refreshAll()

   Write clearAll():
     1. confirm("Clear all workout data?") — return if cancelled
     2. Remove "fitlog_workouts" from localStorage
     3. Empty the global array
     4. Call refreshAll()

   Q9 (bonus concept — already in Q3 area) — renderTypeSummary()
   Write renderTypeSummary() that groups workouts by type and
   renders a summary card for each type in #type-summary.
   Each card shows: type name, total workouts of that type, total calories for that type.
   Use .reduce() to group, then Object.entries() to iterate groups.
   Card HTML:
     <article class="card">
         <h3>TYPE NAME</h3>
         <p class="amount">X workouts</p>
         <p class="text-muted">Y kcal total</p>
     </article>
   If no workouts, show an empty state message.

   ==========================================
   HELPER (provided):
   ==========================================
   function refreshAll() {
       updateSummary();
       renderWorkouts();
       renderTypeSummary();
   }

   ==========================================
   Write your code below
   ==========================================
*/
