$(document).ready(function () {

    console.log("helloo")
    $("#submit").on("click", function () {
        console.log("clicked")

        var origin = $("#origin").val().trim();
        console.log(origin)
        //.trim();

        var destination = $("#destination").val().trim()
        console.log(destination)
        //.trim();

        var date = $("#flightDate").val().trim()
        console.log(date)
        //.trim();

        var maxPrice = $("#max-price").val().trim()
        console.log(maxPrice)

        // var origin = "LAX"
        // var destination = "EWR"
        // var date = "anytime" 


        // //test code

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + origin + "/" + destination + "/" + date,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "273787c05bmshf3984eb1254cd02p1a20a5jsne40328fc0685"
            }
        };

        // console.log(JSON.stringify(settings))
        $.ajax(settings).done(function (response) {
            console.log(response);
            //response.quotes[0].minPrice
        });

    });

});
    // ​//
    // /* function sort(items){

    //   for(x=0;x<items.quotes.length;x++)
    //   {

    //     var temp = item[x];
    //     if(item[x]>item[x+1])
    //     {
    //       item[x] = item[x+1]
    //       item[x+1] = temp
    //     }
    //   }
    // } */
    // /*


    //  highscores.push(score);
    //     highscores.sort(function (a, b) {
    //         return b.score - a.score;
    //     });


    // first page search button, origin location, destination location, price parameters

    // user starting country, currency, locale, originplace, destinationplace, outboundpartialdate

