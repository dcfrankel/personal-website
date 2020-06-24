$(document).ready(function() {
    // Scroll to top button
    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });
    
    // Scroll slowly to reference when dropdown clicked
    $('.dropdown-content a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000)
    });
     
    // Get those cool fade in animations for elements
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
})