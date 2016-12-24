  /*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1100, 'easeOutExpo');
        event.preventDefault();
    });
});

// Text marquee quotes options
$('.tlt').textillate({
      // the default selector to use when detecting multiple texts to animate
      selector: '.texts',
      loop: true,
      minDisplayTime: 2000,
      initialDelay: 500,
      autoStart: true, 

      in: {
        // set the effect name
        effect: 'fadeInLeftBig',
        sync: true,
        reverse: false,

        // callback that executes once the animation has finished
        callback: function () {}
      },

      // out animation settings.
      out: {
        effect: 'fadeOut',
        delayScale: 1.5,
        delay: 3400,
        sync: true,
        shuffle: false,
        reverse: false,
        callback: function () {}
      },

      // callback that executes once textillate has finished 
      callback: function () {},

      // set the type of token to animate (available types: 'char' and 'word')
      type: 'char'
});

// Shows ReadMore
$(document).ready(function () {
    $('.fulltext').hide();

    $('.readmore').click(function (event) {
        event.preventDefault();
        $('.fulltext').slideToggle('slow');
        $(this).text($(this).text() == 'SHOW LESS...' ? 'SHOW MORE...' : 'SHOW LESS...');
    });
});

// Responsive Spotify embed widget

$(window).on('load resize', function() {
  $('iframe[src*="embed.spotify.com"]').each( function() {
    $(this).css('width', $(this).parent().css('width'));
    $(this).attr('src', $(this).attr('src'));
    $(this).removeClass('loaded');
    
    $(this).on('load', function(){
      $(this).addClass('loaded');
    });
  });
});

// Current Date
var d = new Date();
var n = d.getFullYear();
document.getElementById("current-date").innerHTML = n;