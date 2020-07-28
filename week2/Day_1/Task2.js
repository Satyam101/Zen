// Create a request variable and assign a new XMLHttpRequest object to it.
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var url_string2 = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
var proxy= "https://cors-anywhere.herokuapp.com/";
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',proxy+url_string2 , true)
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


