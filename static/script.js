$(document).ready(function(){

  $(".fa-search").click(function(){
    $(".container, .input").toggleClass("active");
    $("input[type='text']").focus();
  });

});

$.ajax({
  url: "https://developers.zomato.com/api/v2.1/categories",
  headers: {"user-key": "8fadb61c1f4968f4a79b989c2776f9ae"},
  complete: function(data){console.log(data)}
});
