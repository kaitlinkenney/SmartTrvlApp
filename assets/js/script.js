var quoteList = []
var carrierList = []
$(document).ready(function () {
    //this is for the image slider.
    $('.slider').slider();

    localStorage.clear();

    $("#submit").on("click", function () {
        console.log("test123")

        var origin = $("#inputField1").val().trim();


        if (origin != "") {

            var destination = $("#destination").val().trim()

            var date = $("#flightDate").val().trim()

            var maxPrice = $("#max-price").val().trim()

            var country = $("#country").val().trim()
    

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

            

            $.ajax(settings).done(function (response) {
                console.log(response);

                console.log(response.Quotes[0].MinPrice)
                for (x = 0; x < response.Quotes.length; x++) {

                    if (parseInt(response.Quotes[x].MinPrice) <= parseInt(maxPrice)) {
                        quoteList.push(JSON.stringify(response.Quotes[x]))
                    }
                }

                quoteList.sort(function (a, b) {
                    return b.Quotes - a.Quotes;
                });
                console.log(quoteList.toString())

                
                localStorage.setItem("quotes", JSON.stringify(quoteList));

                
                localStorage.setItem("carriers", JSON.stringify(response.Carriers))

                
                localStorage.setItem("places", JSON.stringify(response.Places));
                window.location.href = "tickets.html"
            });
        
            localStorage.setItem("country", country)
          
      }
     
    });

});
