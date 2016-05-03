var $win = $(window);
var $introSection = $('.intro-section');
var $mediaSection = $('.media-section');


$win.on('scroll', function () {
  var scrollPos = $win.scrollTop();

  $introSection.css('background-position', 'bottom center '  + scrollPos / 2 + 'px');


})

 