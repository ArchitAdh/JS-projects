// listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide Results
  document.getElementById("results").style.display = "none";

  //   show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 500);
  e.preventDefault();
});

// calculate result
function calculateResults() {
  //   UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //   compute Monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // Show Results
    document.getElementById("results").style.display = "block";

    //   hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please Check Your Numbers");
  }
}

// Show error
function showError(error) {
  //   hide loader
  document.getElementById("loading").style.display = "none";
  // Create a div
  const errorDiv = document.createElement("div");

  //   add class
  errorDiv.className = "alert alert-danger";

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //   insert error above heding
  card.insertBefore(errorDiv, heading);

  //insertBefore method: specify the parent where you want to add (card), takes two args, the element you want to add(erroDiv) and the element before which you want to add(heading)

  //   clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
