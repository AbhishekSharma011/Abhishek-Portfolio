// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50, // Adjust scroll position to account for fixed header
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑ Back to Top";
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

// Show/Hide Back to Top Button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top on button click
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Animations (fade-in effect)
const elementsToAnimate = document.querySelectorAll('.fade-in');

function handleScrollAnimation() {
    elementsToAnimate.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // Initial check in case the elements are already in view

