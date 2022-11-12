//sticky header
$(window).on("scroll", function () {
  var headerHeight = $('#header').height();
  var totalHeight = headerHeight;
  var totalDHeight = headerHeight * 2;
  if ($(window).scrollTop() >= totalHeight) {
    $('#header').addClass('fixed-header');
    // $('#banner').css('margin-top', totalDHeight);
  }
  else {
    $('#header').removeClass('fixed-header');
    // $('#banner').css('margin-top', '0px');
  }
});

$(window).on("resize", function () {
  var headerHeight = $('#header').height();
  var totalHeight = headerHeight;
  var totalDHeight = headerHeight * 2;
  if ($(window).scrollTop() >= totalHeight) {
    $('#header').addClass('fixed-header');
    // $('#banner').css('margin-top', totalDHeight);
  }
  else {
    $('#header').removeClass('fixed-header');
    // $('#banner').css('margin-top', '0px');
  }
});

$(window).on("load", function () {
  var headerHeight = $('#header').height();
  var totalHeight = headerHeight;
  var totalDHeight = headerHeight * 2;
  if ($(window).scrollTop() >= totalHeight) {
    $('#header').addClass('fixed-header');
    // $('#banner').css('margin-top', totalDHeight);
  }
  else {
    $('#header').removeClass('fixed-header');
    // $('#banner').css('margin-top', '0px');
  }
});
