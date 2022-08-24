/* Sequence step Javascript */
jQuery( document ).ready(function($) {
   
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('dd/mm/yyyy') + ' to ' + end.format('dd/mm/yyyy'));
    });
  
    // checkbox select all or cancel
    $("input.select-item").click(function () {
      var checked = this.checked;
     
          if(checked) {
              $(".dropdown.actions").removeClass("d-none") 
            } else {
              $(".dropdown.actions").addClass("d-none") 
            }
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

  // auto email js start //

  // Toggle the side navigation for add package
  $(".sidepanelToggle").on("click", function(e) {
    e.preventDefault();
    $(".modal.new-email-modal").toggleClass("sidepanel-toggled");
    $('.new-email-modal').scrollTop(0);
  });

  $(".sidepanelToggleofTextmsg").on("click", function(e) {
    e.preventDefault();
    $(".modal.text-msg-modal").toggleClass("sidepanel-toggled");
    $('.text-msg-modal').scrollTop(0);
  });

  $(".sidepanelToggleofFb").on("click", function(e) {
    e.preventDefault();
    $(".modal.fb-modal").toggleClass("sidepanel-toggled");
    $('.fb-modal').scrollTop(0);
  });

  $(".sidepanelToggleofTwitter").on("click", function(e) {
    e.preventDefault();
    $(".modal.twitter-modal").toggleClass("sidepanel-toggled");
    $('.twitter-modal').scrollTop(0);
  });

  $(".sidepanelToggleofLinkedIn").on("click", function(e) {
    e.preventDefault();
    $(".modal.linkedin-modal").toggleClass("sidepanel-toggled");
    $('.linkedin-modal').scrollTop(0);
  });

  // drag //
  $('.email-left-panel .sortableList').sortable();

  // expiration date check condition
  if($('#expirationDate').val()){
    $('#neverExpires').prop('checked', false);
  }
  $("#neverExpires").change(function() {
    if(this.checked) {
      $('#expirationDate').val("")
    }
  });

  if($('#expirationDate1').val()){
    $('#neverExpires1').prop('checked', false);
  }
  $("#neverExpires1").change(function() {
    if(this.checked) {
      $('#expirationDate1').val("")
    }
  });

  if($('#expirationDate2').val()){
    $('#neverExpires2').prop('checked', false);
  }
  $("#neverExpires2").change(function() {
    if(this.checked) {
      $('#expirationDate2').val("")
    }
  });

  if($('#expirationDate3').val()){
    $('#neverExpires3').prop('checked', false);
  }
  $("#neverExpires3").change(function() {
    if(this.checked) {
      $('#expirationDate3').val("")
    }
  });

  if($('#expirationDate4').val()){
    $('#neverExpires4').prop('checked', false);
  }
  $("#neverExpires4").change(function() {
    if(this.checked) {
      $('#expirationDate4').val("")
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
  function dateChanged4(ev) {
    $('#neverExpires4').prop('checked', false);
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

  $('#expiration-date1').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
  })
  .change(dateChanged1)
  .on('changeDate', dateChanged1);

  $('#expiration-date2').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
  })
  .change(dateChanged2)
  .on('changeDate', dateChanged2);

  $('#expiration-date3').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
  })
  .change(dateChanged3)
  .on('changeDate', dateChanged3);

  $('#expiration-date4').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
  })
  .change(dateChanged4)
  .on('changeDate', dateChanged4);


  // no, of packages
  $(".noOfPackages span").text("0 Package added");
  $('.select-package').change(function() {
    var total=$('input[name="lineup[]"]:checked').length;
    $(".noOfPackages1 span").remove("0 Package added");
  $(".noOfPackages span").text(total) 
    if(total <= 1)
    {$(".noOfPackages a").text("Package added");} 
    else 
    $(".noOfPackages a").text("Packages added");
    })

  $(".noOfPackages1 span").text("0 Package added");
  $('.select-package1').change(function() {
    var total=$('input[name="lineup1[]"]:checked').length;
    $(".noOfPackages1 span").remove("0 Package added");
  $(".noOfPackages1 span").text(total) 
    if(total <= 1)
    {$(".noOfPackages1 a").text("Package added");} 
    else 
    $(".noOfPackages1 a").text("Packages added");
    })

  $(".noOfPackages2 span").text("0 Package added");
  $('.select-package2').change(function() {
    var total=$('input[name="lineup2[]"]:checked').length;
    $(".noOfPackages2 span").remove("0 Package added");
  $(".noOfPackages2 span").text(total) 
    if(total <= 1)
    {$(".noOfPackages2 a").text("Package added");} 
    else 
    $(".noOfPackages2 a").text("Packages added");
    })

  $(".noOfPackages3 span").text("0 Package added");
  $('.select-package3').change(function() {
    var total=$('input[name="lineup3[]"]:checked').length;
    $(".noOfPackages3 span").remove("0 Package added");
  $(".noOfPackages3 span").text(total) 
    if(total <= 1)
    {$(".noOfPackages3 a").text("Package added");} 
    else 
    $(".noOfPackages3 a").text("Packages added");
    })

  $(".noOfPackages4 span").text("0 Package added");
  $('.select-package4').change(function() {
    var total=$('input[name="lineup4[]"]:checked').length;
    $(".noOfPackages4 span").remove("0 Package added");
  $(".noOfPackages4 span").text(total) 
    if(total <= 1)
    {$(".noOfPackages4 a").text("Package added");} 
    else 
    $(".noOfPackages4 a").text("Packages added");
    })

  // auto email js end //

  // auto focus //
  $('.new-email-modal').on('shown.bs.modal', function () {
    $('#subject').focus();
  })
  $('.text-msg-modal').on('shown.bs.modal', function () {
    $('#textMessage').focus();
  })
  $('.fb-modal').on('shown.bs.modal', function () {
    $('#textMessageFb').focus();
  })
  $('.twitter-modal').on('shown.bs.modal', function () {
    $('#textMessageTw').focus();
  })
  $('.linkedin-modal').on('shown.bs.modal', function () {
    $('#textMessageLi').focus();
  })
  $('.task-modal').on('shown.bs.modal', function () {
    $('#title').focus();
  })
})

  
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
// dropdown Selection //
$(function(){
  $(".dropdown-menu.emailExecutionData a").click(function(){
    $(".btn.emailExecution").text($(this).text());
  var respond=  $(".btn.emailExecution:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.textExecutionData a").click(function(){
    $(".btn.textExecution").text($(this).text());
  var respond=  $(".btn.textExecution:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.facebookExecutionData a").click(function(){
    $(".btn.facebookExecution").text($(this).text());
  var respond=  $(".btn.facebookExecution:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.twitterExecutionData a").click(function(){
    $(".btn.twitterExecution").text($(this).text());
  var respond=  $(".btn.twitterExecution:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.linkedinExecutionData a").click(function(){
    $(".btn.linkedinExecution").text($(this).text());
  var respond=  $(".btn.linkedinExecution:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.taskExecutionData a").click(function(){
    $(".btn.taskExecution").text($(this).text());
  var respond=  $(".btn.taskExecution:first-child innerText").text($(this).text());
  });
});
// csxxcsx
$(function(){
  $(".dropdown-menu.textdaysData a").click(function(){
    $(".btn.textdays").text($(this).text());
  var respond=  $(".btn.textdays:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.twitterDaysData a").click(function(){
    $(".btn.twitterDays").text($(this).text());
  var respond=  $(".btn.twitterDays:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.taskDaysData a").click(function(){
    $(".btn.taskDays").text($(this).text());
  var respond=  $(".btn.taskDays:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.statusContactData a").click(function(){
    $(".btn.statusContact").text($(this).text());
  var respond=  $(".btn.statusContact:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.statusActivityData a").click(function(){
    $(".btn.statusActivity").text($(this).text());
  var respond=  $(".btn.statusActivity:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.statusTaskData a").click(function(){
    $(".btn.statusTask").text($(this).text());
  var respond=  $(".btn.statusTask:first-child innerText").text($(this).text());
  });
});
$(function(){
  $(".dropdown-menu.daysSettingData a").click(function(){
    $(".btn.daysSetting").text($(this).text());
  var respond=  $(".btn.daysSetting:first-child innerText").text($(this).text());
  });
});

$(document).ready(function() {
  $(".sidepanelNameToggle").on("click", function(e) {
   e.preventDefault();
   $(".namefieldPanel").toggleClass("sidepanel-name-toggled");
   $('#title-name').focus();
   $('.namefieldPanel').scrollTop(0);
   console.log("testing")
});
});

$('#expiration-date-name').datepicker({
format: 'dd/mm/yyyy',
autoclose: true,
calendarWeeks : true,
clearBtn: true,
disableTouchKeyboard: true
});