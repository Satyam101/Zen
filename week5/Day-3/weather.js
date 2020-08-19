
var h1 = document.createElement("h1");
h1.style = "text-align:center; font-size:85px";
h1.innerText = "LIST OF COUNTRIES";
document.body.appendChild(h1);
var div = document.createElement("div");
div.classList = "container";
document.body.appendChild(div);

async function restfulData() {

    try {
        var restful = await fetch("https://restcountries.eu/rest/v2/all");
        var country = await restful.json();

        displayInfo(country);
        console.log(country);
    }
    catch (err) {
        console.log(err);
    }

}
restfulData();

async function weatherDisplay(capital) {
    var key = '83ebd59f6bea3b9de4a5cdf3ebfc8b9b';
    var data1 = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' +capital+ '&appid=' + key)
    var data2 = await data1.json();

    console.log(data2);

    alert("Temperature:  " + data2.main.temp + "\nDescription:   " + data2.weather[0]["description"]);
}

function displayInfo(info) {

    for (var i = 0; i < info.length; i++) {

        var maindiv = document.createElement('div');
        maindiv.className = "row";
        div.append(maindiv);

        var div1 = document.createElement('div');
        div1.className = " col-sm-12 col-lg-4";
       

var div2=document.createElement("div");
div2.classList.add('card','design');
div2.setAttribute('style',"width:300px ");
div1.append(div2);

var para1=document.createElement('p');
para1.classList.add('card-text');
para1.id='heading';
div2.append(para1);
var bold=document.createElement('b');
bold.innerHTML=`${info[i].name}`;
para1.append(bold);

//image
var image1=document.createElement('img');
image1.classList.add("card-img-top");
image1.src=`${info[i].flag}`;
image1.id='imgID'
image1.setAttribute('style','width:200px');
image1.setAttribute('style','height:200px');
image1.alt='card image cap';

div2.append(image1);


var div3=document.createElement('div');
div3.classList.add('card-body');
div2.append(div3);

var para2=document.createElement('p');
para2.classList.add('card-text');
div3.append(para2);

var lb1=document.createElement('label');
lb1.innerText='Capital:';
para2.append(lb1);

var bold2=document.createElement('b');
bold2.innerHTML=`&nbsp&nbsp&nbsp${info[i].capital}`;
para2.append(bold2);


var para3=document.createElement('p');
para3.classList.add('card-text');
div3.append(para3);

var lb2=document.createElement('label');
lb2.innerText='Region:';
para3.append(lb2);

var bold3=document.createElement('b');
bold3.innerHTML=`&nbsp&nbsp&nbsp${info[i].region}`;
para3.append(bold3);



var para4=document.createElement('p');
para4.classList.add('card-text');
div3.append(para4);

var lb3=document.createElement('label');
lb3.innerText='Latlng:';
para4.append(lb3);

var bold4=document.createElement('b');
bold4.innerHTML=`&nbsp&nbsp&nbsp${info[i].latlng}`;
para4.append(bold4);




var para5=document.createElement('p');
para5.classList.add('card-text');
div3.append(para5);

var lb4=document.createElement('label');
lb4.innerText='Currency Code:';
para5.append(lb4);

var bold5=document.createElement('b');
bold5.innerHTML=`&nbsp&nbsp&nbsp${info[i].currencies[0].code}`;
para5.append(bold5);
var button1=document.createElement('button');
button1.id='buttonDesign';
button1.classList.add('btn','btn-primary');
button1.setAttribute('onclick',"weatherDisplay('"+info[i].capital+"')");
button1.innerText='Click For Weather';
div3.append(button1);



        maindiv.append(div1);

    }


}
