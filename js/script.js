const readMore = document.querySelector('.services__forward');
const text = document.querySelector('.services__text');
const links = document.querySelectorAll('.services__link');

readMore.addEventListener('click', () => {
    text.classList.toggle('active-forward');
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((link) => {
            if (link.classList.contains('active-link')) {
                link.classList.remove('active-link');
            }
        });
        link.classList.add('active-link');
    });
});