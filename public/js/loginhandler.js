$(function() {

  var $formLogin = $('#login-form');
  var $formRegister = $('#register-form');
  var $divForms = $('#div-forms');
  var $modalAnimateTime = 300;
  var $msgAnimateTime = 150;
  var $msgShowTime = 2000;

  $("form").submit(function() {
    switch (this.id) {
      case "login-form":
        var $lg_username = $('#login_username').val();
        var $lg_password = $('#login_password').val();
        dpd.users.login({username: $lg_username, password: $lg_password}, function(session, error) {
        if (error) {
          alert(error.message);
        } else {
          alert('Login Worked!');
        }
      });
        return false;
        break;
      case "register-form":
        var $rg_username = $('#register_username').val();
        var $rg_fname = $('#register_fname').val();
        var $rg_lname = $('#register_lname').val();
        var $rg_password = $('#register_password').val();
        dpd.users.post({username: $rg_username, password: $rg_password, firstName: $rg_fname, lastName: $rg_lname}, function(user, error) {
          if (error) {
            alert(JSON.stringify(error));
          } else {
            alert('Register Worked!');
          }
        });
        return false;
        break;
      default:
        return false;
    }
    return false;
  });

  $('#login_register_btn').click(function() {
    modalAnimate($formLogin, $formRegister)
  });
  $('#register_login_btn').click(function() {
    modalAnimate($formRegister, $formLogin);
  });

  function modalAnimate($oldForm, $newForm) {
    var $oldH = $oldForm.height();
    var $newH = $newForm.height();
    $divForms.css("height", $oldH);
    $oldForm.fadeToggle($modalAnimateTime, function() {
      $divForms.animate({
        height: $newH
      }, $modalAnimateTime, function() {
        $newForm.fadeToggle($modalAnimateTime);
      });
    });
  }

  function msgFade($msgId, $msgText) {
    $msgId.fadeOut($msgAnimateTime, function() {
      $(this).text($msgText).fadeIn($msgAnimateTime);
    });
  }

  function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
    var $msgOld = $divTag.text();
    msgFade($textTag, $msgText);
    $divTag.addClass($divClass);
    $iconTag.removeClass("glyphicon-chevron-right");
    $iconTag.addClass($iconClass + " " + $divClass);
    setTimeout(function() {
      msgFade($textTag, $msgOld);
      $divTag.removeClass($divClass);
      $iconTag.addClass("glyphicon-chevron-right");
      $iconTag.removeClass($iconClass + " " + $divClass);
    }, $msgShowTime);
  }
});
