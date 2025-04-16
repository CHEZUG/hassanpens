document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});
