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
$('.select-package').change(function() {
    var total=$('input[name="lineup[]"]:checked').length;
 $(".noOfPackages span").text(total) 
 $(".noOfPackages a").text("Packages added");
 })

$('.select-package1').change(function() {
    var total=$('input[name="lineup1[]"]:checked').length;
 $(".noOfPackages1 span").text(total) 
 $(".noOfPackages1 a").text("Packages added");
 })

$('.select-package2').change(function() {
    var total=$('input[name="lineup2[]"]:checked').length;
 $(".noOfPackages2 span").text(total) 
 $(".noOfPackages2 a").text("Packages added");
 })

$('.select-package3').change(function() {
    var total=$('input[name="lineup3[]"]:checked').length;
 $(".noOfPackages3 span").text(total) 
 $(".noOfPackages3 a").text("Packages added");
 })

$('.select-package4').change(function() {
    var total=$('input[name="lineup4[]"]:checked').length;
 $(".noOfPackages4 span").text(total) 
 $(".noOfPackages4 a").text("Packages added");
 })
 
// auto email js end //
