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

  var calendar = $('#calendar').calendar({
    tmpl_path: '/tmpls/',
    modal: '#events-modal',
    events_source: '/testOutput.json'
  });
});
