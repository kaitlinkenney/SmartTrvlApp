
$(document).ready(function () {
    var quoteList = []
    var carrierList = []
    var numQuotes = parseInt(localStorage.getItem("numQuotes"))
    for (x = 1; x <= numQuotes; x++) {
        quoteList.push(JSON.parse(localStorage.getItem(x)))
    }
    for (y = numQuotes; y < localStorage.length; y++) {
        count = 0
        carrierList.push(JSON.parse(localStorage.getItem("Carrier" + count)))
        count++
    }
    console.log(quoteList[0].MinPrice)
    console.log(carrierList[0])
    //console.log(quoteList)

    function displayPrices() {
        for (i = 0; i < 5; i++) {
            $("#" + i).text(quoteList[i].MinPrice);
            //$("#" + i + "a").text(carrierList[i].Name);
        }
    }
    displayPrices();




    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-data.p.rapidapi.com/help/countries?format=json",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "1f276bab2bmsh9755c7e198e2120p10a455jsnb0359ae2a1b6"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log("working");

    });
    

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