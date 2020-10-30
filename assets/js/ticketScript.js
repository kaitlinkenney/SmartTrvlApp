$(document).ready(function () {
    var quoteList = []
    var carrierList = []

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
        
    }
//when user clicks more options button, then the next 5 options will show.
    $(".moreOptions").on("click", function(e) {
        //e.prevent.default();
        displayPrices();
        console.log('clicked' + count)

    })
    
    displayPrices();


function displayCovid() {
    var country = JSON.parse(localStorage.getItem("country"));
    var confirmed = JSON.parse(localStorage.getItem("confirmed"));
    var recovered = JSON.parse(localStorage.getItem("recovered"));
    var update = JSON.parse(localStorage.getItem("update"));


    var covidDiv = ("<div class= 'covid'>");

        var pOne = $("<p>").text("Country: " + country);
        covidDiv.append(pOne);

        var pTwo = $("<p>").text("Confirmed Cases: " + confirmed);
        covidDiv.append(pTwo);

        var pThree = $("<p>").text("Recovered Cases: " + recovered);
        covidDiv.append(pThree);

        var pFour = $("<p>").text("Last Updated: " + update);
        covidDiv.append(pFour);



    $("#covidcontent").append(covidDiv);

    

}
displayCovid();


});
