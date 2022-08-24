/* Activity Log Javascript */
//Filter
var $table = $('#b-table');
    $(function () {
        
        $('#toolbar').find('select').change(function () {
            $table.bootstrapTable('filterBy', {
               })
        });
})
