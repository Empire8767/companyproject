// alert("Registration Open");
// script.js

function login() {
  var enteredEmail = document.getElementById("email").value;
  var enteredPassword = document.getElementById("password").value;

  // Retrieve stored data from localStorage
  var storedEmail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  // Check if entered credentials match stored credentials
  if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
    alert("Login successful!");
    // Redirect to the shopping page
    window.location.href = "Shoppy.html";
  } else {
    alert("Login failed. Please check your email and password.");
  }
}
