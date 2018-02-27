// Find the 'count this' class on the page and animate it
$('.count-this').each(function () {
    // Start the counting from a specified number - in this case, 0!
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        // Speed of counter in ms, default animation style
        duration: 6000,
        // Easing function
        easing: 'swing',
        step: function (now) {
        // Round up the number
            $(this).text(Math.ceil(now));
        }
    });
});

// Płynne przewijanie scroll
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 900);
    }
});