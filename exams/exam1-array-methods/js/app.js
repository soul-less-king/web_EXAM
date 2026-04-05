/* =================================
   Student Grade Analyzer
   Exam 1: Array Methods — 100 marks | 60 minutes
   =================================

   INSTRUCTIONS:
   - Write ALL your JavaScript code in this file
   - Do NOT use localStorage — use only a global array
   - Read index.html to find the element IDs you need
   - Open index.html with Live Server to test

   STUDENT DATA — Copy this array into your code:

   const students = [
       { id: 1,  name: "Sara Al-Mahmoud",    course: "Web Development",   grade: 88, status: "pass", semester: "Fall 2025" },
       { id: 2,  name: "Ahmed Hassan",        course: "Data Structures",   grade: 45, status: "fail", semester: "Fall 2025" },
       { id: 3,  name: "Fatima Al-Sayed",     course: "Web Development",   grade: 92, status: "pass", semester: "Spring 2026" },
       { id: 4,  name: "Omar Khalil",         course: "Databases",         grade: 71, status: "pass", semester: "Fall 2025" },
       { id: 5,  name: "Layla Ibrahim",       course: "Data Structures",   grade: 38, status: "fail", semester: "Spring 2026" },
       { id: 6,  name: "Youssef Nasser",      course: "Web Development",   grade: 95, status: "pass", semester: "Fall 2025" },
       { id: 7,  name: "Noura Al-Thani",      course: "Databases",         grade: 62, status: "pass", semester: "Spring 2026" },
       { id: 8,  name: "Khalid Mansour",      course: "Web Development",   grade: 41, status: "fail", semester: "Fall 2025" },
       { id: 9,  name: "Maryam Jaber",        course: "Data Structures",   grade: 78, status: "pass", semester: "Spring 2026" },
       { id: 10, name: "Ali Al-Rashid",       course: "Databases",         grade: 85, status: "pass", semester: "Fall 2025" },
       { id: 11, name: "Hessa Mohammed",      course: "Web Development",   grade: 33, status: "fail", semester: "Spring 2026" },
       { id: 12, name: "Rashed Al-Kuwari",    course: "Data Structures",   grade: 90, status: "pass", semester: "Fall 2025" }
   ];

   ==========================================
   QUESTIONS
   ==========================================

   Q1 (5 marks) — CSS Fix
   Open css/styles.css and fix the .dashboard-grid rule.
   The grid-template-columns property has a syntax error that prevents the grid from working.

   Q2 (12 marks) — updateSummary()
   Write a function updateSummary() that calculates and displays:
     - Total number of students → #total-students
     - Class average grade (rounded to 1 decimal) → #class-average (append "%")
     - Number of failing students (status === "fail") → #total-failing
     - Highest grade in the array → #highest-grade (append "%")
   Use .filter() and .reduce() on the students array.
   Color the class average: green if >= 60, red if < 60.

   Q3 (15 marks) — renderStudents()
   Write a function renderStudents() that displays all students in the table #student-body.
   Each row must show: name, course, semester, grade (with color), and status badge.
   - Grades >= 60 should have class "text-success", below 60 use "text-danger"
   - Status should display as a badge: <span class="badge badge-pass">PASS</span>
     or <span class="badge badge-fail">FAIL</span>
   - If no students match (after filtering), show an empty state message.
   - Call getFilteredStudents() inside renderStudents() to apply filters.
   Use .map() and .join("") to build the HTML.

   Q4 (12 marks) — getFilteredStudents()
   Write a function getFilteredStudents() that returns a filtered AND sorted copy of the students array.
   - Read the search term from #search — filter by name (case-insensitive, partial match)
   - Read the status filter from #filter-status — "all", "pass", or "fail"
   - Read the sort option from #sort-by:
       "name"       → sort alphabetically by name (A–Z) using .localeCompare()
       "grade-high" → sort by grade descending (highest first)
       "grade-low"  → sort by grade ascending (lowest first)
   Both search AND status filter must apply together.

   Q5 (10 marks) — Event Listeners
   Add event listeners so the table re-renders live:
     - "input" event on #search → call renderStudents()
     - "change" event on #filter-status → call renderStudents()
     - "change" event on #sort-by → call renderStudents()

   Q6 (15 marks) — renderTopPerformers()
   Write a function renderTopPerformers() that finds the top 3 students by grade
   and renders them in the #top-performers table.
   Each row should show: rank (1, 2, 3), name, course, and grade.
   Hint: sort a COPY of the array descending, then .slice(0, 3), then .map().

   Q7 (16 marks) — renderCourseSummary()
   Write a function renderCourseSummary() that groups students by course and
   displays a card for each course in #course-summary.
   Each card should show: course name, number of students, and average grade for that course.
   Use .reduce() to group by course, then Object.entries() to iterate the groups.
   Each card HTML:
     <article class="card">
         <h3>COURSE NAME</h3>
         <p class="amount">AVG%</p>
         <p class="text-muted">X students</p>
     </article>

   Q8 (15 marks) — refreshAll() + Initialization
   Write a function refreshAll() that calls:
     - updateSummary()
     - renderStudents()
     - renderTopPerformers()
     - renderCourseSummary()
   Call refreshAll() at the bottom of your script to initialize the page on load.

   ==========================================
   Write your code below
   ==========================================
*/
