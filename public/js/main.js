$(document).ready(function() {
  console.log('document loaded');
  // Login Buttons
  dpd.users.me(function(user) {
    if (user) {
      $('#signInButton').hide();
      $('#logOutButton').show();
    } else {
      $('#signInButton').show();
      $('#logOutButton').hide();
    }
  });

  $('#attending').click(function() {
    id = $(this).attr('data-eventid');
    alert(id);
  });

  // Carousel
  $('.carousel_class').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true
  });
});
