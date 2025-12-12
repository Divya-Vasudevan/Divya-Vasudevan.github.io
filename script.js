document.addEventListener("DOMContentLoaded", () => {
  const primaryAction = document.querySelector("#primary-action");
  const ctaButton = document.querySelector("#cta-button");

  const modal = document.querySelector("#competition-modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");

  const openModal = () => {
    if (modal) {
      modal.setAttribute("aria-hidden", "false");
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.setAttribute("aria-hidden", "true");
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  primaryAction?.addEventListener("click", () => {
    openModal();
  });

  modalClose?.addEventListener("click", () => {
    closeModal();
  });

  modalOverlay?.addEventListener("click", () => {
    closeModal();
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeModal();
    }
  });

  ctaButton?.addEventListener("click", () => {
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  });
});

