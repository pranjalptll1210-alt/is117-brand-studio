"use strict";

(() => {
  document.querySelectorAll(".product-gallery").forEach((gallery) => {
    const controls = gallery.querySelector(".gallery-controls");
    const image = gallery.querySelector(".shirt-image");
    const caption = gallery.querySelector(".gallery-caption");
    const buttons = [...controls.querySelectorAll("[data-view]")];
    controls.hidden = false;
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        image.src = button.dataset.src;
        image.alt = button.dataset.alt;
        const view = button.dataset.view;
        caption.textContent = `${view[0].toUpperCase()}${view.slice(1)} / AI-generated concept mockup.`;
        buttons.forEach((choice) => {
          choice.setAttribute("aria-pressed", String(choice === button));
        });
      });
    });
  });
})();
