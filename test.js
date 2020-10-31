var origin = "LAX"
var destination = "EWR"
var date = "anytime" 

var origin = $("#origin").val()
//.trim();

var destination = $("#destination").val()
//.trim();

var date = $("#date").val()
//.trim();

var maxPrice = $("#max-price").val()
//.trim();
const settings = {
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
    //response.quotes[0].minPrice
});