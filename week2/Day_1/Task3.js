// Create a request variable and assign a new XMLHttpRequest object to it.
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var url_string3 = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=78e2d6860ba575e548ae2b890a9655b3";

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string3 , true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}

/*
fetch(url_string) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/


