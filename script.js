// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Optional: Close navigation menu when a link is clicked (for better mobile UX)
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove("show");
        }
    });
});

// Optional: Basic scroll to section with smooth behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // If it's a mobile view, close the menu after clicking a link
        if (window.innerWidth <= 768) {
            navMenu.classList.remove("show");
        }
    });
});