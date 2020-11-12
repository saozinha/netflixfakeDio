$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      jsonPath : 'js/owl/json/custom.json',
      jsonSuccess : customDataSuccess
    });
   
    function customDataSuccess(data){
      var content = "";
      for(var i in data["items"]){
         
         var img = data["items"][i].img;
         var alt = data["items"][i].alt;
   
         content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
      }
      $("#owl-demo").html(content);
    }
   
  }); 