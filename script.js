const textarea = document.querySelector("#note");

// Save the note to local storage when the user leaves the page
window.addEventListener("beforeunload", function(event) {
  localStorage.setItem("note", textarea.value);
});

// Load the saved note when the page loads
document.addEventListener("DOMContentLoaded", function() {
  textarea.value = localStorage.getItem("note") || "";
});
