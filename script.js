let currentStep = "index";

function goToStep(step) {
  currentStep = step;
  // Update UI based on currentStep
  // ...
}

// Handle navigation between steps
const indexButton = document.getElementById("indexButton");
const registerButton = document.getElementById("registerButton");
const dashboardButton = document.getElementById("dashboardButton");
const wasteSelectionButton = document.getElementById("wasteSelectionButton");
const addressButton = document.getElementById("addressButton");
const confirmationButton = document.getElementById("confirmationButton");

indexButton.addEventListener("click", () => goToStep("index"));
registerButton.addEventListener("click", () => goToStep("register"));
dashboardButton.addEventListener("click", () => goToStep("dashboard"));
wasteSelectionButton.addEventListener("click", () => goToStep("waste-selection"));
addressButton.addEventListener("click", () => goToStep("address"));
confirmationButton.addEventListener("click", () => goToStep("confirmation"));