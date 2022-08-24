/* Address Book Javascript */
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

    // $(function(){
    //     $("#filter-1 .dropdown-menu a").click(function(){
    //       $("#filter-1 .btn:first-child").text($(this).text());
    //       $("#filter-1 .btn:first-child").val($(this).text());
    //    });
    // });
});
