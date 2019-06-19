$(document).ready(function(){
  $("a.mobile").click(function(){
    $(".sidebar").slideToggle('fast')

  };

  window.onresize = function(event){
    alart();
  };
});

function validateForm() {
  var x = document.forms["Waystudio"]["username"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
