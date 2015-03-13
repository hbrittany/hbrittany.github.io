var $win = $(window);
var $introSection = $('.intro-section');
var $mediaSection = $('.media-section');


$win.on('scroll', function () {
  var scrollPos = $win.scrollTop();

  $introSection.css('background-position', 'center ' + scrollPos / 3 + 'px');


})

 