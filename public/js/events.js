var user_id;
//set up datetimepicker
$(".form_datetime").datetimepicker({
  format: 'yyyy-mm-dd hh:ii'
});

$('#showEvent').click(function() {
	$('#attending-modal').modal('hide');
	$('#eventModal').modal('show');
});

$('#submitEvent').click(function() {
	var startDate = new Date($('#event_start').val());
	var endDate = new Date($('#event_end').val())

  var $rg_title = $('#event_title').val();
  var $rg_description = $('#event_description').val();
  var $rg_address = $('#event_address').val();
  var $rg_city = $('#event_city').val();
  var $rg_state = $('#event_state').val();
  var $rg_zip = parseInt($('#event_zip').val());
	var $rg_start = startDate.getTime();
  var $rg_end = endDate.getTime();

  dpd.users.me(function(result, error) {
    if (error || !result) {
      alert(JSON.stringify(error));
    } else {
      //if user is logged in, post
      dpd.events.post({
        ownerId: result.id,
        title: $rg_title,
        description: $rg_description,
        start: $rg_start,
        end: $rg_end,
        streetAddress: $rg_address,
        city: $rg_city,
        statePrefix: $rg_state,
        zip: $rg_zip
      }, function(result, error) {
        if (error)
          alert(JSON.stringify(error));
        else
					//if successfully added event, add owner to list of attendees
					//using return from post
					dpd.attendance.post({
						eventId: result.id,
						userId: $rg_owner
					})
          $('#event-modal').modal('hide');
        alert("Event Added!");
      });
    }
  });
  console.log("return");

});
