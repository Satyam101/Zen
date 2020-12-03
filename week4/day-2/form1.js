
    var mainDiv=document.createElement("div");
    mainDiv.setAttribute('class', 'main');
    
    var form2=document.createElement("form");
    form2.id="form";
    form2.setAttribute("onsubmit","displayDetails()");
    mainDiv.appendChild(form2);

    var table1=document.createElement("table");
    table1.setAttribute("border","0 ");
    table1.setAttribute("id","FormData");
    form2.appendChild(table1);
    
    var row=document.createElement("tr");
     table1.appendChild(row);

    var td1=document.createElement('td');
    td1.innerText="First Name";
    td1.setAttribute("class","define")
    row.appendChild(td1);

    var td2=document.createElement("td");
    td2.setAttribute("colspan","3");
    row.appendChild(td2);

    var div2=document.createElement("div");
    div2.setAttribute("class","input-container");
    td2.appendChild(div2);

    var icon1=document.createElement("i");
    icon1.setAttribute("class","fa fa-user awesome");
    // icon1.setAttribute( "id","inp1");
    div2.appendChild(icon1);

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","inp1");
    input1.setAttribute("placeholder","Full Name");
     input1.setAttribute("style","min-height:30px", "min-width: 200px")
    input1.autofocus;
    input1.autocomplete="off";
    
    input1.required;
    div2.appendChild(input1);




row2=document.createElement("tr");
table1.appendChild(row2);

td3=document.createElement("td");
td3.setAttribute("style","padding-right:300px");
td3.innerText="Last Name";
row2.appendChild(td3);

td4=document.createElement("td");
td4.setAttribute("colspan","3");
row2.appendChild(td4);

div3=document.createElement("div");
div3.setAttribute("class","input-container");
td4.appendChild(div3);

icon2=document.createElement("i");
icon2.setAttribute("class","fa fa-user awesome");
div3.appendChild(icon2);

input2=document.createElement("input");
input2.setAttribute("type","text");
input2.setAttribute("id","inp2");
input2.setAttribute("placeholder","Last Name");
input2.required;
input2.autocomplete="off";

div3.appendChild(input2);







row3=document.createElement("tr");
table1.appendChild(row3);

var td5= document.createElement("td");
td5.setAttribute("style","padding-right:200px");
td5.innerText="Address";
row3.appendChild(td5);

td6=document.createElement("td");
td6.setAttribute("colspan","3");
row3.appendChild(td6);

div4=document.createElement("div");
div4.setAttribute("class","input-container");
td6.appendChild(div4);

icon3=document.createElement("i");
icon3.setAttribute("class","fa fa-address-book-o awesome");
div4.appendChild(icon3);

input3=document.createElement("input");
input3.setAttribute("type","text");
input3.setAttribute("id","inp3");
input3.setAttribute("placeholder","Address");
input3.setAttribute("style","min-height: 30px min-width:200px");
input3.required;
input3.autocomplete="off";

div4.appendChild(input3);







row4=document.createElement("tr");
table1.appendChild(row4);

var td6= document.createElement("td");
td6.setAttribute("style","padding-right:200px");
td6.innerText="Pincode";
row4.appendChild(td6);

td7=document.createElement("td");
td7.setAttribute("colspan","3");
row4.appendChild(td7);

div5=document.createElement("div");
div5.setAttribute("class","input-container");
td7.appendChild(div5);

icon4=document.createElement("i");
icon4.setAttribute("class","fa fa-envelope-open-o awesome");
div5.appendChild(icon4);

input4=document.createElement("input");
input4.setAttribute("type","text");
input4.setAttribute("id","inp4");
input4.setAttribute("placeholder","Pincode");
input4.setAttribute("style","min-height: 30px min-width:200px");
input4.required;
input4.autocomplete="off";

div5.appendChild(input4);






row5=document.createElement("tr");
table1.appendChild(row5);

var td8= document.createElement("td");
td8.setAttribute("style","padding-right:200px");
td8.innerText="Gender";
row5.appendChild(td8);

var td9=document.createElement("td");
td9.setAttribute("colspan","3");
row5.appendChild(td9);

var div6=document.createElement("div");
div6.setAttribute("class","input-container");
td9.appendChild(div6);

var icon5=document.createElement("i");
icon5.setAttribute("class","fa fa-male awesome");
div6.appendChild(icon5);

