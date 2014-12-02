var $win = $(window);
var $introSection = $('.intro-section');
var $media = $('.media img');
var $mediaSection = $('.media-section');
var mediaSectionOffset = $mediaSection.offset();

$win.on('scroll', function () {
  var scrollPos = $win.scrollTop();
  var mediaPos = (scrollPos - mediaSectionOffset.top) / 2;
//console.log(mediaSectionOffset, scrollPos);

  $introSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
  //$mediaSection.css('background-position', 'center ' + mediaPos + 'px');
});

