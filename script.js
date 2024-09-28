// Toggle Navbar on Mobile View
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
