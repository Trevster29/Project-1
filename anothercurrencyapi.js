$("#search").on("click", function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=SGD&to=MYR",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": "7c26c358dbmsh89b3f41a1fc08e4p1b28d1jsn03bcd936957b"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    $("qOne").html("Initial: EUR" + response.)
}
