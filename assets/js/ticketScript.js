$(document).ready(function () {
    // var country = pOne
    // var confirmed = pTwo
    // var recovered = pThree
    // var update = pFour
    var quoteList = []
    var carrierList = []

    var count = 0
    function displayPrices() {
        var quotes = JSON.parse(localStorage.getItem("quotes"));
        var carriers = JSON.parse(localStorage.getItem("carriers"));
        for (i = 0; i < 5; i++) {
            $("#" + i).text("$" + JSON.parse(quotes[count]).MinPrice);

            for (j = 0; j < carriers.length; j++) {

                if (JSON.parse(quotes[count]).OutboundLeg.CarrierIds[0] == carriers[j].CarrierId) {
                    //console.log(carrierList[p].Name + "matches")
                    var cList = $("<h4>" + carriers[j].Name + "</h4>")
                    $("#" + i + "a").html(cList);
                }

            }
            count++;

        }

    }
    //when user clicks more options button, then the next 5 options will show.
    $(".moreOptions").on("click", function (e) {
        //e.prevent.default();
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

        // var pFour = $("<p>").text("Last Updated: " + update);
        // covidDiv.append(pFour);
        $("#covidcontent").append(covidDiv);


        // localStorage.setItem("country", JSON.stringify(response.country));
        // localStorage.setItem("confirmed", JSON.stringify(response.confirmed));
        // localStorage.setItem("recovered", JSON.stringify(response.recovered));
        // localStorage.setItem("update", JSON.stringify(response.lastUpdate));
        // window.location.href = "tickets.html"

    });

    function displayCovid() {
        //     var country = JSON.parse(localStorage.getItem("country"));
        //     var confirmed = JSON.parse(localStorage.getItem("confirmed"));
        //     var recovered = JSON.parse(localStorage.getItem("recovered"));
        //     var update = JSON.parse(localStorage.getItem("update"));

        

        



        
    }


    displayCovid();


});
