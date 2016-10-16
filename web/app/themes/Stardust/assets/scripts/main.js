/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {
  var u_id = parseInt('1428121');
    var token = '1428121.9b2b91b.62214e2c5be44efdba6a573e97327cf4';
    var feed = new Instafeed({
      get: 'user',
      userId: u_id,
      accessToken: token,
      clientId: '9b2b91b4679542d3a28022b8661cfba1',
      template: '<div style="width: 31%; margin-bottom: 3.3333333333%;"><a href="{{link}}"><img style="display: block;" src="{{image}}" /></a></div>',
      limit: 18
    });
    feed.run();

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

  var imageURLS = $('.post').children('img').map(function(){
    return $(this).attr('src');
  }).get();

  $('.post').children('img').map(function(image, i){
    console.log(image);
    $(this).attr('data-zoom-padding', '0');
    $(this).attr('data-zoom-url', imageURLS[image]);
    $(this).attr('data-zoom-overlay', 'true');
  });

  var drawerOpen = false;

  $('.mobile-nav-touchable').click(function() {
    this.drawerOpen = !this.drawerOpen;

    $('.nav-primary').toggleClass('nav-visible');
    if (this.drawerOpen) {
      $('.nav-primary').animate({ opacity: 1 }, 200);
      $('.nav-primary').css({ zIndex: 1 });
      $('.mobile-nav-touchable').css({ transform: 'rotate(90deg)' });
      $('.mobile-nav-touchable div').css({ marginTop: 0, transform: 'rotate(-45deg)', transition: 'transform ' + '200ms 200ms' });
      $('.mobile-nav-touchable div:first').css({ transform: 'rotate(45deg)' });

      $('.menu-item').css({ opacity: 1, transform: 'translateY(0)' });
    } else {
      $('.nav-primary').animate({ opacity: 0 }, 200, function() {
        $('.nav-primary').css({ zIndex: -1 });
      });
      $('.mobile-nav-touchable').css({ transform: 'rotate(0deg)' });
      $('.mobile-nav-touchable div').css({ marginTop: 4, transform: 'rotate(0deg)', transition: 'transform ' + '400ms' });
      $('.mobile-nav-touchable div:first').css({ marginTop: -4, transform: 'rotate(0deg)' });

      $('.menu-item').css({ opacity: 0, transform: 'translateY(56px)' });
    }
  });

})(jQuery); // Fully reference jQuery after this point.
