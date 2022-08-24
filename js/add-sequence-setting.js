jQuery( document ).ready(function($) {
    // checkbox select all or cancel
    $("input.select-all").click(function () {
        var checked = this.checked;
        $("input.select-item").each(function (index,item) {
            item.checked = checked;
        });
    });
    $("input.select-edit").click(function () {
        var editChecked = this.checked;
        $("input.select-edit-item").each(function (index,item) {
            item.checked = editChecked;
        });
    });

    //check selected items
    $("input.select-item").click(function () {
        checkSelected();
    });
    $("input.select-edit-item").click(function () {
        checkEditSelected();
    });

    //check is all selected
    function checkSelected() {
        var all = $("input.select-all")[0];
        var total = $("input.select-item").length;
        var len = $("input.select-item:checked:checked").length;
        all.checked = len===total;
     }
    function checkEditSelected() {
        var all = $("input.select-edit")[0];
        var total = $("input.select-edit-item").length;
        var len = $("input.select-edit-item:checked:checked").length;
        all.checked = len===total;
     }
});