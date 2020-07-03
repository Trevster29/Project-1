$("#search").on("click", function() {
//Here's api key
var APIKey = "7d072e672286081a47af4310fe4d0929";
var currencies = $(".search").val();
//here's query url
var queryURL = "https://api.currencylayer.com/live?access_key=7d072e672286081a47af4310fe4d0929"
+ APIKey + "&q=" + currencies ;

console.log(currencies);
console.log(queryURL);
//time to call that ajaxxx
$.ajax({
    url: queryURL,
    method: "GET",
})
//store data in a function
.then(function (response) {
    //log my query url
    console.log(response);
    console.log(currencies);

    //transfer content into html
    $(".currencies").html("<h1>"+ response.name + "<h1>");
    $(".cOne").text("Source:" + response.source);
    $(".cTwo").text("OG number:" + response.quotes.USDUSD);
    $(".cThree").text("Exchange:" + response.quotes.USDMXN);

});


});