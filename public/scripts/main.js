
$(document).ready(function() {
  console.log('document loaded');
  $('.carousel_class').slick({
    dots: true,
    variableWidth: true
  });

});

$(window).on("load", function() {
  console.log("window loaded");
});
