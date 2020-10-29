
$(document).ready(function () {
    var quoteList = []
    var carrierList = []
    var numQuotes = parseInt(localStorage.getItem("numQuotes"))
    for (x = 0; x < numQuotes; x++) {
        quoteList.push(JSON.parse(localStorage.getItem(x)))
    }
    for (y = 0; y < localStorage.length-numQuotes -1; y++) {
        carrierList.push(JSON.parse(localStorage.getItem("Carrier" + y)))
        console.log(carrierList[y].CarrierId + "myCID")
    }

    //console.log(quoteList[0].MinPrice)
    
    //console.log(quoteList)

    function displayPrices() {
        for (i = 0; i < 5; i++) {
            $("#" + i).text(quoteList[i].MinPrice);
            console.log(quoteList[i].OutboundLeg.CarrierIds + "quote's CID")
            for(p = 0; p< carrierList.length; p++)
            {
                console.log(quoteList[i].OutboundLeg.CarrierIds + "ql")
                console.log(carrierList[p].CarrierId + "cl")

                if(quoteList[i].OutboundLeg.CarrierIds == carrierList[p].CarrierId)
                {
                    //console.log(carrierList[p].Name + "matches")
                    $("#" + i + "a").text(carrierList[p].Name);
                }
            }

            
        }
    }

    
    displayPrices();




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