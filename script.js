
// =========================================
// MELLOW — MAIN JAVASCRIPT
// =========================================

// Select the welcome button and message.
const welcomeButton = document.getElementById("welcome-button");
const welcomeMessage = document.getElementById("welcome-message");

// Display a message when the user clicks the button.
welcomeButton.addEventListener("click", function () {
  welcomeMessage.textContent = "Your fresh start begins now. ♡";
});
