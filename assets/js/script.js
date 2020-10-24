// /* $(document).ready(function () {
// ​
//     var APIKey = "273787c05bmshf3984eb1254cd02p1a20a5jsne40328fc0685"
//     //skyscanner apikey
//     var queryURL = "" + APIKey
// ​
// ​
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         var startPoint = $()
// ​
//     })
// }) */
// ​
// ​
var origin = $("#origin")
    .val()
    .trim();
​//
var destination = $("#destination")
    .val()
    .trim();
​//
var date = $("#date")
    .val()
    .trim(); 
​var maxPrice = $("#max-price")
    .val()
    .trim();
  //test code
/* var origin = "LAX"
var destination = "EWR"
var date = "anytime" */

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + origin + "/" + destination + "/" + date + "?inboundpartialdate=" + date,
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


// const settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/SFO-sky/2020-10-30?inboundpartialdate=2020-11-17",
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
//     "x-rapidapi-key": "725a016fa1mshf2fff989bde490fp19ff20jsn00812da7c648"
//   }
// };
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });


// first page search button, origin location, destination location, price parameters

// user starting country, currency, locale, originplace, destinationplace, outboundpartialdate



// var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };

//   // Grab text the user typed into the search input, add to the queryParams object
//   queryParams.q = $("#search-term")
//     .val()
//     .trim();

//   // If the user provides a startYear, include it in the queryParams object
//   var startYear = $("#start-year")
//     .val()
//     .trim();

//   if (parseInt(startYear)) {
//     queryParams.begin_date = startYear + "0101";
//   }

//   // If the user provides an endYear, include it in the queryParams object
//   var endYear = $("#end-year")
//     .val()
//     .trim();

//   if (parseInt(endYear)) {
//     queryParams.end_date = endYear + "0101";
//   }

//   // Logging the URL so we have access to it for troubleshooting
//   console.log("---------------\nURL: " + queryURL + "\n---------------");
//   console.log(queryURL + $.param(queryParams));
//   return queryURL + $.param(queryParams);
// }

// var req = unirest("GET", "https://rapidapi.p.rapidapi.com/apiservices/referral/v1.0/{Country}/{currency}/{locale}/houston/newark/anytime/anytime");
// */