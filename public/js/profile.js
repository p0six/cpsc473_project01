var dpd = window.dpd;

//Allows the property cells to be editable
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

//Remove the ability to edit properties
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

//Update the profile tab when clicked.
function updateProfile() {
  var profileDisplay = document.getElementById("profileSettings");
  profileDisplay.style.display = "block";
  var imageURL;
  dpd.users.me(function(user) {
    if (user) {
      $('#fName').text(user.firstName);
      $('#lName').text(user.lastName);
      $('#phoneNumber').text(user.phoneNumber);
      if (user.profilePhoto != null) {
      imageURL = user.profilePhoto;
      console.log(imageURL);
      document.getElementById("profileImage").src = imageURL;
    }
    }
  });
}

//Hides profile items onclick of other tabs.
function hideProfile() {
  console.log("hideProfile called");
  var profileDisplay = document.getElementById("profileSettings");
  profileDisplay.style.display = "none";
}

//Saves profile data when clicking ok
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
    }
  });
}

$("#profileImage").click(function(e) {
    $("#imageUpload").click();
    saveImage();
});

//Saves profile picture upon upload
function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#profileImage').attr('src',
             window.URL.createObjectURL(uploader.files[0]) );
                 var fd = new FormData();
                     fd.append("uploadedFile", uploader.files[0]);
                 var xhr = new XMLHttpRequest();
                 xhr.open('POST', '/event-images?subdir=profileImages&uniqueFilename=true');
                 xhr.onload = function() {
                     var response = JSON.parse(this.responseText);
                     var x = "/upload/profileImages/" + response[0].filename;
                     dpd.users.me(function(user) {
                       if (user) {
                       dpd.users.put(
                         user.id, {
                           profilePhoto: x
                         }, function (){});
                       }
                     });
                 };
                 xhr.send(fd);
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
