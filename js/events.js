var $rg_owner;
var getId = function ()
{
	dpd.users.me(function(result, error) {

	  console.log("dpd users" + result.id);
      if (error) {
        alert(JSON.stringify(error));	
	  }
      else {
        $rg_owner = result.id;
	    console.log("OWNER1: " + $rg_owner);
		postEvent();
	  }
    });
	console.log("return");
};

var postEvent = function ()
{
  var $rg_title = $('#event_title').val();
  var $rg_description = $('#event_description').val();
  var $rg_address = $('#event_address').val();
  var $rg_city = $('#event_city').val();
  var $rg_state = $('#event_state').val();
  var $rg_zip = parseInt($('#event_zip').val());
  var $rg_start = $('#event_start').val();
  var $rg_end = $('#event_end').val();
	
  dpd.events.post({
    ownerId: $rg_owner,
    title: $rg_title,
    description: $rg_description,
    start: $rg_start,
    end: $rg_end,
    streetAddress: $rg_address,
    city: $rg_city,
    statePrefix: $rg_state,
    zip: $rg_zip
  }, function(events, error) {
    if (error)
      alert(JSON.stringify(error));
    else
      alert("Event Added!");
  });
};

$('#submitEvent').click(function() {
  //getId();
  var $rg_title = $('#event_title').val();
  var $rg_description = $('#event_description').val();
  var $rg_address = $('#event_address').val();
  var $rg_city = $('#event_city').val();
  var $rg_state = $('#event_state').val();
  var $rg_zip = parseInt($('#event_zip').val());
  var $rg_start = $('#event_start').val();
  var $rg_end = $('#event_end').val();
  
  dpd.users.me(function(result, error) {
    if (error) {
      alert(JSON.stringify(error));	
	}
    else {
      $rg_owner = result.id;
	  console.log("OWNER1: " + $rg_owner);
	//if user is logged in, post
	
	dpd.events.post({
    ownerId: $rg_owner,
    title: $rg_title,
    description: $rg_description,
    start: $rg_start,
    end: $rg_end,
    streetAddress: $rg_address,
    city: $rg_city,
    statePrefix: $rg_state,
    zip: $rg_zip
  }, function(events, error) {
    if (error)
      alert(JSON.stringify(error));
    else
      alert("Event Added!");
  });
	}
    });
	console.log("return");  
  
});
