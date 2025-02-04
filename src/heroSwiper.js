// Initialize Swiper

const swiper = new Swiper('.hero-swiper', {
    effect: 'slide',
    loop: true,
    speed: 1000,
    // autoplay: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Optional sliding configurations
    slidesPerView: 1,  // Show one slide at a time
    spaceBetween: 0,   // No space between slides
    centeredSlides: true,

    // For smooth sliding
    grabCursor: true,
    mousewheel: false,
    keyboard: {
        enabled: true,
    }
});