var radio1=document.createElement("input");
lb2=document.createElement("label");
lb2.innerText="Male";
div6.appendChild(lb2);

radio1.type="radio";
radio1.name="gen";
radio1.value="Male";
div6.appendChild(radio1);


var radio1=document.createElement("input");
lb3=document.createElement("label");
lb3.innerText="female";
div6.appendChild(lb3);

var radio2=document.createElement("input");
radio2.type="radio";
radio2.name="gen";
radio2.value="Female";
div6.appendChild(radio2);







row6=document.createElement("tr");
table1.appendChild(row6);

var td10= document.createElement("td");
td10.setAttribute("style","padding-right:200px");
td10.innerText="Food Items";
row6.appendChild(td10);

var td11=document.createElement("td");
td11.setAttribute("colspan","3");
row6.appendChild(td11);

var div7=document.createElement("div");
div7.setAttribute("class","input-container");
div7.id="checkboxes";
td11.appendChild(div7);

var icon6=document.createElement("i");
icon6.setAttribute("class","fa fa-cutlery awesome");
div7.appendChild(icon6);




var input6=document.createElement("input");
var lb1=document.createElement("label");
lb1.innerText="Idli";

div7.appendChild(lb1);
input6.setAttribute("type","checkbox");  
input6.value="idli";
input6.setAttribute("id","inp6");

input6.required;
div7.appendChild(input6);

var input6=document.createElement("input");
var lb1=document.createElement("label");
lb1.innerText="Rice";
div7.appendChild(lb1);
input6.setAttribute("type","checkbox");    
input6.required;
input6.value="rice";
div7.appendChild(input6);

var input6=document.createElement("input");
var lb1=document.createElement("label");
lb1.innerText="Brinjal";
div7.appendChild(lb1);
input6.setAttribute("type","checkbox");   
input6.value="brinjal";

input6.required;
div7.appendChild(input6);

var input6=document.createElement("input");
var lb1=document.createElement("label");
lb1.innerText="Potato";
div7.appendChild(lb1);
input6.setAttribute("type","checkbox");    
input6.value="potato";

input6.required;
div7.appendChild(input6);

var input6=document.createElement("input");
var lb1=document.createElement("label");
lb1.innerText="Tomato";
div7.appendChild(lb1);
input6.setAttribute("type","checkbox");    
input6.required;
input6.value="tomato";

div7.appendChild(input6);






var row7=document.createElement("tr");
table1.appendChild(row7);

var td12= document.createElement("td");
td12.setAttribute("style","padding-right:200px");
td12.innerText="State";
row7.appendChild(td12);

var td13=document.createElement("td");
td13.setAttribute("colspan","3");
row7.appendChild(td13);

var div8=document.createElement("div");
div8.setAttribute("class","input-container");
td13.appendChild(div8);

var icon7=document.createElement("i");
icon7.setAttribute("class","fa fa-university awesome");
div8.appendChild(icon7);

var input7=document.createElement("input");
input7.setAttribute("type","text");
input7.setAttribute("id","inp7");
input7.setAttribute("placeholder","State");
input7.setAttribute("style","min-height: 30px min-width:200px");
input7.required;
input7.autocomplete="off";

div8.appendChild(input7);







var row8=document.createElement("tr");
table1.appendChild(row8);

var td14= document.createElement("td");
td14.setAttribute("style","padding-right:200px");
td14.innerText="Country";
row8.appendChild(td14);

var td15=document.createElement("td");
td15.setAttribute("colspan","3");
row8.appendChild(td15);

var div9=document.createElement("div");
div9.setAttribute("class","input-container");
td15.appendChild(div9);

var icon8=document.createElement("i");
icon8.setAttribute("class","fa fa-globe   awesome");
div9.appendChild(icon8);

var input8=document.createElement("input");
input8.setAttribute("type","text");
input8.setAttribute("id","inp8");
input8.setAttribute("placeholder","Country");
input8.setAttribute("style","min-height: 30px min-width:200px");
input8.required;
input8.autocomplete="off";

div9.appendChild(input8);



var row9=document.createElement("tr");
table1.appendChild(row9);
var td16=document.createElement("td");
row9.appendChild(td16);

var input9=document.createElement("input");
input9.setAttribute("type","submit");
input9.setAttribute("id","button1");
input9.setAttribute("value","Button");
form2.appendChild(input9);

//  input9.setAttribute("onclick","displayDetails()");




document.body.appendChild(mainDiv);

  




