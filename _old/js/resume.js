$(document).ready(function() {
  $("#experienceContent").hide()
  $("#keySkillsContent").hide()
  $("#educationContent").hide()

    $("#experience").on("click", function(){
      $("#experienceContent").slideToggle("slow")
    });

    $("#keySkills").on("click", function(){
      $("#keySkillsContent").slideToggle("slow")
    });

    $("#education").on("click", function(){
      $("#educationContent").slideToggle("slow")
    });

});
