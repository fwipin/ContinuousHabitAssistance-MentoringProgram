document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".site-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("focus", () => {
      link.style.outline = "2px solid #25406d";
    });
    link.addEventListener("blur", () => {
      link.style.outline = "none";
    });
  });
});
