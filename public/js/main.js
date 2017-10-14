/* global $ */
var dpd = window.dpd;

$(document).ready(function() {
  console.log('document loaded');

  // Login Buttons
  dpd.users.me(function(user) {
    if (user) {
      $('#signInButton').hide();
      $('#logOutButton').show();
    } else {
      $('#signInButton').show();
      $('#logOutButton').hide();
    }
  });
  // Carousel initialization moved into 'app.js' in Calendar's onAfterEventsLoad function..
});
