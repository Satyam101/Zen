var div1 = document.createElement("div");
div1.setAttribute("class","container");

var but1 = document.createElement("button");
but1.setAttribute("type","button");
but1.setAttribute("class","button");
but1.setAttribute("onclick","get8DigitUniqueRandomNumber()");
but1.appendChild(document.createTextNode("Generate Number"));

var p1 = document.createElement("p");
p1.setAttribute("id","myParaText");
p1.setAttribute("class","");
p1.appendChild(document.createTextNode("Number"));

div1.appendChild(but1);
div1.appendChild(p1);

document.body.appendChild(div1);