$(function() {
  $('.sidebar a').each(function() {
    $(this).on('click', function(e) {
    e.preventDefault();
    var scrollTo = $(this).attr('href');
    var whitespace = scrollTo == '#dom' ? 170 : 30;
    $('html,body').animate({
      scrollTop: $(scrollTo).offset().top - whitespace
    }, 1000);
  });
});
});
