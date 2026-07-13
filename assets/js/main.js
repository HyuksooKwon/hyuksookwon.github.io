document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".current-year").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll(".profile-img").forEach((image) => {
    image.addEventListener("error", () => {
      const fallback = image.dataset.fallback;
      if (fallback && image.src !== fallback && !image.dataset.fallbackTried) {
        image.dataset.fallbackTried = "true";
        image.src = fallback;
        return;
      }
      image.classList.add("image-missing");
    });
  });

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