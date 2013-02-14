$(function(){
  $('#submit').click(function(){
    BL.createContent(JSON.stringify({department: $('#department').val(), name: $('#name').val(), num: $('#num').val()}));
  });
});