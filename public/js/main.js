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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6274ab6fe716020679acf97755af7951c98aa9d3
});
