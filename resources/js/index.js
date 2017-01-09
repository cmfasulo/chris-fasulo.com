$(document).ready(function() {
  navHighlight();
  $('#backtop').hide();

  $(document).scroll(function () {
    navHighlight();
  });

  $(".navArrow").click(function(){
    $("#main").toggleClass("mainAdjust");
    $("#navExpanded").toggleClass("navHide");
    $("#navExpanded").toggleClass("navShow");
    $("#menu").toggleClass("navOpen");
    $("#menu").toggleClass("navClose");
  });

});

function navHighlight() {
    var y = $(document).scrollTop();
    var top = $("#top").position().top;
    var about = $("#about").position().top;
    var skills = $("#skills").position().top;
    var resume = $("#resume").position().top;
    var projects = $("#projects").position().top;
    var contact = $("#contact").position().top;

    if (y < about) {
      $(".top").addClass("active");
      $(".about").removeClass("active");
      $(".skills").removeClass("active");
      $(".resume").removeClass("active");
      $(".projects").removeClass("active");
      $(".contact").removeClass("active");
    } else if (y >= about && y < skills) {
      $(".top").addClass("active");
      $(".about").addClass("active");
      $(".skills").removeClass("active");
      $(".resume").removeClass("active");
      $(".projects").removeClass("active");
      $(".contact").removeClass("active");
    } else if (y >= skills && y < resume) {
      $(".top").addClass("active");
      $(".about").addClass("active");
      $(".skills").addClass("active");
      $(".resume").removeClass("active");
      $(".projects").removeClass("active");
      $(".contact").removeClass("active");
    } else if (y >= resume && y < projects) {
      $(".top").addClass("active");
      $(".about").addClass("active");
      $(".skills").addClass("active");
      $(".resume").addClass("active");
      $(".projects").removeClass("active");
      $(".contact").removeClass("active");
    } else if (y >= projects && y < contact) {
      $(".top").addClass("active");
      $(".about").addClass("active");
      $(".skills").addClass("active");
      $(".resume").addClass("active");
      $(".projects").addClass("active");
      $(".contact").removeClass("active");
    } else {
      $(".top").addClass("active");
      $(".about").addClass("active");
      $(".skills").addClass("active");
      $(".resume").addClass("active");
      $(".projects").addClass("active");
      $(".contact").addClass("active");
    }

    if ($(this).scrollTop() >= about) {
      $('#backtop').fadeIn(200);
    } else {
      $('#backtop').fadeOut(200);
    }
};
