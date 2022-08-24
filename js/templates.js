/* Templates Javascript */
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
                $(".dropdown.actions").removeClass("d-none") 
             } else {
                $(".dropdown.actions").addClass("d-none") 
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
            $(".dropdown.actions").removeClass("d-none")
        } else {
            $(".dropdown.actions").addClass("d-none")
        }
    }

    // auto focus //
    $('.new-temlpate-modal').on('shown.bs.modal', function () {
        $('#templateName').focus();
    })

    $('.edit-temlpate-modal').on('shown.bs.modal', function () {
        $('#templateEditName').focus();
    })

    $('.new-folder-modal').on('shown.bs.modal', function () {
        $('#newFolderName').focus();
    })

    $('.edit-folder-modal').on('shown.bs.modal', function () {
        $('#editFolderName').focus();
    })
});


$(function(){
    $(".dropdown-menu.dropdown-menuData a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    });
  });