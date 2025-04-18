    const toggleBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });