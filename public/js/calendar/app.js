/* global $ */
(function($) {
  'use strict';
  var options = {
    events_source: '/events',
    view: 'month',
    modal: '#eventModal',
    tmpl_path: 'tmpls/',
    tmpl_cache: false,
    onAfterEventsLoad: function(events) {
      if (!events) {
        return;
      }
      var list = $('#eventlist');
      list.html('');

      // Need to 'unslick' our Carousel, if it has been initialized before we populate carousel with new data
      if ($('.slick-initialized')[0]) {
        $('.carousel_class').slick('unslick');
      }

      var carousel = $('#carousel');
      carousel.html('');

      if (events.length === 0) {
        for (var i = 0; i < 8; i++) {
          $(document.createElement('div'))
            .html('<img class="slick_slide" src="upload/meme0' + (i + 1) + '.jpg">')
            .appendTo(carousel);
        }
      }
      $('#month').html('<h2 id="h1Month">' + this.getMonth() + ', ' + this.getYear() + '</h2>');

      $.each(events, function(key, val) {
        var eventTime = new Date(val.start);
        // This populates our Event list basd on current calendar selection.
        $(document.createElement('li'))
          .html('<a href="' + val.url + '" data-toggle="modal" data-target="#eventModal" container="#eventModal" data-event-class data-toggle="tooltip" class="myEventList" data-event-title="' + val.title + '" data-event-id="' + this.id + '">' + val.title + ' - ' + eventTime.toLocaleString() + '</a>')
          .appendTo(list);

        // This populates our Carousel container with only event images matching our current calendar selection.
        $(document.createElement('div'))
          .html('<a href="' + val.url + '" data-event-title="' + val.title + '" data-event-start="' + val.start + '" data-event-description="' + val.description + '" data-event-id="' + this.id + '" data-toggle="modal" data-target="#eventModal" container="#eventModal" data-event-class data-toggle="tooltip" class="myCarousel"><img class="slick_slide" src="' + val.eventImage + '"></a>')
          .appendTo(carousel);
      });

      // Initialize our Carousel
      if (window.initCarousel !== undefined) {
        window.initCarousel();
      }

      $('.myCarousel, .myEventList').click(function() {
        calendar._loadTemplate('modal');
        $.ajax({
          url: '/events/' + $(this).data('event-id'),
          context: document.body
        }).done(function(response) {
          $('#eventModalTitle').html(response.title);
          $('#eventModalBody').html(calendar.options.templates['modal']({
            'event': response,
            'calendar': calendar
          }));
        });
      });

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

  var calendar = $('#calendar').calendar(options);
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

})($);
