
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
    anchor.addEventListener('click', function (e) {
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



// ANIMAÇÃO PARA ITENS (Scroll + Delay)
function animateItems() {
    const items = document.querySelectorAll('[data-anime]');
    const windowHeight = window.innerHeight * 0.98;

    items.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const isVisible = (itemTop - windowHeight) < 0;

        if (isVisible) {

            setTimeout(() => {
                item.classList.add('animate');
            }, 100 * index);
        }
    });
}


window.addEventListener('load', animateItems);
window.addEventListener('scroll', animateItems);