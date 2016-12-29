$(document).ready(function() {
  $(".navArrow").click(function(){
    $("#main").toggleClass("mainAdjust");
    $("#navExpanded").toggleClass("navHide");
    $("#navExpanded").toggleClass("navShow");
    $("#menu").toggleClass("openNav");
    $("#menu").toggleClass("closeNav");
  });

  $(document).scroll(function() {
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
    } else if (y > about && y < skills) {
      $(".about").addClass("active");
      $(".skills").removeClass("active");
      $(".resume").removeClass("active");
      $(".projects").removeClass("active");
      $(".contact").removeClass("active");
    } else if (y > skills && y < resume) {
      $(".skills").addClass("active");
      $(".resume").removeClass("active");
      $(".projects").removeClass("active");
      $(".contact").removeClass("active");
    } else if (y > resume && y < projects) {
      $(".resume").addClass("active");
      $(".projects").removeClass("active");
      $(".contact").removeClass("active");
    } else if (y > projects && y < contact) {
      $(".projects").addClass("active");
      $(".contact").removeClass("active");
    } else {
      $(".contact").addClass("active");
    }
  });

});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function toggleNav() {
//   if (document.getElementById("mySideNav").style.width === "240px"
//       && document.getElementById("main").style.marginRight === "240px") {
//       document.getElementById("mySideNav").style.width = "72px";
//       document.getElementById("main").style.marginRight = "72px";
//       document.getElementById("navArrow").className = "openNav";
//   } else {
//       document.getElementById("mySideNav").style.width = "240px";
//       document.getElementById("main").style.marginRight = "240px";
//       document.getElementById("navArrow").className = "closeNav";
//     }
// }
