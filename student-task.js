// =========================
// Task 1 — Variables & Data Types
// =========================

// Can change -> let
let firstName = "Bakare";
let lastName = "Femi";
let age = 20;
let isEnrolled = true;

// Should never change -> const
const studentId = "STU-00123";
const gpa = 3.8;

// Graduation date starts as null
let graduationDate = null;

// Log all variables with labels
console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("age:", age);
console.log("studentId:", studentId);
console.log("gpa:", gpa);
console.log("isEnrolled:", isEnrolled);
console.log("graduationDate:", graduationDate);

// Reassign firstName to a nickname
firstName = "John";

// Log again after reassignment
console.log("firstName (updated nickname):", firstName);

// =========================
// Task 2 — Operators
// =========================

let totalScore = 0;
console.log("Step 1 - initial totalScore:", totalScore);

// Add 45 (first test)
totalScore += 45;
console.log("Step 2 - after adding first test (45):", totalScore);

// Add 30 (second test)
totalScore += 30;
console.log("Step 3 - after adding second test (30):", totalScore);

// Deduct 5 due to an error
totalScore -= 5;
console.log("Step 4 - after deducting error (5):", totalScore);

// Double the score for a bonus round
totalScore *= 2;
console.log("Step 5 - after doubling for bonus round:", totalScore);

// Add 1 point using the increment operator
totalScore++;
console.log("Step 6 - after incrementing by 1 (++):", totalScore);

// Remainder when divided by 7
console.log("Final remainder (totalScore % 7):", totalScore % 7);

// =========================
// Task 3 — Type Conversion
// =========================

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// Convert studentAge to a whole number
// Why Number(): "19" is a whole number string already, so Number() gives 19 (number).
studentAge = Number(studentAge);

// Convert examScore to a decimal number
// Why Number(): "74.5" needs to become a decimal number, and Number() handles it directly.
examScore = Number(examScore);

// Convert passMark using Number()
// Why Number(): "50" is numeric text; Number() converts it to the number 50.
passMark = Number(passMark);

// Convert studentName to a string
// Why String(): ensures even numbers become a string reliably.
studentName = String(studentName);

// Log the type and value of each after conversion
console.log("studentAge type:", typeof studentAge, "| value:", studentAge);
console.log("examScore type:", typeof examScore, "| value:", examScore);
console.log("passMark type:", typeof passMark, "| value:", passMark);
console.log("studentName type:", typeof studentName, "| value:", studentName);

// Check if examScore > passMark and log the boolean result
console.log("examScore > passMark:", examScore > passMark);

// =========================
// Task 4 — Conditional Statements (if / else if / else)
// =========================

function gradeScore(score) {
  let grade;

  if (score >= 70) {
    grade = "A — Distinction";
  } else if (score >= 60) {
    grade = "B — Merit";
  } else if (score >= 50) {
    grade = "C — Pass";
  } else if (score >= 40) {
    grade = "D — Near Pass";
  } else {
    grade = "F — Fail";
  }

  console.log(`Score: ${score} | Grade: ${grade}`);
}

// Test with at least 3 different scores.
// Comment out previous runs so all are visible (only one should be active at a time).

// Test 1:
gradeScore(73);

// Test 2:
// gradeScore(65);

// Test 3:
// gradeScore(38);
