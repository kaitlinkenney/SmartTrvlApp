var outbound = $("#outbound")
    .val()
    .trim();
var inbound = $("#inbound")
    .val()
    .trim();
var date = $("#date")
    .val()
    .trim();
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://rapidapi.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/"+outbound+"/"+inbound+"/"+date+"?inboundpartialdate=2019-12-01",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "273787c05bmshf3984eb1254cd02p1a20a5jsne40328fc0685"
  }
};
$.ajax(settings).done(function (response) {
  console.log(response);