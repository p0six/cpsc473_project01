$('#submitEvent').click(function(){
      //e.preventDefault();
      alert("button was clicked");
      var $rg_owner = "1";
      var $rg_title = $('#event_title').val();
      var $rg_description = $('#event_description').val();
      var $rg_address = $('#event_address').val();
      var $rg_city = $('#event_city').val();
      var $rg_state = $('#event_state').val();
      var $rg_zip = parseInt($('#event_zip').val());
      var $rg_start = $('#event_start').val();
      var $rg_end = $('#event_end').val();

/*      POST /events
      {
        "ownerId": "1",
        "title": $rg_title,
        "description": $rg_description
        "start": $rg_start,
        "end": $rg_end,
        "address": $rg_address,
        "city": $rg_city,
        "statePrefix": $rg_state,
        "zip": int($rg_zip)
      }
      */
      //alert($rg_address);
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
          if (error) {
            alert("fail");
            alert(JSON.stringify(error));
          }
          else{
            alert("success");
          }
      });

      /*
      $.post('http://path/to/post',
         $('#myForm').serialize(),
         function(data, status, xhr){
           // do something here with response;
         });
      */
});
