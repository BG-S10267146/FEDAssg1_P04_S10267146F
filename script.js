// Select the menu toggle button, navigation menu, and overlay
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const overlay = document.createElement('div');

// Create and append overlay to the body
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Add click event listener to the toggle button
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close dropdown when clicking outside
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
});



