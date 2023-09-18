const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.is-next',
        prevEl: '.is-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        464: {
            slidesPerView: 3,
        },
        744: {
            slidesPerView: 3,
        },
        984: {
            slidesPerView: 4,
        },
        1248: {
            slidesPerView: 4,
            spaceBetween: 0,
        }
    }
});