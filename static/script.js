
$(document).ready(function(){
  $("#mySearch").keypress(function(e){

	console.log("whatever");
    if(e.which == 13) {
    	var mySearch = $("#mySearch").val(), 
    	City=$("#City").val();
      $.ajax({
			    url: "https://developers.zomato.com/api/v2.1/search?entity_id="+City+"&entity_type=city&cuisines="+mySearch,
			    headers: {"user-key": "8fadb61c1f4968f4a79b989c2776f9ae"},
			    complete: function(response){
			    	var obj=JSON.parse(response.responseText);
			    	console.log(obj.restaurants)
			    	var html;
			    	for(var rest in obj.restaurants){
			    		html+= '<div>' + obj.restaurants[rest].restaurant.name + '</div>';
			    		console.log(obj.restaurants[rest].restaurant);
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
