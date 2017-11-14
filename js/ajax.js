$(function() {
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "../../php/mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#feedback-popup').arcticmodal();
            $("#form").trigger("reset");
        });
        $('#feedback-popup').arcticmodal();
        return false;
    });
    $("#form-callback").submit(function() {
        $('#popup').arcticmodal('close')
        $.ajax({
            type: "POST",
            url: "../../php/mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#callback-popup').arcticmodal({
                overlay: {
                    css: {
                        backgroundImage: 'url(../../images/feedback-bg.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 0',
                        opacity: .75
                    }
                }
            });
            $("#form").trigger("reset");

        });
        return false;
    });


});