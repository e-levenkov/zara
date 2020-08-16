import Swiper from 'swiper';

new Swiper('.swiper1', {
    mousewheel: true,
    keyboard: true,
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    debugger: true,
});
new Swiper('.swiper2', {
    autoHeight: true,

    mousewheel: true,
    keyboard: true,

    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    debugger: true,
});
