$(".search").on("click", function() {

    var API_KEY = '17138553-d9b102c8586536763f3a11d32';
    var queryURL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
    
    console.log(queryUrl);


    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function(data){
    //     if (parseInt(data.totalHits) > 0)
    //     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
    // else
    //     console.log('No hits');
      });
    var imageUrl= data.image_original_url;

    //Creating and storing an img tag
    var photo= $("<img>");

    //Setting the photo src attribute to imgUrl
    photo.attr("src", imageUrl);
    photo.attr("alt","photo");

    //prepending the photo to the image div
    $("#photo").prepend(photo);
    });




