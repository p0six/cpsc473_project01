/* global $ */
var dpd = window.dpd;

//recieves and checks user data against dpd data
//changes modal form and login - logout buttons
$(function() {

  var $formLogin = $('#login-form');
  var $formRegister = $('#register-form');
  var $divForms = $('#div-forms');
  var $modalAnimateTime = 300;
  var rg_img_url = '/upload/default-no-image.png';

  $('form').submit(function() {
    //Switch statment is based on what kind of login form
    switch (this.id) {
      case 'login-form':
        var $lg_username = $('#login_username').val();
        var $lg_password = $('#login_password').val();
        //compares login information
        dpd.users.login({
          username: $lg_username,
          password: $lg_password
        }, function(session, error) {
          if (error) {
            $('#login-fail-msg').text('Incorrect Username or Password');
          } else {
            $('#signInButton').hide();
            $('#logOutButton').show();
            $('#login-modal').modal('hide');
            updateProfile();
          }
        });
        break;
      case 'register-form':
        var $rg_username = $('#register_username').val();
        var $rg_fname = $('#register_fname').val();
        var $rg_lname = $('#register_lname').val();
        var $rg_password = $('#register_password').val();
        //adds user information to data
        dpd.users.post({
          username: $rg_username,
          password: $rg_password,
          firstName: $rg_fname,
          lastName: $rg_lname,
          profilePhoto: rg_img_url
        }, function(user, error) {
          if (error) {
            $('#register-fail-msg').text('Username is Taken');
          } else {
            $('#signInButton').hide();
            $('#logOutButton').show();
            $('#login-modal').modal('hide');
            //user gets logged in after registering
            dpd.users.login({
              username: $rg_username,
              password: $rg_password
            });
            updateProfile();
          }
        });

        break;
      default:
        return false;
    }
    return false;
  });

  ///This changes the modal form from login to register
  // or vice versa
  $('#login_register_btn').click(function() {
    modalAnimate($formLogin, $formRegister);
  });
  $('#register_login_btn').click(function() {
    modalAnimate($formRegister, $formLogin);
  });

  //logs user out
  $('#logOutButton').click(function() {
    dpd.users.logout(function(result, error) {
      if (error) {
        swal({
          title: 'Error Logging Out!',
          text: JSON.stringify(error),
          type: 'error',
          confirmButtonText: 'Cool'
        })

      } else {
        $('#signInButton').show();
        $('#logOutButton').hide();
        location.reload();
      }
    });
  });

  //changes the form
  function modalAnimate($oldForm, $newForm) {
    var $oldH = $oldForm.height();
    var $newH = $newForm.height();
    $divForms.css('height', $oldH);
    $oldForm.fadeToggle($modalAnimateTime, function() {
      $divForms.animate({
        height: $newH
      }, $modalAnimateTime, function() {
        $newForm.fadeToggle($modalAnimateTime);
      });
    });
  }

});

var files = [];
var uploadProfilePhoto = function() {
  var fd = new FormData();
  for (var i in files) {
    fd.append('uploadedFile', files[i]);
  }
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/profile-images?subdir=profileImages&uniqueFilename=true');
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
        rg_img_url = '/upload/profileImages/' + target;
      } else {
        document.body.classname = 'error';
      }
    }
  };
  req.open('get', '/profile-images', true);
  req.send(null);
};
