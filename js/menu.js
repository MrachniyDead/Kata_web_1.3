const linksMenu = document.querySelectorAll('.menu__link');

const langsMenu = document.querySelectorAll('.menu__lang-btn');

const burger = document.querySelector('.burger');

linksMenu.forEach((link) => {
    link.addEventListener('click', () => {
        linksMenu.forEach((link) => {
            if (link.classList.contains('menu__link--active')) {
                link.classList.remove('menu__link--active');
            }
        });
        link.classList.add('menu__link--active');
    });
});

langsMenu.forEach((link) => {
    link.addEventListener('click', () => {
        langsMenu.forEach((link) => {
            if (link.classList.contains('menu__lang-btn--active')) {
                link.classList.remove('menu__lang-btn--active');
            }
        });
        link.classList.add('menu__lang-btn--active');
    });
});

burger.addEventListener("click", () => {
    if (burger.classList.contains('burger--active')) {
        burger.classList.remove('burger--active');
    } else {
        burger.classList.add('burger--active');
    }  
});