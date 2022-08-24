/*User Activity Javascript */
jQuery( document ).ready(function($) {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left',
       
      }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('DD/MM/YYYY') + ' to ' + end.format('DD/MM/YYYY'));
      });
});

$(function(){
  $(".dropdown-menu.packageData a").click(function(){
    $(".btn.packageBtn").text($(this).text());
  var respond=  $(".btn.packageBtn:first-child innerText").text($(this).text());
  });
});

$(".dropdown-menu.packageData  a").click(function(){
  var selText = $(this).text();
  $(this).parents('.packageBtn').html(selText);
  if(selText == "Package Sent"){
    $(".package-sent").show();
    $(".package-share").addClass("d-none");
    $(".user-package-sent").removeClass("d-none");
    $(".user-package-share").hide();
  }
  else {
    $(".package-sent").hide();
    $(".package-share").removeClass("d-none");
    $(".user-package-sent").addClass("d-none");
    $(".user-package-share").show();
  }
});