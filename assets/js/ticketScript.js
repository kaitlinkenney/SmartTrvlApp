$(document).ready(function () {

    var count = 0
    function displayPrices() {
        var quotes = JSON.parse(localStorage.getItem("quotes"));
        var carriers = JSON.parse(localStorage.getItem("carriers"));
        if((quotes.length-count)>5)
        {
            num = 5
        }
        else 
        {
            num = (quotes.length-count)
        }
        for (i = 0; i < num; i++) {
            
            $("#" + i).text("$" + JSON.parse(quotes[count]).MinPrice);

            for (j = 0; j < carriers.length; j++) {
                if (JSON.parse(quotes[count]).OutboundLeg.CarrierIds[0] == carriers[j].CarrierId) {
                    var cList = $("<h4>" + carriers[j].Name + "</h4>")
                    $("#" + i + "a").html(cList);
                }

            }
            count++;
        
        }

    }
    $(".moreOptions").on("click", function (e) {
        displayPrices();
        console.log('clicked' + count)

    })

    displayPrices();
    var country = localStorage.getItem("country")
    var covsettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=" + country,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "273787c05bmshf3984eb1254cd02p1a20a5jsne40328fc0685"
        }
    }

    $.ajax(covsettings).done(function (response) {
        console.log(response);

        country = response.data.location
        confirmed = JSON.stringify(response.data.confirmed)
        recovered = JSON.stringify(response.data.recovered)
        update = JSON.stringify(response.data.lastChecked)
        console.log(JSON.stringify(country))
        console.log(JSON.stringify(confirmed))
        console.log(JSON.stringify(recovered))
        console.log(JSON.stringify(update))

        console.log("working")
        var covidDiv = $("<div></div>");

        var pOne = $("<p>").text("Country: " + country);
        covidDiv.append(pOne);

        var pTwo = $("<p>").text("Confirmed Cases: " + confirmed);
        covidDiv.append(pTwo);

        var pThree = $("<p>").text("Recovered Cases: " + recovered);
        covidDiv.append(pThree);

        $("#covidcontent").append(covidDiv);


    });

});
