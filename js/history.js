// ** History Jquery **//
jQuery( document ).ready(function($) {
    // checkbox select all or cancel
 $("input.select-all").click(function () {
     var checked = this.checked;
     $("input.select-item").each(function (index,item) {
         item.checked = checked;
     });
     if(checked) {
      $(".delete").removeClass("d-none") 
   } else {
      $(".delete").addClass("d-none") 
   }
 });

 //check selected items
 $("input.select-item").click(function () {
     var checked = this.checked;
     checkSelected();
 });

 //check is all selected
 function checkSelected() {
     var all = $("input.select-all")[0];
     var total = $("input.select-item").length;
     var len = $("input.select-item:checked:checked").length;
     all.checked = len===total;
     if(len>0) {
        $(".delete").removeClass("d-none")
    } else {
        $(".delete").addClass("d-none")
    }
 }
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

 function dateChanged(ev) {
    $('#neverExpires').prop('checked', false);
  }  
 function dateChanged1(ev) {
    $('#neverExpires1').prop('checked', false);
  }  
 function dateChanged2(ev) {
    $('#neverExpires2').prop('checked', false);
  }  


$('#expiration-date').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    onSelect: function(selectedDate) {
      // custom callback logic here
    }
})
//Listen for the change even on the input
.change(dateChanged)
.on('changeDate', dateChanged);

$('#expiration-date1').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    onSelect: function(selectedDate) {
      // custom callback logic here
    }
})
//Listen for the change even on the input
.change(dateChanged1)
.on('changeDate', dateChanged1);

$('#expiration-date2').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    onSelect: function(selectedDate) {
      // custom callback logic here
    }
})
//Listen for the change even on the input
.change(dateChanged2)
.on('changeDate', dateChanged2);

});


  
