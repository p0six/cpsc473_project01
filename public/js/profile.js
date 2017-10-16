var dpd = window.dpd;

function Editable() {
  var x = 0;
  for (x = 0; x < 3; ++x) {
    var p = document.getElementsByClassName("my-profile")[x];
    var att = document.createAttribute("contenteditable");
    att.value = "true";
    p.setAttributeNode(att);
  }
  $(function() {
    $(".ok-button").css("visibility", "visible");
  });
  $(function() {
    $(".edit-button").css("visibility", "hidden");
  });
}

function NotEditable() {
  for (x = 0; x < 3; ++x) {
    var p = document.getElementsByClassName("my-profile")[x];
    var att = document.createAttribute("contenteditable");
    att.value = "false";
    p.setAttributeNode(att);
  }
  $(function() {
    $(".edit-button").css("visibility", "visible");
  });
  $(function() {
    $(".ok-button").css("visibility", "hidden");
  });
  saveProfile();
}

function updateProfile() {
  dpd.users.me(function(user) {
    if (user) {
      $('#fName').text(user.firstName);
      $('#lName').text(user.lastName);
      $('#phoneNumber').text(user.phoneNumber);
      console.log(user.username);
      console.log(user.lastName);
    } else {
      alert("No user");
    }
  });
}

function saveProfile() {
  var fName = $('#fName').html();
  var lName = $('#lName').html();
  var pNumber = $('#phoneNumber').html();
  dpd.users.me(function(user) {
    if (user) {
    dpd.users.put(
      user.id, {
        firstName: fName,
        lastName: lName,
        phoneNumber: pNumber
      }, function (){});
    } else {
      alert("No user");
    }
  })
}

$("#profileImage").click(function(e) {
    $("#imageUpload").click();
});

function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#profileImage').attr('src',
             window.URL.createObjectURL(uploader.files[0]) );
    }
}

$("#imageUpload").change(function(){
    fasterPreview( this );
});
$('.edit-button').click(function() {
  $(".my-profile").focus()
});
$('.ok-button').click(function() {
  $(".my-profile").focus()
});
