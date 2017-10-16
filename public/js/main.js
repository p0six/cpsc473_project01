/* global $ */
var dpd = window.dpd;

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

  function initCarousel() {
    $('.carousel_class').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      swipe: true,
      swipeToSlide: true,
      touchMove: true,
    });
  }
  window.initCarousel = initCarousel;
  initCarousel();
});
