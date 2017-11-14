$(function(){
    $('.contacts__icon').on('click', function () {
        $('#popup').arcticmodal({
            overlay: {
                css: {
                    backgroundImage: 'url(../../images/feedback-bg.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 0',
                    opacity: .75
                }
            }
        });
    });
});