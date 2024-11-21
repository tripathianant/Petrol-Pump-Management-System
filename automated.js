// Function to calculate the quantity of fuel based on the amount entered
function calculateQuantity(fuelType) {
  let amount =
    parseFloat(document.getElementById(`${fuelType}-amount`).value) || 0; // Default to 0 if empty or invalid
  let price = 0;

  // Determine the price per litre based on fuel type
  if (fuelType === "petrol") {
    price = 90.0; // Price of Petrol per litre
  } else if (fuelType === "diesel") {
    price = 80.0; // Price of Diesel per litre
  } else if (fuelType === "cng") {
    price = 50.0; // Price of CNG per kg
  }

  // Calculate the quantity the consumer can get for the entered amount
  let quantity = amount / price;

  // Update the quantity for the selected fuel type
  document.getElementById(`${fuelType}-quantity`).textContent =
    quantity.toFixed(2);

  // Recalculate and update the overall total amount
  updateTotalAmount();
}

// Function to update the overall total amount based on the quantities selected
function updateTotalAmount() {
  // Get the amount entered for each fuel type. Default to 0 if empty or invalid.
  let petrolAmount =
    parseFloat(document.getElementById("petrol-amount").value) || 0;
  let dieselAmount =
    parseFloat(document.getElementById("diesel-amount").value) || 0;
  let cngAmount = parseFloat(document.getElementById("cng-amount").value) || 0;

  // Calculate the total amount
  let totalAmount = petrolAmount + dieselAmount + cngAmount;

  // Update the total amount displayed on the page
  document.getElementById("total-amount-value").textContent =
    totalAmount.toFixed(2);
}
