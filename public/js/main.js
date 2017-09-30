$(document).ready(function() {
  console.log('document loaded');
  $('.carousel_class').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true
  });
});
