var quoteList = []
var carrierList = []
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
        //var quoteList = []

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

        localStorage.setItem("numQuotes", quoteList.length)
            for (y = 0; y < quoteList.length; y++) {
                localStorage.setItem(y, quoteList[y]);
            }
            for (z = 0; z < response.Carriers.length; z++) {
                carrierList.push(JSON.stringify(response.Carriers[z]))
                var myCarrier = 'Carrier' + z
                localStorage.setItem(myCarrier, carrierList[z])
            }
        });
        window.open("./tickets.html")
    });



    // var contentUl = document.createElement("ul")
    // for (var i = 0; i < priceList.Quotes.length; i++) {
    //     console.log("Does this work:" + priceList.Quotes.length)

    //     var contentLi = document.createElement("li");
    //     contentLi.textContent = "Airline: " + high_score[i].name + " Price: " + high_score[i].score;
    //     contentUl.append(contentLi);

    // }

    // document.body.append(contentUl);




});
/* function sort(items){

  for(x=0;x<items.quotes.length;x++)
  {

    var temp = item[x];
    if(item[x]>item[x+1])
    {
      item[x] = item[x+1]
      item[x+1] = temp
    }
  }
} */
/*


//


// first page search button, origin location, destination location, price parameters

// user starting country, currency, locale, originplace, destinationplace, outboundpartialdate
*/
