$("#search").on("click", function) {
//Here's api key
var APIKey = "7d072e672286081a47af4310fe4d0929";
var currencies = $(".search").val();
//here's query url
var queryURL = "http://www.api.currencylayer.com/" +
"access_key="
+ currencies
"&appid=" 
+ APIKey;

console.log(currencies);
//time to call that ajaxxx
$.ajax({
    url: queryURL,
    method: "GET",
})
//store data in a function
.then(function (response)) {
    //log my query url
    console.log(response);
    console.log(currencies);

    //transfer content into html
    $(".currencies").html("<h1>"+ response.name + "<h1>");
    $(".cOne").text("US Dollar:" + response.source);
    $(".cTwo").text("Euro:" + response.quotes.USDEUR);
    $(".cThree").text("Exchange:" + response.result);

});


});