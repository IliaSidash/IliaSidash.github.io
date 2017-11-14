$(function () {
    $('.header__arrow').on('click', function (e) {
        e.preventDefault();
        var section = $('.move');
        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1000);
    });
});