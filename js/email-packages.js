/* Email Packages Javascript */

jQuery( document ).ready(function($) {
    // drag //
    $('.package-left-table .sortableList').sortable();

    /* Select and Deselect All */
    var $deselectRemove2 = $('#selectremoveDeselect2')
    $deselectRemove2.click(function () {
      $(this).text("Deselect All");
      $(".selectTable input.form-check-input").each(function (index, item) {
        item.checked = false;
      });
    });

  $(".selectTable input.form-check-input").click(function () {
    var total = $(".selectTable input.form-check-input").length;
    var numberOfChecked = $('.selectTable input.form-check-input:checkbox:checked').length;
    
    if(total === numberOfChecked) {
      $(this).addClass('selectInvert');
      $("#selectallSelect").addClass("selectInvert").removeClass("active");
      $("#selectallSelect").text("Deselect All");
    } else {
      $("#selectallSelect").removeClass("selectInvert");
      $("#selectallSelect").text("Select All");
    }
  });

  var $selectRemove = $('#selectremoveSelect')
  $selectRemove.click(function () {
    $(this).text("Select All");
    $(".selectremoveTable input.form-check-input").each(function (index, item) {
      item.checked = true;
    });
  });

  var $deselectRemove = $('#selectremoveDeselect')
  $deselectRemove.click(function () {
    $(this).text("Deselect All");
    $(".selectremoveTable input.form-check-input").each(function (index, item) {
      item.checked = false;
    });
  });

  /* Address book Select and Deselect All */
  var $addDeselectRemove2 = $('#addSelectremoveDeselect2')
  $addDeselectRemove2.click(function () {
    $(this).text("Deselect All");
    $(".selectTable input.form-check-input").each(function (index, item) {
      item.checked = false;
    });
  });

$(".selectTable input.form-check-input").click(function () {
  var total = $(".selectTable input.form-check-input").length;
  var numberOfChecked = $('.selectTable input.form-check-input:checkbox:checked').length;
  
  if(total === numberOfChecked) {
    $(this).addClass('selectInvert');
    $("#selectallSelect").addClass("selectInvert").removeClass("active");
    $("#selectallSelect").text("Deselect All");
  } else {
    $("#selectallSelect").removeClass("selectInvert");
    $("#selectallSelect").text("Select All");
  }
});

var $addSelectRemove = $('#addSelectremoveSelect')
$addSelectRemove.click(function () {
  $(this).text("Select All");
  $(".selectremoveTable input.form-check-input").each(function (index, item) {
    item.checked = true;
  });
});

var $addDeselectRemove = $('#addSelectremoveDeselect')
$addDeselectRemove.click(function () {
  $(this).text("Deselect All");
  $(".selectremoveTable input.form-check-input").each(function (index, item) {
    item.checked = false;
  });
});


});
// check expiration date condition
if($('#expirationDate').val()){
  $('#neverExpires').prop('checked', false);
}
if($('#expirationDate1').val()){
  $('#neverExpires1').prop('checked', false);
}
if($('#expirationDate2').val()){
  $('#neverExpires2').prop('checked', false);
}
if($('#expirationDate3').val()){
  $('#neverExpires3').prop('checked', false);
}

$("#neverExpires").change(function() {
  if(this.checked) {
    $('#expirationDate').val("")
  }
});
$("#neverExpires1").change(function() {
  if(this.checked) {
    $('#expirationDate1').val("")
  }
});
$("#neverExpires2").change(function() {
  if(this.checked) {
    $('#expirationDate2').val("")
  }
});
$("#neverExpires3").change(function() {
  if(this.checked) {
    $('#expirationDate3').val("")
  }
});

function dateChanged(ev) {
  $('#neverExpires').prop('checked', false);
}
function dateChanged1(ev) {
  $('#neverExpires1').prop('checked', false);
}  
function dateChanged2(ev) {
  $('#neverExpires2').prop('checked', false);
}  
function dateChanged3(ev) {
  $('#neverExpires3').prop('checked', false);
}  

$('#expiration-date').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true,
})
.change(dateChanged)
.on('changeDate', dateChanged);

$('#schedule-date').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true,
  orientation: "top",
});
$('#schedule-date').on('changeDate', function(event) {
  $(".schdeuleDate").html("Scheduled for" +" " + event.format());
});
$('#expiration-date').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true,
})
$('#expiration-date1').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true,
  onSelect: function(selectedDate) {
   }
})
.change(dateChanged1)
.on('changeDate', dateChanged1);

$('#expiration-date2').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true,
  onSelect: function(selectedDate) {
  }
})
.change(dateChanged2)
.on('changeDate', dateChanged2);

$('#expiration-date3').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true,
  onSelect: function(selectedDate) {
  }
})
.change(dateChanged3)
.on('changeDate', dateChanged3);

