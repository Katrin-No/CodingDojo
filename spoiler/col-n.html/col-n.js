$(document).ready(function() {
  $(".col-title").click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });  
});