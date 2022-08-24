/* Customize Javascript */
jQuery( document ).ready(function($) {
    // checkbox select all or cancel
 $("input.select-item-one").click(function () {
     var checked = this.checked;
       if(checked) {
             $(".quantity-one").removeClass("d-none") 
          } else {
             $(".quantity-one").addClass("d-none") 
          }
     });
    $("input.select-item-two").click(function () {
    var checked = this.checked;
        if(checked) {
            $(".quantity-two").removeClass("d-none") 
            } else {
            $(".quantity-two").addClass("d-none") 
            }
    });
    $("input.select-item-three").click(function () {
        var checked = this.checked;
            if(checked) {
                $(".quantity-three").removeClass("d-none") 
                } else {
                $(".quantity-three").addClass("d-none") 
                }
        });
    $("input.select-item-four").click(function () {
        var checked = this.checked;
            if(checked) {
                $(".quantity-four").removeClass("d-none") 
                } else {
                $(".quantity-four").addClass("d-none") 
                }
        });
    $("input.select-item-five").click(function () {
        var checked = this.checked;
            if(checked) {
                $(".quantity-five").removeClass("d-none") 
                } else {
                $(".quantity-five").addClass("d-none") 
                }
        });     
    $("input.select-item-six").click(function () {
        var checked = this.checked;
            if(checked) {
                $(".quantity-six").removeClass("d-none") 
                } else {
                $(".quantity-six").addClass("d-none") 
                }
        });     
    });