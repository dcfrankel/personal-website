$(document).ready(function() {
    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    })
})