$('#delivery-date').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true
});

$('#expiry-date').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true
});  

$('#expiration-date-one').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  calendarWeeks : true,
  clearBtn: true,
  disableTouchKeyboard: true
});  


var $table = $('#b-table');
    $(function () {
           $('#toolbar').find('select').change(function () {
           $table.bootstrapTable('filterBy', {
           prenom: $(this).val()
            })
        });
    })

    var trBoldBlue = $("b-table");
    $(trBoldBlue).on("click", "tr", function (){
    $(this).toggleClass("bold-blue");
});


// dropdown submenu
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });

  return false;
});

// no, of packages
$('.select-package').change(function() {
  var total=$('input[name="lineup[]"]:checked').length;
  $(".dnone").addClass("d-none"); 
$(".noOfPackages span").text(total) 
  if(total <= 1)
  {$(".noOfPackages a").text("Package added");} 
  else 
  $(".noOfPackages a").text("Packages added");
  })

$('.select-package1').change(function() {
  var total=$('input[name="lineup1[]"]:checked').length;
  $(".dnone").addClass("d-none"); 
$(".noOfPackages1 span").text(total) 
  if(total <= 1)
  {$(".noOfPackages1 a").text("Package added");} 
  else 
  $(".noOfPackages1 a").text("Packages added");
  })

$('.select-package2').change(function() {
  var total=$('input[name="lineup2[]"]:checked').length;
  $(".dnone").addClass("d-none"); 
$(".noOfPackages2 span").text(total) 
  if(total <= 1)
  {$(".noOfPackages2 a").text("Package added");} 
  else 
  $(".noOfPackages2 a").text("Packages added");
  })

$('.select-package3').change(function() {
  var total=$('input[name="lineup3[]"]:checked').length;
  $(".dnone").addClass("d-none"); 
$(".noOfPackages3 span").text(total) 
  if(total <= 1)
  {$(".noOfPackages3 a").text("Package added");} 
  else 
  $(".noOfPackages3 a").text("Packages added");
  })

  //  quick fill //
  $( function() {
    var availableTags = [
    "Alex",
    "Oliver",
    "Harry", 
    "George",
    "Emily", 
    "Noah", 
    "Jack", 
    "Jacob8",
    "Leo", 
    "Oscar9",
    "Charlie",
    "Muhammad",
    "Lily" 
    ];
    $( "#firstName" ).autocomplete({ source: availableTags });
      } );

  $( function() {
    var availableTagsForLastname = [
      "Olivia", 
      "Amelia", 
      "Isla", 
      "Ava",   
      "Emily",       
      "Isabella", 
      "Mia",      
      "Poppy7",
      "Ella", 
      "Lily" 
    ];
    $( "#lastName" ).autocomplete({source: availableTagsForLastname });
       } );

  $( function() {
    var availableTagsForNo = [
      "(702) 233-3065", 
      "(502) 263-8563", 
      "(702) 156-1515", 
      "(956) 445-1152",   
      "(878) 412-748",       
    ];
    $( "#mobileNumber" ).autocomplete({source: availableTagsForNo });
       } );

  $( function() {
    var availableTagsForBcc = [
      "bob@example.com", 
      "jack@example.com", 
      "jasson@example.com", 
      "liky@example.com", 
      "george@example.com",   
      "mohmmad@example.com"        
    ];
    $( "#bcc" ).autocomplete({source: availableTagsForBcc });
       } );

  $( function() {
    var availableTagsForCc = [
      "bob@example.com", 
      "jack@example.com", 
      "liky@example.com", 
      "lily@example.com", 
      "george@example.com",   
      "mohmmad@example.com"      
    ];
    $( "#cc" ).autocomplete({source: availableTagsForCc });
       } );

  $( function() {
    var availableTagsForTo = [
      "bob@example.com", 
      "jack@example.com", 
      "liky@example.com", 
      "george@example.com",   
      "mohmmad@example.com",      
      "berlin@example.com",      
    ];
    $( "#to" ).autocomplete({source: availableTagsForTo });
       } );
   
  $( function() {
    var availableTagsForSearch = [
      "bob@example.com", 
      "jack@example.com", 
      "accountsupport@zoominfo.com" 
    ];
    $( "#searchsub" ).autocomplete({source: availableTagsForSearch });
    $(".ui-autocomplete").css("z-index", "2147483647");
  } );
   
  $( function() {
    var availableTagsForSearch = [
      "East Coast Contacts", 
      "West Coast Contacts", 
      "Texas Customers" 
    ];
    $( "#searchadd" ).autocomplete({source: availableTagsForSearch });
    $(".ui-autocomplete").css("z-index", "2147483647");
  } );
   
  
