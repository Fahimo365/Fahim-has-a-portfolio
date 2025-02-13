// Smooth Scrolling Effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Hero Text Animation
const heroText = document.querySelector('.hero h2');
const texts = ["Sales Development Representative", "Expert in Lead Generation", "Closing Deals with Strategy"];
let index = 0;

function changeText() {
    heroText.style.opacity = 0;
    setTimeout(() => {
        heroText.textContent = texts[index];
        heroText.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 500);
}
setInterval(changeText, 3000); 

// Sticky Navbar Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
