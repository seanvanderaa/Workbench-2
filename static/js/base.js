document.addEventListener("DOMContentLoaded", () => {
  // Select all project wrappers
  const projectWrappers = document.querySelectorAll(".prev-proj-wrapper");
  const overlay = document.getElementById('overlay');

  projectWrappers.forEach(wrapper => {
    const header = wrapper.querySelector(".sidebar-action");
    const claims = wrapper.querySelector(".hidden-proj-claims");
    const icon = wrapper.querySelector("i");

    if (header && claims) {
      header.addEventListener("click", () => {
        claims.classList.toggle("hidden");

        // Optional: rotate the chevron icon
        if (icon) {
          icon.classList.toggle("rotate-180");
        }
      });
    }
  });

  const reportBtn = document.getElementById('report-a-problem');
  const reportModal = document.getElementById('report-a-problem-modal');

  reportBtn.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    reportModal.classList.toggle('hidden');
  });

  const closeReportBtn = document.getElementById('close-report-btn');

  closeReportBtn.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    reportModal.classList.toggle('hidden');
  });

  const textarea = document.getElementById("problem_content");
  const reportSubmitBtn = document.getElementById("submit-report-btn");

  function toggleSubmitState() {
      if (textarea.value.trim().length >= 50) {
          reportSubmitBtn.classList.remove("disabled");
          reportSubmitBtn.disabled = false; // ensure it's truly clickable
      } else {
          reportSubmitBtn.classList.add("disabled");
          reportSubmitBtn.disabled = true;
      }
  }

  // Run once on page load
  toggleSubmitState();

  // Check on every input
  textarea.addEventListener("input", toggleSubmitState);

  const userBtn = document.getElementById('user-info-wrapper');
  const userMenu = document.getElementById('user-menu');
  const userBtnChev = document.getElementById('user-info-chev');

  userBtn.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
    userBtnChev.classList.toggle('rotate-180');
  })
});