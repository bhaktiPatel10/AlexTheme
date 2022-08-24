$(function(){
    $(".dropdown-menu.dropdown-menuData a").click(function(){
      $(".btn.insertBtn").text($(this).text());
    })
  });