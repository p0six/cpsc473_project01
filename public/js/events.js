/* global $ */
var dpd = window.dpd;

//set up datetimepicker
$('.form_datetime').datetimepicker({
  format: 'yyyy-mm-dd hh:ii'
});

$('#showEvent').click(function() {
  $('#attending-modal').modal('hide');
  $('#eventModal').modal('show');
});

var rg_owner;
var rg_img_url = '/upload/default-no-image.png';

$('#submitEvent').click(function() {
  var startDate = new Date($('#event_start').val());
  var endDate = new Date($('#event_end').val());

  var rg_title = $('#event_title').val();
  var rg_description = $('#event_description').val();
  var rg_address = $('#event_address').val();
  var rg_city = $('#event_city').val();
  var rg_state = $('#event_state').val();
  var rg_zip = parseInt($('#event_zip').val());
  var rg_start = startDate.getTime();
  var rg_end = endDate.getTime();

  dpd.users.me(function(result, error) {
    if (error || !result) {
      swal({
        title: 'Error Posting Event!',
        text: JSON.stringify(error),
        type: 'error',
        confirmButtonText: 'Cool'
      })
    } else {
      rg_owner = result.id;
      //if user is logged in, post
      dpd.events.post({
        ownerId: rg_owner,
        title: rg_title,
        description: rg_description,
        start: rg_start,
        end: rg_end,
        streetAddress: rg_address,
        city: rg_city,
        statePrefix: rg_state,
        zip: rg_zip,
        eventImage: rg_img_url
      }, function(result, error) {
        if (error)
          swal({
            title: 'Error Posting Event!',
            text: JSON.stringify(error),
            type: 'error',
            confirmButtonText: 'Cool'
          })
        else
          dpd.attendance.post({
            eventId: result.id,
            userId: rg_owner
          });
        $('#event-modal').modal('hide');
        swal({
          title: 'Event Successfully Added!',
          text: 'Now go invite some friends!',
          type: 'success',
          confirmButtonText: 'Cool'
        })
      });
    }
  });
  console.log('return');
});


var files = [];
var uploadFiles = function() {
  var fd = new FormData()
  for (var i in files) {
    fd.append('uploadedFile', files[i])
  }
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/event-images?subdir=eventImages&uniqueFilename=true');
  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    console.log(response);
  };
  xhr.send(fd);

  swal({
    title: 'Image Uploaded Successfully!',
    text: 'Horray!',
    type: 'success',
    confirmButtonText: 'Cool'
  })

  //get image url
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status === 200) {
        document.body.classname = 'ok';
        var res = JSON.parse(req.responseText);
        var target = res[res.length - 1].filename;
        rg_img_url = '/upload/eventImages/' + target;
      } else {
        document.body.classname = 'error';
      }
    }
  };
  req.open('get', '/event-images', true);
  req.send(null);
};

var setFiles = function(element) {
  console.log('files:', element.files);
  // Turn the FileList object into an Array
  files = [];
  for (var i = 0; i < element.files.length; i++) {
    files.push(element.files[i]);
  }
};

var deleteFile = function(element, id) {
  $(element).closest('tr').remove();
  dpd.upload.del(id, function(data, status) {
    $('.alert-success').show();
    $('.alert-success').append('File removed!');
  });
};
