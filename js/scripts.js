// Find the 'count this' class on the page and animate it
$('.count-this').each(function () {

  // Start the counting from a specified number - in this case, 0!
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      // Speed of counter in ms, default animation style
      duration: 3000,
      // Easing function
      easing: 'swing',
      step: function (now) {
        // Round up the number
          $(this).text(Math.ceil(now));
      }
  });
});