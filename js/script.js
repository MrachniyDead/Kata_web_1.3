const readMore = document.querySelector('.services__forward');
const text = document.querySelector('.services__text');
const links = document.querySelectorAll('.services__link');

readMore.addEventListener('click', () => {
    text.classList.toggle('services__forward--active');
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((link) => {
            if (link.classList.contains('services__link--active')) {
                link.classList.remove('services__link--active');
            }
        });
        link.classList.add('services__link--active');
    });
});