$(function () {
    $('.slider__list').slick({
        prevArrow: $('.slider-arrows__left'),
        nextArrow: $('.slider-arrows__right'),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'slider-dots'
    });

    
});
