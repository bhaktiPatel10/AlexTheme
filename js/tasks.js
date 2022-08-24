/* Tasks Javascript */
jQuery( document ).ready(function($) {
    // checkbox select all or cancel
    $("input.select-all").click(function () {
        var checked = this.checked;
        $("input.select-item").each(function (index,item) {
            item.checked = checked;
        });

        if(checked) {
            $(".toolbar-right .btn.btn-warning").removeClass("d-none")
        } else {
            $(".toolbar-right .btn.btn-warning").addClass("d-none")
        }
    });

    //check selected items
    $("input.select-item").click(function () {
        checkSelected();
    });

    //check is all selected
    function checkSelected() {
        var all = $("input.select-all")[0];
        var total = $("input.select-item").length;
        var len = $("input.select-item:checked:checked").length;
        all.checked = len===total;
        if(len>0) {
            $(".toolbar-right .btn.btn-warning").removeClass("d-none")
        } else {
            $(".toolbar-right .btn.btn-warning").addClass("d-none")
        }
    }
});

// Toggle the side navigation for add package
$(".sidepanelToggle").on("click", function(e) {
    e.preventDefault();
    $(".modal.new-email-modal").toggleClass("sidepanel-toggled").trigger('classChanged');
    $('.new-email-modal').scrollTop(0);
    
});

// Toggle the side navigation for new task button
$(".sidepanelTaskToggle").on("click", function(e) {
    e.preventDefault();
    $(".newTaskPanel").toggleClass("sidepanel-task-toggled");
    $('#title').focus();
    $('.newTaskPanel').scrollTop(0);
});

$(document).ready(function() {
    // $(".test").on('click', function() {
    //   console.log("You clicked my <tr>!");
       $(".sidepanelNameToggle").on("click", function(e) {
        e.preventDefault();
        $(".namefieldPanel").toggleClass("sidepanel-name-toggled");
        $('#title-name').focus();
        $('.namefieldPanel').scrollTop(0);
    });
    
    });
// });

// calender
$('input[name="daterange"]').daterangepicker({
    opens: 'left',
   
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('DD/MM/YYYY') + ' to ' + end.format('DD/MM/YYYY'));
  });

  $('#expiration-date').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
});
$('#expiration-date-name').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
});
  $('#expiration-date1').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
})


$('#schedule-date').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    orientation: "left",
  })
// quick fill //
$( function() {
    var availableTagsForSearch = [
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
    $( "#contactName" ).autocomplete({source: availableTagsForSearch });
       } );
$( function() {
    var availableTagsForSearch1 = [
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
    $( "#contactName1" ).autocomplete({source: availableTagsForSearch1 });
    $(".ui-autocomplete").css("z-index", "2147483647");
       } );
   
$( function() {
    var availableTagsForSearch = [
        "Alex",
        "Oliver",
        "Harry", 
        "George",
        "Emily", 
        "Noah", 
        "Jack", 
        "Jacob8", 
    ];
    $( "#companyName" ).autocomplete({source: availableTagsForSearch });
       } );
$( function() {
    var availableTagsForSearch2 = [
        "Alex",
        "Oliver",
        "Harry", 
        "George",
        "Emily", 
        "Noah", 
        "Jack", 
        "Jacob8", 
    ];
    $( "#companyName1" ).autocomplete({source: availableTagsForSearch2});
    $(".ui-autocomplete").css("z-index", "2147483647");
       } );
      
//    get value of list and calender //
var bla = $('#list').val();
if(bla !== ''){
 
}
var cal =$('.Calendar active').val();
if(cal !== ''){
 
}
$(".Calendar").on("click", function(e) {
    e.preventDefault();
    $("#b-table").addClass("d-none");
    $(".cladisplay").removeClass("d-none")
})
$(".list").on("click", function(e) {
    e.preventDefault();
$("#b-table").removeClass("d-none")
$(".cladisplay").addClass("d-none")
   })
// tagify //
// // jQuery



$("#teammate").val()
$("#teammate").tagsinput('items')

$("#teammate-name").val()
$("#teammate-name").tagsinput('items')
$(function(){
    $(".dropdown-menu.dropdown-menuData a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    })
    $(".dropdown-menu.dropdown-menuData1 a").click(function(){
        $(".btn.insertBtn1").text($(this).text());
      })
  });