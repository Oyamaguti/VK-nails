document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu-vertical');

    menuToggle.style.left = '0px';

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');

        if (menu.classList.contains('open')) {
            setTimeout(() => {
                menuToggle.style.left = '250px';
            }, 50);
        } else {
            menuToggle.style.left = '0px';
        }
    });
});
