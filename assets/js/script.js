
const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.navbar-menu a');


toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggleBtn.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggleBtn.classList.remove('active');
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});