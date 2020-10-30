$(document).ready(function () {
    var quoteList = []
    var carrierList = []
    /*var numQuotes = parseInt(localStorage.getItem("numQuotes"))
    var country = localStorage.getItem("country")
    var city = localStorage.getItem("city")
    console.log(city)
    console.log(country)
    for (x = 0; x < numQuotes; x++) {
        quoteList.push(JSON.parse(localStorage.getItem(x)))
        console.log(quoteList[x].MinPrice + " = min price")
    }
    for (y = 0; y < (localStorage.length-numQuotes) -3; y++) {
        carrierList.push(JSON.parse(localStorage.getItem("Carrier" + y)))
        console.log(carrierList[y].CarrierId + "myCID")
    }*/

    //console.log(quoteList[0].MinPrice)
    
    //console.log(quoteList)
    var count = 0
    function displayPrices() {
        var quotes = JSON.parse(localStorage.getItem("quotes"));
        var carriers = JSON.parse(localStorage.getItem("carriers"));
        for (i = 0; i<5; i++){
            $("#" + i).text("$" + JSON.parse(quotes[count]).MinPrice);
            
            for (j = 0; j<carriers.length; j++) {

                if(JSON.parse(quotes[count]).OutboundLeg.CarrierIds[0] == carriers[j].CarrierId)
                {
                    //console.log(carrierList[p].Name + "matches")
                    var cList = $("<h4>"+carriers[j].Name + "</h4>")
                    $("#" + i + "a").append(cList);
                }

            }
            count++;

        }
        /*for (i = 0; i < 5; i++) {
            $("#" + i).text("$" + quoteList[count].MinPrice);
            count++
            //console.log(quoteList[i].OutboundLeg.CarrierIds + "quote's CID")
            for(p = 0; p< carrierList.length; p++)
            {
                console.log(quoteList[i].OutboundLeg.CarrierIds + "quote list cid")
                console.log(carrierList[p].CarrierId + "carrier list cid")

                if(quoteList[i].OutboundLeg.CarrierIds == carrierList[p].CarrierId)
                {
                    //console.log(carrierList[p].Name + "matches")
                    var cList = $("<h4>"+carrierList[p].Name + "</h4>")
                    $("#" + i + "a").append(cList);
                }
            }

            
        }*/
    }
//when user clicks more options button, then the next 5 options will show.
    $(".moreOptions").on("click", function(e) {
        //e.prevent.default();
        displayPrices();
        console.log('clicked' + count)

    })

    
    displayPrices();





    var covSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid1910.p.rapidapi.com/data/confirmed/country/"+country+"/province/"+city,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid1910.p.rapidapi.com",
            "x-rapidapi-key": "1f276bab2bmsh9755c7e198e2120p10a455jsnb0359ae2a1b6"
        }
    }
    
    $.ajax(covSettings).done(function (response) {
        console.log(response + "covid Response");
        console.log("maybe not working cuz fuck")
    });
    

    // var covsettings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://covid-19-data.p.rapidapi.com/help/countries?format=json",
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    //         "x-rapidapi-key": "1f276bab2bmsh9755c7e198e2120p10a455jsnb0359ae2a1b6"
    //     }
    // }
    // $.ajax(covsettings).done(function (response) {
    //     console.log(response);
    //     console.log("working");
    // });

    

    //console.log(quoteList.toString())

    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + origin + "/" + destination + "/" + date,
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    //         "x-rapidapi-key": "273787c05bmshf3984eb1254cd02p1a20a5jsne40328fc0685"
    //     }
    //};

    /*  var contentUl = document.createElement("ul")
     for (var i = 0; i < quoteList.Quotes.length; i++) {
         console.log("Does this work:" + quoteList.Quotes.length)
 
         var contentLi = document.createElement("li");
         contentLi.textContent = "Airline: " + high_score[i].name + " Price: " + high_score[i].score;
         contentUl.append(contentLi);
 
     }
 
     document.body.append(contentUl); */
});