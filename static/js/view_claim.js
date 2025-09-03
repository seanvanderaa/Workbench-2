document.addEventListener("DOMContentLoaded", () => {
  const briefBtn = document.getElementById("brief-summary-btn");
  const detailedBtn = document.getElementById("detailed-summary-btn");
  const briefContent = document.getElementById("brief-summary-content");
  const detailedContent = document.getElementById("detailed-summary-content");

  function toggleSummary(showBrief) {
    if (showBrief) {
      // Button states
      briefBtn.classList.add("active");
      detailedBtn.classList.remove("active");

      // Content visibility
      briefContent.classList.remove("hidden");
      detailedContent.classList.add("hidden");
    } else {
      detailedBtn.classList.add("active");
      briefBtn.classList.remove("active");

      detailedContent.classList.remove("hidden");
      briefContent.classList.add("hidden");
    }
  }

  // Attach event listeners
  briefBtn.addEventListener("click", () => toggleSummary(true));
  detailedBtn.addEventListener("click", () => toggleSummary(false));

  // Initialize default view (brief visible, detailed hidden)
  toggleSummary(true);

  const headers = document.querySelectorAll(".fact-source-header");

  headers.forEach(header => {
    header.addEventListener("click", (e) => {
      const wrapper = header.closest(".fact-source-wrapper");
      const content = wrapper.querySelector(".fact-source-content");
      const chevron = header.querySelector(".bi-chevron-down");

      if (e.target.closest("a")) return;

      content.classList.toggle("hidden");
      chevron.classList.toggle("rotate-180");
    });
  });

  const overlay = document.getElementById('overlay');
  const openSourcesBtn = document.getElementById('open-sources-btn');
  const closeSourcesBtn = document.getElementById('close-sources-btn');
  const rateModelBtn = document.getElementById('rate-model-btn');
  const sourcesSidepanel = document.getElementById('sources-sidepanel');
  const modelRatingModal = document.getElementById('rate-modal-wrapper');
  const closeModelRatingModal = document.getElementById('close-model-report-btn');

  openSourcesBtn.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    sourcesSidepanel.classList.toggle('active');
  });

  closeSourcesBtn.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    sourcesSidepanel.classList.toggle('active');
  });

  rateModelBtn.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    modelRatingModal.classList.toggle('hidden');
  });

  closeModelRatingModal.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    modelRatingModal.classList.toggle('hidden');
  });

  // Close sources when clicking outside the sidepanel (including on the overlay)
  document.addEventListener('click', (e) => {
    if (!sourcesSidepanel.classList.contains('active')) return;

    const clickedInsidePanel = sourcesSidepanel.contains(e.target);
    const clickedOpenBtn = openSourcesBtn.contains(e.target);

    if (!clickedInsidePanel && !clickedOpenBtn) {
      sourcesSidepanel.classList.remove('active');
      overlay.classList.add('hidden');
    }
  });

  const form = document.querySelector("#rate-modal-wrapper form");
  const ratingRadios = form.querySelectorAll('input[name="rating"]');
  const textarea = form.querySelector("#problem_content");
  const submitBtn = form.querySelector("#submit-report-btn");

  function updateButtonState() {
    const ratingPicked = [...ratingRadios].some(r => r.checked);
    const hasContent = textarea.value.trim().length > 0;

    if (ratingPicked && hasContent) {
      submitBtn.classList.remove("disabled");
    } else {
      submitBtn.classList.add("disabled");
    }
  }

  // Listen for changes
  ratingRadios.forEach(radio => {
    radio.addEventListener("change", updateButtonState);
  });
  textarea.addEventListener("input", updateButtonState);

  // Run once on load to set the correct state
  updateButtonState();
});
