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
  // Scroll to Top
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({ scrollTop: target.offset().top }, 500);
        return false;
      }
    }
  });

  $(function() {
    $(window).scroll(function() {
      var scrollVal = $(this).scrollTop();
      if (scrollVal > 300) {
        $('.up').fadeIn();
      } else {
        $('.up').fadeOut();
      }
    });
  });

  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));

  var u_id = parseInt('1428121');
  var token = '1428121.9b2b91b.62214e2c5be44efdba6a573e97327cf4';
  var id = '9b2b91b4679542d3a28022b8661cfba1';
    
  // var sideBarFeed = new Instafeed({
  //   get: 'user',
  //   userId: u_id,
  //   accessToken: token,
  //   clientId: id,
  //   template: '<div style="width: 31%; margin-bottom: 3.3333333333%;"><a href="{{link}}"><img style="display: block;" src="{{image}}" /></a></div>',
  //   limit: 18
  // });
  // sideBarFeed.run();

  var footerFeed = new Instafeed({
    get: 'user',
    userId: u_id,
    accessToken: token,
    clientId: id,
    template: '<a style="width: 14%; height: ' + Math.ceil($(window).width()/7) + 'px; display: block; background-size: cover; background-position: center center; background-repeat: no-repeat; background-image: url(https:{{image}})" href="{{link}}"></a>',
    resolution: 'standard_resolution',
    limit: 7,
    target: 'instagramFooterFeed'
  });
  footerFeed.run();

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

  // Move post nav out of container
  $('.posts-navigation').appendTo('.outer-container');

  if ($('.nav-links')) {
    $('.nav-links').addClass('container');
    $('.nav-links').css({ paddingBottom: 120 });
    $('.nav-previous a').html('&larr; Older Posts');
    $('.nav-next a').html('Newer Posts &rarr;');
  }

  $('.search-icon').click(function() {
    $('.search-form').css({ display: 'block' });
    $('#searchform input').focus();

    $('.x').click(function() {
      $('.search-form').css({ display: 'none' });
    });
  });

  // Loop through post images and add data uris for ZoomImage JS
  var imageURLS = $('.post p').children('.alignnone').map(function(){
    return $(this).attr('src');
  }).get();

  $('.post p').children('.alignnone').map(function(image, i) {
    $(this).attr('data-zoom-padding', '0');
    $(this).attr('data-zoom-url', imageURLS[image]);
    $(this).attr('data-zoom-overlay', 'true');
  });

  // Inject SVG heart
  $(
    '<span class="heart-container">' +
      '<div class="emoji-container">' +
        '<svg class="kissy-emoji" width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>1f618 copy</title><defs><path id="a" d="M0 24.235h23.75V0H0z"/></defs><g transform="matrix(1 0 0 -1 -1 23.745)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><path d="M22.5 12.117c0-5.988-4.757-10.84-10.625-10.84-5.867 0-10.625 4.852-10.625 10.84 0 5.988 4.758 10.842 10.625 10.842 5.868 0 10.625-4.855 10.625-10.843" fill="#FFCC4D"/><path d="M9.375 13.712c0-1.234-.7-2.232-1.563-2.232s-1.562.998-1.562 2.232c0 1.233.7 2.232 1.563 2.232s1.562-1 1.562-2.232M18.41 12.247c-.037.086-.936 2.103-2.785 2.103-1.848 0-2.748-2.017-2.786-2.103-.058-.132-.02-.286.09-.377.11-.09.266-.094.38-.01.01.007.79.576 2.315.576 1.516 0 2.296-.562 2.314-.574.054-.042.12-.063.185-.063.07 0 .138.02.194.068.11.09.15.246.09.38M4.374 16.582c-.13 0-.26.04-.374.127-.276.21-.332.61-.125.892 2.04 2.774 4.76 2.806 4.875 2.806.345 0 .625-.286.625-.638 0-.35-.278-.636-.623-.637-.096-.002-2.23-.055-3.877-2.296-.123-.167-.31-.255-.5-.255M18.75 14.668c-.19 0-.377.088-.5.255-1.62 2.205-4.35 1.676-4.377 1.67-.342-.07-.668.156-.735.5-.07.346.15.683.49.75.143.032 3.535.685 5.622-2.154.208-.283.15-.683-.125-.894-.112-.086-.244-.128-.374-.128M13.67 5.74c.834.263 1.643.737 1.643 1.594 0 1.67-3.07 1.893-3.42 1.913-.172.016-.32-.123-.33-.3-.01-.173.12-.324.29-.337.022 0 2.21-.19 2.21-1.276 0-1.085-2.188-1.275-2.21-1.276-.01 0-.015-.006-.023-.007-.033-.003-.063-.01-.092-.024l-.01-.008c-.03-.016-.057-.035-.08-.06l-.022-.032c-.014-.02-.027-.04-.037-.065-.008-.018-.012-.037-.016-.057-.003-.015-.01-.028-.01-.043l.002-.02c0-.007-.003-.014-.003-.02 0-.016.008-.03.01-.044.005-.02.008-.038.016-.057.007-.02.018-.037.03-.054.01-.016.02-.032.032-.046.014-.015.032-.026.05-.038.014-.01.027-.022.045-.03.02-.01.04-.014.062-.018.014-.004.028-.01.043-.012.022-.002 2.21-.19 2.21-1.277 0-1.085-2.188-1.274-2.21-1.276-.17-.013-.3-.165-.29-.34.01-.168.148-.298.31-.298h.02c.35.02 3.42.243 3.42 1.913 0 .858-.81 1.332-1.644 1.595" fill="#664500"/></g></g></svg>' +
        '<svg class="emoji-heart-fill" width="23" height="21" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg"><title>path46</title><path d="M6.488.768c2.065 0 3.885 1.018 5 2.573C12.607 1.788 14.426.767 16.487.766c3.4 0 6.155 2.758 6.154 6.153.003.48-.06.948-.164 1.397-.854 5.306-6.754 10.91-10.982 12.446C7.266 19.224 1.36 13.627.504 8.32.4 7.87.34 7.404.34 6.92.34 3.527 3.095.77 6.488.77z" fill="#FF92D1" fill-rule="evenodd"/></svg>' +
      '</div>' +
    '</span>'
  ).insertBefore('.dot-irecommendthis');

  $('.dot-irecommendthis').map(function() {
    $('.active').css({ 'background-image': 'url("/app/themes/Stardust/dist/images/heart-filled.svg")' });
  });

  $('.dot-irecommendthis').bind('click', function() {
    var emojiContainer = $(this).prev('.heart-container').children('.emoji-container');
    var emoji = emojiContainer.children('.kissy-emoji');
    var emojiHeartFill = emojiContainer.children('.emoji-heart-fill');

    if (!$(this).hasClass('active')) {
      $(this).delay(900).animate({ 'background-size': 0 }, 0);
      emojiContainer.addClass('animate-emoji-container');

      setTimeout(function(){
        emojiHeartFill.addClass('blow-kiss');
      }, 400);

      setTimeout(function(){
        emoji.addClass('hide-emoji');
      }, 900);
    }
  });

  if (window.location.hash === '#reply-title') {
    setTimeout(function() {
      $('#comment').focus();
    }, 0);
  }

  // Mobile nav drawer
  var drawerOpen = false;

  $('.mobile-nav-touchable').click(function() {
    $('.menu-item').toggleClass('spring');
    this.drawerOpen = !this.drawerOpen;

    $('.nav-primary').toggleClass('nav-visible');
    if (this.drawerOpen) {
      $('.nav-primary').animate({ opacity: 1 }, 300, 'swing');
      $('.nav-primary').css({ zIndex: 1 });
      $('.mobile-nav-touchable').css({ transform: 'rotate(90deg)' });
      $('.mobile-nav-touchable div').css({ margin: '-1.5px auto', transform: 'rotate(-45deg)', transition: 'transform ' + '200ms 200ms' });
      $('.mobile-nav-touchable div:first').css({ transform: 'rotate(45deg)' });

      $('.menu-item').css({ opacity: 1 });
    } else {
      $('.nav-primary').animate({ opacity: 0 }, 300, 'swing', function() {
        $('.nav-primary').css({ zIndex: -1 });
      });
      $('.mobile-nav-touchable').css({ transform: 'rotate(0deg)' });
      $('.mobile-nav-touchable div').css({ margin: '3px auto', transform: 'rotate(0deg)', transition: 'transform ' + '400ms' });
      $('.mobile-nav-touchable div:first').css({ transform: 'rotate(0deg)' });

      $('.menu-item').css({ opacity: 0 });
    }
  });

})(jQuery); // Fully reference jQuery after this point.
