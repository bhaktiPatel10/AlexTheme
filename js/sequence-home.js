// sequence home jQuery

$( document ).ready(function() {
    $("table > tbody > tr").each(function () {
        $(this).on("click", function(){
            if ($(this).find( ".switch input[type=checkbox]" ).is(":checked")) {
                $(this).find(".select-item").prop( "checked", false );
            } else {
                $(this).find(".select-item").prop( "checked", true );
            }
        });

        $(this).find(".select-item").on("click", function(){
            // alert("clicked")
            if ($(this).is(":checked")) {
                $(this).closest('tr').find(".switch input[type=checkbox]").prop( "checked", false );
            } else {
                $(this).closest('tr').find(".switch input[type=checkbox]").prop( "checked", true );
            }
        });
    });

  // auto focus //
  $('#createSequence').on('shown.bs.modal', function () {
    $('#sequenceName').focus();
  })
});

// switch dropdown 
$(function(){
    $(".dropdown-menu.sequenceData a").click(function(){
      $(".btn.sequenceBtn").text($(this).text());
    var respond=  $(".btn.sequenceBtn:first-child innerText").text($(this).text());
    });
  });
  
  $(".dropdown-menu.sequenceData a").click(function(){
    var selText = $(this).text();
    $(this).parents('.packageBtn').html(selText);
    if(selText == " My Sequences"){
      $(".my-sequences").show();
      $(".team-sequences").addClass("d-none");
     
    }
    else {
      $(".my-sequences").hide();
      $(".team-sequences").removeClass("d-none");
     
    }
  });