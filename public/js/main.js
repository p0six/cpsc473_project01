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
    document.getElementById("placehere").appendChild(elem);
    //add divs and shit to populate the modal
    //$('.modalHeader').html($(this).data('event-title'));
    //$('#eventModalBody').html($(this).data('event-description'));
    //document.getElementById("eventModalTitle").innerHTML = "Public Offers";
    //$('#eventModalBody').html($(this).data('event-description'));
    //$('#eventModalLocation').html($(this).data('event-streetAddress'));
  });
});
