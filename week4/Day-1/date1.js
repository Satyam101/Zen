var h31 = document.createElement("H3");
h31.appendChild(document.createTextNode("Enter your Date of Birth Below :"));

var inp1 = document.createElement("input");
inp1.setAttribute("type","date");
inp1.setAttribute("id","myDate");
inp1.setAttribute("class","dateInput");
inp1.setAttribute("value","2000-05-05");
var but1 = document.createElement("button");
but1.setAttribute("type","button");
but1.setAttribute("class","button");
but1.setAttribute("onclick","findDateDifference()");
but1.appendChild(document.createTextNode("Get The Date Difference"));

var p1 = document.createElement("p");
p1.setAttribute("id","myParaText");

var div1 = document.createElement("div");
div1.setAttribute("class","main-div");

div1.appendChild(h31);
div1.appendChild(inp1);
div1.appendChild(but1);
div1.appendChild(p1);

document.body.appendChild(div1);