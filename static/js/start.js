const textarea = document.getElementById("claim-input");
const startSubmitBtn = document.getElementById("start-submit-btn");

function toggleSubmitState() {
    if (textarea.value.trim().length >= 50) {
        startSubmitBtn.classList.remove("disabled");
        startSubmitBtn.disabled = false; // ensure it's truly clickable
    } else {
        startSubmitBtn.classList.add("disabled");
        startSubmitBtn.disabled = true;
    }
}

textarea.addEventListener("input", () => {
  textarea.style.height = "auto"; // Reset height so shrinking works
  textarea.style.height = Math.min(textarea.scrollHeight, window.innerHeight * 0.5) + "px";
  toggleSubmitState()
});