jQuery( document ).ready(function($) {
    // checkbox select all or cancel
 $("input.select-all").click(function () {
     var checked = this.checked;
     $("input.select-item").each(function (index,item) {
         item.checked = checked;
     });
     if(checked) {
        $(".dropdown.actions").removeClass("d-none") 
     } else {
        $(".dropdown.actions").addClass("d-none") 
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
      $(".dropdown.actions").removeClass("d-none")
  } else {
      $(".dropdown.actions").addClass("d-none")
  }
 }
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

   // auto focus //
   $('.add-new-contact').on('shown.bs.modal', function () {
        $('#firstName').focus();
    })
   $('.edit-contact').on('shown.bs.modal', function () {
        $('#editFirstName').focus();
    })
 });

