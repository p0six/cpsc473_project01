//followApp.js should populate the events table with events that are being attended
//  by people the user follows. Should also populate calendar and carousel.
// Known bugs: calendar and carousel is not adjusted for tab
//      events list is inconsistant with page reload

/* global $ */
var dpd = window.dpd;
var currentUserId;
//var followingId;

(function($) {
  'use strict';
  var options = {
    events_source: '/events',
    view: 'month',
    modal: '#eventModal',
    tmpl_path: 'tmpls/',
    tmpl_cache: false,
    // onBeforeEventsLoad: function(next){
    //   dpd.users.me(function(result, error) {
    //     if (error || !result) {
    //       console.log('ERROR No user');
    //       $('#followEventlist').text('You are not logged in! Login to view your friends\' events');
    //     } else {
    //       currentUserId = result.id;
    //       //console.log('IF FUNCT current user id: ', currentUserId);
    //       next();
    //     }
    //   });
    //
    // },
    onAfterEventsLoad: function(events) {
      if (!events) {
        return;
      }
      var list = $('#followEventlist');
      list.html('');

      // Need to 'unslick' our Carousel, if it has been initialized before we populate carousel with new data
      // if ($('.slick-initialized')[0]) {
      //   $('.carousel_class').slick('unslick');
      // }

      // var carousel = $('#carousel');
      // carousel.html('');

      // if (events.length === 0) {
      //   for (var i = 0; i < 8; i++) {
      //     $(document.createElement('div'))
      //       .html('<img class="slick_slide" src="upload/meme0' + (i + 1) + '.jpg">')
      //       .appendTo(carousel);
      //   }
      // }
      //$('.month').html('<h2 class="h1Month">' + this.getMonth() + ', ' + this.getYear() + '</h2>');
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //checks if user is logged in
      dpd.users.me(function(result, error) {
        if (error || !result) {
          $(document.createElement('p'))
            .html('You Are Not Logged In!')
            .appendTo(list);
          $(document.createElement('p'))
              .html('Login to view events that people you follow are going to!')
              .appendTo(list);
          console.log('ERROR No user');
        } else {
          //assigns id to global variable
          currentUserId = result.id;
          console.log('IF FUNCT current user id: ', currentUserId);
          // gets list of people user is following
          dpd.followers.get({
            follower: currentUserId
          }, function(followList, error) {
            if (error || !followList) {
              console.log(currentUserId, ' is not following anybody');
            } else {
              //gets list of events in order by date
              dpd.events.get({
                sort: {
                  start: -1
                }
              }, function(eventList) {
                eventList.forEach(function(e) {
                  var eId = e.id;
                  var eventTime = new Date(e.start);
                  var eventPrinted = false;
                  //gets attendance for events
                  dpd.attendance.get({
                    eventId: eId
                  }, function(attList) {
                    attList.forEach(function(aList) {
                      var attendeeId = aList.userId;
                      //checks list of following user one at a time
                      followList.forEach(function(f) {
                        var fId = f.following;
                        console.log('fid: ', fId);
                        //gets name of following user
                        dpd.users.get({
                          id: fId
                        }, function(followUser) {
                          console.log(followUser);
                          var name = followUser.firstName + ' ' + followUser.lastName;
                          console.log('name: ', name);
                          //checks if the following user is going to the event
                          if (attendeeId === fId) {
                            //Prints event info once
                            if (eventPrinted === false) {
                              $(document.createElement('p'))
                                .html('<a href="' + e.url + '">' + e.title + ' - ' + eventTime.toLocaleString() + '</a>')
                                .appendTo(list);
                              eventPrinted = true;
                            }
                            //print list of follow users attending each event
                            $(document.createElement('li'))
                              .html(name + ' is going to this event')
                              .appendTo(list);
                          }
                        });
                      });
                    });
                  });
                });
              });
            }
          });
        }
      });


      // // This populates our Carousel container with only event images matching our current calendar selection.
      // $(document.createElement('div'))
      //   .html('<img class="slick_slide" src="' + val.eventImage + '">')
      //   .appendTo(carousel);
      //
      //   }
      // });


      //}); // END EACH

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      // Initialize our Carousel
      // if (window.initCarousel !== undefined) {
      //   window.initCarousel();
      // }

    },
    onAfterViewLoad: function(view) {
      $('.page-header h3').text(this.getTitle());
      $('.btn-group button').removeClass('active');
      $('button[data-calendar-view="' + view + '"]').addClass('active');
    },
    classes: {
      months: {
        general: 'label'
      }
    }
  };

  var calendar = $('#followCalendar').calendar(options);
  window.calendar = calendar;

  $('.btn-group button[data-calendar-nav]').each(function() {
    var $this = $(this);
    $this.click(function() {
      calendar.navigate($this.data('calendar-nav'));
    });
  });

  $('.btn-group button[data-calendar-view]').each(function() {
    var $this = $(this);
    $this.click(function() {
      calendar.view($this.data('calendar-view'));
    });
  });

  /*$('#first_day').change(function() {
    var value = $(this).val();
    value = value.length ? parseInt(value) : null;
    calendar.setOptions({
      first_day: value
    });
    calendar.view();
  });*/

  /*$('#language').change(function() {
    calendar.setLanguage($(this).val());
    calendar.view();
  });*/

  //$('#eventModal .modal-header, #eventModal .modal-footer').click(function(e) {
  //e.preventDefault();
  //e.stopPropagation();
  //});
})($);
