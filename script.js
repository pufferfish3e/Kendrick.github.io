const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const scrollLinks = document.querySelectorAll('.scroll-link');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default jump

        const id = link.getAttribute('href'); // Get the ID of the target element
        const targetElement = document.querySelector(id); // Select the target element

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Scroll to the top of the target element
                behavior: 'smooth' // Smooth scroll effect
            });
        }

        menu.classList.remove('show'); // Close the menu after scrolling
    });
});



const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});