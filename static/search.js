
$(document).ready(function(){

  $.ajax({
    url: "https://developers.zomato.com/api/v2.1/categories",
    headers: {"user-key": "8fadb61c1f4968f4a79b989c2776f9ae"},
    complete: function(data){console.log(data)}

    request.open('GET', url, headers, true);
    name = categories
    alert(name);
  });
});