// Reset The Search Data and Replace the Icon
$(".searchclear1").click(function(){
  $(".searchinput1").val('');
  if($(".searchinput1").val('')) {
      $('.searchclear1').addClass("d-none");
      $('.search-loupe1').removeClass("d-none");
  }
});

$(".searchinput1").on('keyup', function (e) {
  if(($(".searchinput1").val().length === 0)){
      $('.searchclear1').addClass("d-none");
      $('.search-loupe1').removeClass("d-none");
  }
  if ($(this).val().length > 0) {
      $('.searchclear1').removeClass("d-none");
      $('.search-loupe1').addClass("d-none");
  }
});
// Reset The Search Data and Replace the Icon
$(".searchclear2").click(function(){
  $(".searchinput2").val('');
  if($(".searchinput2").val('')) {
      $('.searchclear2').addClass("d-none");
      $('.search-loupe2').removeClass("d-none");
  }
});

$(".searchinput2").on('keyup', function (e) {
  if(($(".searchinput2").val().length === 0)){
      $('.searchclear2').addClass("d-none");
      $('.search-loupe2').removeClass("d-none");
  }
  if ($(this).val().length > 0) {
      $('.searchclear2').removeClass("d-none");
      $('.search-loupe2').addClass("d-none");
  }
});
// Reset The Search Data and Replace the Icon
$(".searchclear3").click(function(){
  $(".searchinput3").val('');
  if($(".searchinput3").val('')) {
      $('.searchclear3').addClass("d-none");
      $('.search-loupe3').removeClass("d-none");
  }
});

$(".searchinput3").on('keyup', function (e) {
  if(($(".searchinput3").val().length === 0)){
      $('.searchclear3').addClass("d-none");
      $('.search-loupe3').removeClass("d-none");
  }
  if ($(this).val().length > 0) {
      $('.searchclear3').removeClass("d-none");
      $('.search-loupe3').addClass("d-none");
  }
});
// Reset The Search Data and Replace the Icon
$(".searchclear4").click(function(){
  $(".searchinput4").val('');
  if($(".searchinput4").val('')) {
      $('.searchclear4').addClass("d-none");
      $('.search-loupe4').removeClass("d-none");
  }
});

$(".searchinput4").on('keyup', function (e) {
  if(($(".searchinput4").val().length === 0)){
      $('.searchclear4').addClass("d-none");
      $('.search-loupe4').removeClass("d-none");
  }
  if ($(this).val().length > 0) {
      $('.searchclear4').removeClass("d-none");
      $('.search-loupe4').addClass("d-none");
  }
});
// Reset The Search Data and Replace the Icon
$(".searchclear5").click(function(){
  $(".searchinput5").val('');
  if($(".searchinput5").val('')) {
      $('.searchclear5').addClass("d-none");
      $('.search-loupe5').removeClass("d-none");
  }
});

$(".searchinput5").on('keyup', function (e) {
  if(($(".searchinput5").val().length === 0)){
      $('.searchclear5').addClass("d-none");
      $('.search-loupe5').removeClass("d-none");
  }
  if ($(this).val().length > 0) {
      $('.searchclear5').removeClass("d-none");
      $('.search-loupe5').addClass("d-none");
  }
});
// Reset The Search Data and Replace the Icon
$(".searchclear6").click(function(){
  $(".searchinput6").val('');
  if($(".searchinput6").val('')) {
      $('.searchclear6').addClass("d-none");
      $('.search-loupe6').removeClass("d-none");
  }
});

$(".searchinput6").on('keyup', function (e) {
  if(($(".searchinput6").val().length === 0)){
      $('.searchclear6').addClass("d-none");
      $('.search-loupe6').removeClass("d-none");
  }
  if ($(this).val().length > 0) {
      $('.searchclear6').removeClass("d-none");
      $('.search-loupe6').addClass("d-none");
  }
});
// Reset The Search Data and Replace the Icon
$(".searchclear7").click(function(){
  $(".searchinput7").val('');
  if($(".searchinput7").val('')) {
      $('.searchclear7').addClass("d-none");
      $('.search-loupe7').removeClass("d-none");
  }
});

$(".searchinput7").on('keyup', function (e) {
  if(($(".searchinput7").val().length === 0)){
      $('.searchclear7').addClass("d-none");
      $('.search-loupe7').removeClass("d-none");
  }
  if ($(this).val().length > 0) {
      $('.searchclear7').removeClass("d-none");
      $('.search-loupe7').addClass("d-none");
  }
});


$(".custom-select-dropdown").change(function () {
  if ($(".country option:selected") == "Send to Subscribers" ) {
    // ($("#dynamic_css").length00 == 0)
    alert("1")
      // $('#myModal').modal('show');
    }
  if ($(this).val() == "2") {
      // $('#myModal2').modal('show');
      alert("hey")
    }
});



  