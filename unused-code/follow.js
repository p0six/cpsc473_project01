/* global $ */
var dpd = window.dpd;


$('#submitFollow').click(function() {
  $('#follow-fail-msg').text('');

  //if (this.id == 'follow-form') {
  console.log('submit');
  var $fUsername = $('#follow_username').val();
  dpd.users.get({
    username: $fUsername
  }, function(user) {
    var $fUserId = user.id;
    console.log('followid: ', $fUserId);
    dpd.users.me(function(result, error) {
      if (error || !result) {
        console.log('You are not logged in!');
        $('#follow-fail-msg').text('You are not logged in!');
      } else {
        var currentUserId = result.id;
        console.log('myId: ', currentUserId);

        dpd.followers.get({
          follower: currentUserId,
          following: $fUserId
        }, function(found, error) {
          if (error || !found) {
            dpd.followers.get({
              follower: $fUserId,
              following: currentUserId
            }, function(friend, error) {
              if (error || !friend) {
                console.log('error user does not follow person yet');
                dpd.followers.post({
                  follower: currentUserId,
                  following: $fUserId,
                  friend: false
                }, function(user, error) {
                  if (error) {
                    console.log('NOT FOLLOWED');
                  } else {
                    console.log('SUCCESSFULLY FOLLOWED');
                  }
                });
              } else {
                console.log('both follow each other');
                dpd.followers.post({
                  follower: currentUserId,
                  following: $fUserId,
                  friend: true
                });
                dpd.followers.put({
                  follower: $fUserId
                }, {
                  friend: true
                });
              }
            });
          } else {
            console.log('second time followid: ', $fUserId);
            $('#follow-fail-msg').text('You are already following this person!');
          }
        });
      }
    });
  });
  //}
  return false;
});
