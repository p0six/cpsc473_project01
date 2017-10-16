(function($) {

  'use strict';

  var options = {
    //events_source: 'events.json.php',
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

      $.each(events, function(key, val) {
        var eventTime = new Date(val.start);
        $(document.createElement('li'))
          .html('<a href="' + val.url + '" data-toggle="modal" data-target="#eventModal" container="#eventModal" data-event-class data-toggle="tooltip" class="myEventList" data-event-title="' + val.title + '" data-event-id="' + this.id + '">' + val.title + ' - ' + eventTime.toLocaleString() + '</a>')
          .appendTo(list);
<<<<<<< HEAD
      });
=======

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
        $('#eventModalTitle').html($(this).data('event-title'));
        calendar._loadTemplate('modal');
        $.ajax({
          url: '/events/' + $(this).data('event-id'),
          context: document.body
        }).done(function(response) {
          $('#eventModalBody').html(calendar.options.templates['modal']({
            'event': response,
            'calendar': calendar
          }));
        });
      });

>>>>>>> 6274ab6fe716020679acf97755af7951c98aa9d3
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

<<<<<<< HEAD
  $('#first_day').change(function() {
    var value = $(this).val();
    value = value.length ? parseInt(value) : null;
    calendar.setOptions({
      first_day: value
    });
    calendar.view();
  });

  $('#language').change(function() {
    calendar.setLanguage($(this).val());
    calendar.view();
  });

  //$('#eventModal .modal-header, #eventModal .modal-footer').click(function(e) {
    //e.preventDefault();
    //e.stopPropagation();
  //});
}(jQuery));
=======
})($);
>>>>>>> 6274ab6fe716020679acf97755af7951c98aa9d3
