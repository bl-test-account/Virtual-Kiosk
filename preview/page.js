$(function(){
  var data = JSON.parse(BL.getContentForPreview().content[0].data);
  
  $('#dept').text(data.department);
  $('#name').text(data.name);
  
  $('button').click(function(){
    window.open('facetime://1' + data.number)
  });
    
  BL.previewReady();
});