$(document).ready(function() {
  var myHook = this;
  console.log('document loaded');
  $('.carousel_class').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true
  });

  $('.event').click(function() {
    var eventTime = new Date($(this).data('event-start'));
    $('#eventModalBody').html($(this).data('event-description'));
    $('#eventModalTitle').html(this.title + ' - ' + eventTime.toLocaleString());
  });
});
