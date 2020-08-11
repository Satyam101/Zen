


var rows = 1;

var entry = document.getElementById("button1");
// entry.addEventListener("click", displayDetails());
function displayDetails() {
    var fullname = document.getElementById("inp1").value;
    var lastname = document.getElementById("inp2").value;
    var address = document.getElementById("inp3").value;
    var pincode = document.getElementById("inp4").value;
    var gender =document.querySelector('input[name=gen]:checked').value;
        var food=GetSelected();
    var state = document.getElementById("inp7").value;
    var country = document.getElementById("inp8").value;

    
    var display = document.getElementById("display");


    var newRow = display.insertRow(rows);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = fullname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

   console.log(food);
    
    rows++;
}



function GetSelected() {
    
     selected = new Array();
    var arr = [];
    
    var checks = document.getElementById("checkboxes");

    
    var chks = checks.getElementsByTagName("input");

    
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }

 
    if (selected.length >= 2) {
        arr = selected.join(",");
        return arr;
    }
    else{
        alert("Please Choose at least 2 Boxes");
        
    }


    
};


