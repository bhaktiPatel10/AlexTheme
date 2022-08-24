/* Text packages Javascript */
jQuery( document ).ready(function($) {
    /* Data table */
    $('#text-packages').DataTable({
        "dom": '<"top"i>rt<"bottom"flp><"clear">'
    });
});


$(function(){
    $(".templateList.templateListData a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    });
    $(".templateList.templateListData1 a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    });
    $(".templateList.templateListData2 a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    });
    $(".templateList.templateListData3 a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    });
    $(".templateList.templateListData4 a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    });
    $(".templateList.templateListData5 a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    });
  });