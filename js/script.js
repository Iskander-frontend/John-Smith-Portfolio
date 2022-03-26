var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
        delay: 25000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});