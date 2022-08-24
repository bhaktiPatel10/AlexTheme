/* Email Inbox Javascript */
 // drag //
 $('.email-left-panel .sortableList').sortable();
 $('.email-threading-panel .sortableList').sortable();

$(".email-inbox-left .nav li.nav-item ul li.nav-item").click(function(){
    $(".email-inbox-left .nav li.nav-item ul li.nav-item").removeClass("active");
    $(this).addClass('active');
    $(this).closest( "a.nav-link" ).parent().addClass('active')
});

$(".email-inbox-left .nav li.nav-item").on("click", function() {
    $(this).siblings( ".active" ).removeClass("active");
    // $(".email-inbox-left .nav li.nav-item ul li.nav-item").removeClass("active");
    $(this).addClass("active");

    if($(".email-inbox-left .nav li.nav-item a").hasClass("collapsed")) {
        $(".email-inbox-left .nav li.nav-item a svg").addClass("fa-angle-down");
        $(".email-inbox-left .nav li.nav-item a svg").removeClass("fa-angle-right");
    } else {
        $(".email-inbox-left .nav li.nav-item a svg").addClass("fa-angle-right");
        $(".email-inbox-left .nav li.nav-item a svg").removeClass("fa-angle-down");
    }
});


$("#myTabContent .list-group-item").on("click", function() {
    $(this).siblings( ".selected" ).removeClass("selected");
    $(this).addClass("selected");
});

// Toggle the side navigation for add package
$(".sidepanelToggle").on("click", function(e) {
    e.preventDefault();
    $(".modal.new-email-modal").toggleClass("sidepanel-toggled");
    $('.new-email-modal').scrollTop(0);
});



$('#expiration-date').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
});

$('.email-inbox-middle').on('click', '.list-group-item input[type="checkbox"]', function() {
    $(this).parent().toggleClass("item-select");
    if ($('.list-group input[type=checkbox]').is(":checked")) {
        $(".email-navbar-main").show(300);
    }
    else {
        $(".email-navbar-main").hide(200);
    }
});
$('#scheduleDate').on('changeDate', function(event) {
    $(".schdeuleDateOfthreading").html("Scheduled for" +" " + event.format());
  });
$('#expiryDate').on('changeDate', function(event) {
    $(".expiryDateOfthreading").html("Expired at" +" " + event.format());
  });

$('#scheduleDateMail').on('changeDate', function(event) {
    $(".schdeuleDateOfEmail").html("Scheduled for" +" " + event.format());
  });
$('#expiryDateMail').on('changeDate', function(event) {
    $(".expiryDateOfEmail").html("Expired at" +" " + event.format());
  });


/* Pagination */
//Pagination
/*pageSize = 2;
currentPageAll = 1
var pageCountAll =  $("#all .list-group-item").length / pageSize;
   
$("#all .totalPages").append(pageCountAll*pageSize);
 for(var i = 0 ; i<pageCountAll;i++){
    
//    $("#pagin").append('<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li> ');
   $("#pagin .page-item:last").before('<li class="page-item"><a class="page-link pageItem" href="#">'+(i+1)+'</a></li> ');
 }
    $("#pagin li").first().next().find("a").addClass("active")
showPageAll = function(page) {
    $("#all .list-group-item").hide();
    // $("#all .list-group-item").addClass('hideItem')
    $("#all .list-group-item").each(function(n) {
        if (n >= pageSize * (page - 1) && n < pageSize * page)
            $(this).show();
            
        if(pageCountAll === page) {
            $( "#all .nextPage" ).prop( "disabled", true );
        } else {
            $( "#all .nextPage" ).prop( "disabled", false );
        }
        if(page==1) {
            $( "#all .prevPage" ).prop( "disabled", true );
        } else {
            $( "#all .prevPage" ).prop( "disabled", false );
        }
    });    
    $("#all .currentPageSize").html(pageSize * (page - 1)+'-'+pageSize * page);     
}

showPageAll(1);

$("#all .nextPage").click(function() {
    $(this).addClass("active");
    showPageAll(parseInt(currentPageAll)+1)
    currentPageAll = parseInt(currentPageAll)+1;
});
$("#all .prevPage").click(function() {
    showPageAll(parseInt(currentPageAll)-1)
    currentPageAll = parseInt(currentPageAll)-1;
});
*/

