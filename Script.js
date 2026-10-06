// =========================================
// Srigiri Sree Pallavi Portfolio
// JavaScript File
// =========================================


// Get the year element from HTML
const yearElement = document.getElementById("year");


// Check whether the element exists
if (yearElement) {

  // Display the current year automatically
  yearElement.textContent = new Date().getFullYear();

}
