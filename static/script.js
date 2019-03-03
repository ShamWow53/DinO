
$(document).ready(function(){
  $("#mySearch").keypress(function(e){

  // console.log("whatever");
    var mySearchNum;
    if(e.which == 13) {
      var mySearch = $("#mySearch").val(), 
      City=$("#City").val();

      mySearch=mySearch.toLowerCase();
      mySearch=mySearch.charAt(0).toUpperCase() + mySearch.slice(1);
      
      if(mySearch=="Chinese"){
        mySearchNum=25;
      }
      if(mySearch=="Italian"){
        mySearchNum=55;
      }

      $.ajax({
          url: "https://developers.zomato.com/api/v2.1/search?entity_id="+City+"&entity_type=city&cuisines="+mySearchNum,
          headers: {"user-key": "8fadb61c1f4968f4a79b989c2776f9ae"},
          complete: function(response){
            var obj=JSON.parse(response.responseText);
            var html="";
            console.log(obj);
            for(var rest in obj.restaurants){
              // console.log(obj.restaurants[rest].restaurant.cuisines + ' ' + mySearch);
              if(obj.restaurants[rest].restaurant.cuisines == mySearch){
                html+='<div>&nbsp;&nbsp;&nbsp;'+obj.restaurants[rest].restaurant.name+'</div>';
                html+='<div>'+obj.restaurants[rest].restaurant.location.address+'</div>';
                html+='<a href="'+obj.restaurants[rest].restaurant.menu_url+'">Menu&nbsp;&nbsp;&nbsp;'+obj.restaurants[rest].restaurant.user_rating.aggregate_rating+' Stars <br /></a>';
              }
            }
            $("#data").html(html);
          }
      });
    }
  });

  $(".fa-search").click(function(){
    $(".container, .input").toggleClass("active")
    $("input[type='text']").focus();
  });

});
