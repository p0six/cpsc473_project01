/* global $ */
var dpd = window.dpd;

//recieves and checks user data against dpd data
//changes modal form and login - logout buttons
$(function() {

  var $formLogin = $('#login-form');
  var $formRegister = $('#register-form');
  var $divForms = $('#div-forms');
  var $modalAnimateTime = 300;

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
          lastName: $rg_lname
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
        alert(JSON.stringify(error));
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