/**--------------------- */
/*pageSizeunread = 2;
currentPageUnread = 1
var pageCountUnread =  $("#unread .list-group-item").length / pageSizeunread;
   
$("#unread .totalPages").append(pageCountUnread*pageSizeunread);
 for(var i = 0 ; i<pageCountUnread;i++){
    
//    $("#pagin").append('<li class="page-item"><a class="page-link" href="#">'+(i+1)+'</a></li> ');
   $("#pagin .page-item:last").before('<li class="page-item"><a class="page-link pageItem" href="#">'+(i+1)+'</a></li> ');
 }
    $("#pagin li").first().next().find("a").addClass("active")
showPageUnread = function(page) {
    $("#unread .list-group-item").hide();
    // $("#all .list-group-item").addClass('hideItem')
    $("#unread .list-group-item").each(function(n) {
        if (n >= pageSizeunread * (page - 1) && n < pageSizeunread * page)
            $(this).show();
            
        if(pageCountUnread === page) {
            $( "#unread .nextPage" ).prop( "disabled", true );
        } else {
            $( "#unread .nextPage" ).prop( "disabled", false );
        }
        if(page==1) {
            $( "#unread .prevPage" ).prop( "disabled", true );
        } else {
            $( "#unread .prevPage" ).prop( "disabled", false );
        }
    });    
    $("#unread .currentPageSize").html(pageSizeunread * (page - 1)+'-'+pageSizeunread * page);     
}

showPageUnread(1);

$("#unread .nextPage").click(function() {
    $(this).addClass("active");
    showPageUnread(parseInt(currentPageUnread)+1)
    currentPageUnread = parseInt(currentPageUnread)+1;
});
$("#unread .prevPage").click(function() {
    showPageUnread(parseInt(currentPageUnread)-1)
    currentPageUnread = parseInt(currentPageUnread)-1;
});*/

$("li.card .card-header").click(function(){
    
    if ( $(this).find('div.mail-details').attr('aria-expanded') === "false") {
    $(this).find('.icon-list').removeClass('d-none');
    $(this).find(".msg-content").addClass('hide-date');
    } else {
        $(this).find(".msg-content").removeClass('hide-date');
        $(this).find('.icon-list').addClass('d-none');
    }
  });

  // check expiration date condition
    if($('#expirationDate').val()){
        $('#neverExpires').prop('checked', false);
    }
    if($('#expirationDate1').val()){
    $('#neverExpires1').prop('checked', false);
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

  function dateChanged(ev) {
    $('#neverExpires').prop('checked', false);
  }
  function dateChanged1(ev) {
    $('#neverExpires1').prop('checked', false);
  } 

  $('#expiration-date').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
  })
  .change(dateChanged)
  .on('changeDate', dateChanged);

  $('#expiration-date1').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    onSelect: function(selectedDate) {
     }
  })
  .change(dateChanged1)
  .on('changeDate', dateChanged1);

  $('#schedule-date').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    orientation:"right",
  })
  $('#schedule-date1').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    orientation:"right"
  })
  $('#expiry-date1').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    orientation:"right"
  })
  $('#expiry-date').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true,
    orientation:"right"
  })
  
// no, of packages
$(".noOfPackages span").text("0 Package added");
$('.select-package').change(function() {
    var total=$('input[name="lineup[]"]:checked').length;
    $(".noOfPackages span").remove("0 Package added");
  $(".noOfPackages span").text(total) 
  if(total <= 1 )
  {$(".noOfPackages a").text("Package added");} 
 else 
  $(".noOfPackages a").text("Packages added");
  })


$(".noOfPackages1 span").text("0 Package added");
$('.select-package1').change(function() {
    var total=$('input[name="lineup1[]"]:checked').length;
    $(".noOfPackages1 span").remove("0 Package added");
  $(".noOfPackages1 span").text(total) 
  if(total <= 1)
  {$(".noOfPackages1 a").text("Package added");} 
  else 
  $(".noOfPackages1 a").text("Packages added");
  })

  $(document).ready(function() {
    jQuery(function($){
        $('#infinite-container').scrollPagination({
            'url': 'http://patelrakesh.in/alex/data/democontent.json',
            'data': {
                'page': 1,
                'size': 15
            }
        });

        $('#infinite-container-threading').scrollPagination({
            'url': 'http://patelrakesh.in/alex/data/democontent.json',
            'data': {
                'page': 1,
                'size': 15
            },
            'manuallyText': 'threading'
        });
    });

    // auto focus //
    $('.new-email-modal').on('shown.bs.modal', function () {
        $('#to').focus();
    })

    if ($('div.sidepanel-toggled').length) {
        // alert("")
        // $('#searchForPackage').focus();
    }

      // dropdown submenu
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
  
    // dropdown Selection //
        $(function(){
            $(".templateListData a").click(function(){
            $(".btn.insertBtn").text($(this).text());
            });
            $(".templateListData1 a").click(function(){
            $(".btn.insertBtn").text($(this).text());
            });
            $(".templateListData2 a").click(function(){
            $(".btn.insertBtn").text($(this).text());
            });
            $(".templateListData3 a").click(function(){
            $(".btn.insertBtn").text($(this).text());
            });
            $(".templateListData4 a").click(function(){
            $(".btn.insertBtn").text($(this).text());
            });
            $(".templateListData5 a").click(function(){
            $(".btn.insertBtn").text($(this).text());
            });
        });
});