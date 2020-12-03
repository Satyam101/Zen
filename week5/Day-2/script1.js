
var h1 = document.createElement("h1");
h1.style = "text-align:center; font-size:85px";
h1.innerText = "LIST OF COUNTRIES";
document.body.appendChild(h1);
var div = document.createElement("div");
div.classList = "container";
document.body.appendChild(div);

var promiseReq = new Promise(function (resolve, reject) {
    var url_string1 = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"; 
    const request = new XMLHttpRequest();
    request.open('GET', url_string1, true);
    request.send();
    request.onload = function() {
        if (request.readyState === 4) {  
            if (request.status === 200) {  
              resolve(JSON.parse(request.responseText));
              
            } else {  
               var err=request.statusText;
               reject(error);
            }  
        } 

    };
});
promiseReq.then((data) => {
    displayInfo(data);
}).catch((error) => {
    console.log(error);
});



    function displayInfo(info){
    
    for(var i=0;i<info.length;i++)
    {

        var maindiv=document.createElement('div');
        maindiv.className="row";
        div.append(maindiv);

        var div1=document.createElement('div');
    div1.className="col-md-6 col-sm-3";
    
        div1.innerHTML=   `
    <div class="card" style="width: 300px;">
    <img class="card-img-top" src=${info[i].flag} width=\'200px\' height=\'200px\' alt="Card image cap">
    <div class="card-body">
      <p class="card-text"><label><b>COUNTRY:</b> &nbsp</label><b>${info[i].name} </b></p>
      <p class="card-text"><label>Capital: &nbsp</label><b>${info[i].capital} </b></p>
      <p class="card-text"><label>Region: &nbsp</label><b>${info[i].region} </b></p>
      <p class="card-text"><label>Latlng: &nbsp</label> <b>${info[i].latlng} </b></p>
      <p class="card-text"><label>Currency Code: &nbsp</label> <b>${info[i].currencies[0].code} </b></p>
      <p class="card-text"><label>Currency Name: &nbsp</label> <b>${info[i].currencies[0].name} </b></p>
      <p class="card-text"><label>Currency Symbol: &nbsp</label> <b>${info[i].currencies[0].symbol} </b></p>
      

</div>
  </div>`



maindiv.append(div1);

    }
 
    
    }
    

