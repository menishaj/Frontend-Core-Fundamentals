// Define variables
const menuToggle = document.querySelector(".menu-toggle");

// Toggle menu visibility when menu toggle button is clicked
menuToggle.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);
  menu.setAttribute("aria-hidden", expanded);
});

