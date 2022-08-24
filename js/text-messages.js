// text-msg jQuery 

// $( document ).ready(function() {
//     var pageHeight = $(window).height() + 250;
//     var noOfItems = $(".tab-content.border-right .list-group > li").length;
//     var itemHeight = parseInt(pageHeight / noOfItems);
//     $(".tab-content.border-right .list-group > li").css( "height", itemHeight );
// });

function changeVal() {
    var x = document.getElementById("first_name").value;
    var y = document.getElementById("last_name").value;
    var z = document.getElementById("phone").value;
    document.getElementById("fn").innerHTML = x;
    document.getElementById("ln").innerHTML = y;
    document.getElementById("ph").innerHTML = z;
  }