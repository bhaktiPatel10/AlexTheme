// ** Create Package Upload **//
jQuery( document ).ready(function($) {
// Drag
 $('tbody').sortable();

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
 });
