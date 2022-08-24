/* Company Totals Javascript */
jQuery( document ).ready(function($) {
   
      $('input[name="daterange"]').daterangepicker({
        opens: 'left'
      }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('dd/mm/yyyy') + ' to ' + end.format('dd/mm/yyyy'));
      });
    
});
