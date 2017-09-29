$(document).ready(function() {
  console.log('document loaded');
  $('.carousel_class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true
  });
});

$(window).on("load", function() {
  console.log("window loaded");
});
