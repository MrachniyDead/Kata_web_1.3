const readMore = document.querySelector('.promo__forward');
const text = document.querySelector('.promo__text');
const linksServices = document.querySelectorAll('.promo__link');



readMore.addEventListener('click', () => {
    text.classList.toggle('promo__forward--active');
});

linksServices.forEach((link) => {
    link.addEventListener('click', () => {
        linksServices.forEach((link) => {
            if (link.classList.contains('promo__link--active')) {
                link.classList.remove('promo__link--active');
            }
        });
        link.classList.add('promo__link--active');
    });
});

