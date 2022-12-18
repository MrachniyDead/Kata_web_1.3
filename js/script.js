document.addEventListener('DOMContentLoaded', () => {

// aside
const linksMenu = document.querySelectorAll('.menu__link');
const langsMenu = document.querySelectorAll('.menu__lang-btn');
const burger = document.querySelectorAll('.burger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const underlay = document.querySelector('.underlay');

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

burger.forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle('menu--active');
        container.classList.toggle('container--active');
        underlay.classList.toggle('underlay--active');
    });
});

underlay.addEventListener('click', () => {
    if (container.classList.contains('container--active')) {
        menu.classList.toggle('menu--active');
        container.classList.toggle('container--active');
        underlay.classList.toggle('underlay--active');
    }
});


// promo
const forwardPromo = document.querySelector('[data-forward="promo"]');

const text = document.querySelector('.promo__text');
const linksServices = document.querySelectorAll('.promo__link');

forwardPromo.addEventListener('click', () => {
    if (window.innerWidth < 1000) {
        text.classList.toggle('promo__text--active');
        forwardPromo.classList.toggle('link__forward--active');
    }
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

// brands
const forwardBrands = document.querySelector('[data-forward="brands"]');
const brandCards = document.querySelector('.brands__cards');

forwardBrands.addEventListener('click', () => {
    console.log('done');
    forwardBrands.classList.toggle('link__forward--active');
    brandCards.classList.toggle('brands__cards--active');
});

// slider
const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 540 && slider.dataset.mobile === 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 'auto',
			spaceBetween: 16, 
			loop: true,
			slideClass: 'brands__card',
            wrapperClass: 'brands__cards',

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 540 && slider.classList.contains('swiper-initialized')) {
		slider.dataset.mobile = 'false';
		mySwiper.destroy();
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});
});




