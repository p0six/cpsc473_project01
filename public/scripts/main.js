$(document).ready(function() {
  console.log('document loaded');
  $('.carousel_class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true
  });
  var calendar = $("#calendar").calendar({
    tmpl_path: "/tmpls/",
    events_source: function () { return []; }
  });

});

$(window).on("load", function() {
  console.log("window loaded.  no use for this yet");
});
