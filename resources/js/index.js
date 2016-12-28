$(document).ready(function() {
  $("#navArrow").click(function(){
    $(".navSection").toggleClass("navHide");
});

});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleNav() {
  if (document.getElementById("mySideNav").style.width === "240px"
      && document.getElementById("main").style.marginRight === "240px") {
      document.getElementById("mySideNav").style.width = "72px";
      document.getElementById("main").style.marginRight = "72px";
      document.getElementById("navArrow").className = "openNav";
  } else {
      document.getElementById("mySideNav").style.width = "240px";
      document.getElementById("main").style.marginRight = "240px";
      document.getElementById("navArrow").className = "closeNav";
    }
}
