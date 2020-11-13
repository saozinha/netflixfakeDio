 
 
    $("#owl-demo").owlCarousel({
      jsonPath : 'js/owl/json/custom.json',
      jsonSuccess : customDataSuccess,
      loop:true,  
      rtl:true,
      responsive: {
          0: {
              items:3
          },
          600: {
            items:4
          },
          1000: {
              items:5
          }
      }
    });
   
    function customDataSuccess(data){
      var content = "";
      for(var i in data["items"]){
         
         var img = data["items"][i].img;
         var alt = data["items"][i].alt;
   
         content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
      }
      $("#owl-demo ").html(content);
    }
    