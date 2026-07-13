document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".abstract-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const paper = button.closest(".paper");
      const abstract = paper ? paper.querySelector(".abstract-content") : null;
      if (!abstract) return;

      const isOpen = abstract.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
});
