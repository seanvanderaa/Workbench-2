document.addEventListener("DOMContentLoaded", () => {
  const claims = document.querySelectorAll(".select-claim");
  const form = document.getElementById("claim-selection-form");
  const submitBtn = form.querySelector("button");

  // Disable button initially
  submitBtn.classList.add("disabled");
  submitBtn.disabled = true;

  claims.forEach((claim, index) => {
    claim.addEventListener("click", () => {
      // Toggle active class
      claim.classList.toggle("active");

      updateFormInputs();
      updateButtonState();
    });
  });

  function updateFormInputs() {
    // Remove existing hidden inputs
    form.querySelectorAll("input[name='claims[]']").forEach(input => input.remove());

    // Add hidden inputs for active claims
    document.querySelectorAll(".select-claim.active").forEach(claim => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "claims[]";
      input.value = claim.textContent.trim();
      form.appendChild(input);
    });
  }

  function updateButtonState() {
    const anySelected = document.querySelector(".select-claim.active");
    if (anySelected) {
      submitBtn.classList.remove("disabled");
      submitBtn.disabled = false;
    } else {
      submitBtn.classList.add("disabled");
      submitBtn.disabled = true;
    }
  }
});
