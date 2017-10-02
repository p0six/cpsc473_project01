//Code in here runs whenever the page (re)loads
$(window).on("load", function() {

  //necessary for showing correct login/out button
  dpd.users.me(function(user) {
    if (user) {
      $('#signInButton').hide();
      $('#logOutButton').show();
    } else {
      $('#signInButton').show();
      $('#logOutButton').hide();
    }
  });
});
