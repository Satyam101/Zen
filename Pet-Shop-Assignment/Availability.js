var availability = /** @class */ (function () {
    function availability() {
        this.petsInformation = [];
        this.petCount = [];
        this.petsType = [];
    }
    availability.prototype.insert = function (pets) {
        var flag = false;
        this.petsInformation.push(pets);
        for (var _i = 0, _a = this.petsType; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x == pets.pettype) {
                flag = true;
            }
        }
        if (flag != true) {
            this.petsType.push(pets.pettype);
        }
    };
    availability.prototype.petcount = function () {
        this.petCount = [];
        for (var _i = 0, _a = this.petsType; _i < _a.length; _i++) {
            var x = _a[_i];
            var counter = 0;
            for (var _b = 0, _c = this.petsInformation; _b < _c.length; _b++) {
                var y = _c[_b];
                if (x == y['pettype']) {
                    counter++;
                }
            }
            var obj = {
                name: x,
                count: counter
            };
            this.petCount.push(obj);
        }
        return this.petCount;
    };
    availability.prototype.Display = function () {
        return this.petsInformation;
    };
    availability.prototype.DisplayPetsType = function () {
        return this.petsType;
    };
    return availability;
}());
var PetRequest = /** @class */ (function () {
    function PetRequest() {
        this.customerRequest = [];
        this.status = [];
    }
    PetRequest.prototype.insert = function (enquiry) {
        this.customerRequest.push(enquiry);
    };
    PetRequest.prototype.print = function () {
        return this.customerRequest;
    };
    PetRequest.prototype.StatusOfPet = function () {
        var requests = this.customerRequest;
        var petList = availableObj.petsType;
        for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
            var req123 = requests_1[_i];
            var flag = false;
            for (var pet1 = 0; pet1 < req123.length; pet1++) { // of req123) {
                if (petList.includes(pet1)) {
                    flag = true;
                }
                else {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                this.status.push("Available");
            }
            else {
                this.status.push("Not Available");
            }
        }
    };
    PetRequest.prototype.matchingStatus = function () {
        this.status = [];
        this.StatusOfPet();
        var presentCount = 0;
        var absentCount = 0;
        for (var _i = 0, _a = this.status; _i < _a.length; _i++) {
            var status1 = _a[_i];
            if (status1 == "Available") {
                presentCount++;
            }
            else {
                absentCount++;
            }
        }
        var res;
        return res = "Matching Available Enquiries " + presentCount + " And UnMatching Enquiries " + absentCount;
    };
    PetRequest.prototype.FirstFiveEnquries = function () {
        this.status = [];
        this.StatusOfPet();
        return this.status.slice(0, 5);
    };
    return PetRequest;
}());
var availableObj = new availability();
availableObj.insert({ pettype: 'cat', petcolor: 'white', petage: 5, petbreed: 'xyz', pethistory: 'born in 2015' });
availableObj.insert({ pettype: 'dog', petcolor: 'black', petage: 3, petbreed: 'abc', pethistory: 'born in 2016' });
availableObj.insert({ pettype: 'monkey', petcolor: 'brown', petage: 2, petbreed: 'xyz', pethistory: 'born in 2017' });
availableObj.insert({ pettype: 'dog', petcolor: 'white', petage: 1, petbreed: 'pomilion', pethistory: 'born in 2018' });
availableObj.insert({ pettype: 'cat', petcolor: 'gray', petage: 6, petbreed: 'lioness', pethistory: 'born in 2019' });
var reqObj = new PetRequest();
reqObj.insert(["dog", "cat"]);
reqObj.insert(["giraffe", "cat", "monkey", "dog"]);
reqObj.insert(["cat", "monkey"]);
reqObj.insert(["lion", "tiger"]);
reqObj.insert(["goat", "cow", "horse", "monkey"]);
reqObj.insert(["dog", "cat"]);
//-------------------------------DOM---------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
window.addEventListener('load', function (event) {
    document.getElementById('mainDiv').click();
});
function AddPetsform(event) {
    event.preventDefault();
    document.getElementById("mainDiv").style.display = 'none';
    document.getElementById("mainDiv1").style.display = 'initial';
    document.getElementById("tableDiv").style.display = 'none';
    document.getElementById("enquiry-form").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
}
function displayPetData(event) {
    event.preventDefault();
    document.getElementById("mainDiv").style.display = 'none';
    document.getElementById("mainDiv1").style.display = 'none';
    document.getElementById("tableDiv").style.display = 'none';
    document.getElementById("enquiry-form").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
    var pettype1 = document.getElementById('pettype').value;
    var color = document.getElementById('petcolor').value;
    var age = +document.getElementById('petage').value;
    var breed = document.getElementById('petbreed').value;
    var history = document.getElementById('pethistory').value;
    availableObj.insert({ pettype: pettype1, petcolor: color, petage: age, petbreed: breed, pethistory: history });
    alert("Added....!!! check the Pet Table");
}
function enquirePets(event) {
    event.preventDefault();
    document.getElementById("mainDiv").style.display = 'none';
    document.getElementById("mainDiv1").style.display = 'none';
    document.getElementById("tableDiv").style.display = 'none';
    document.getElementById("enquiry-form").style.display = 'initial';
    document.getElementById("matching_data").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
}
function insertEnquirePets() {
    var pets_types = document.getElementById("pets_types").value;
    if (!pets_types) {
        alert("enter pet types !!");
        return false;
    }
    var pets_array = pets_types.split(",");
    console.log(pets_array);
    reqObj.insert(pets_array);
    console.log(reqObj.customerRequest);
    alert("Thanks for your interest !!");
    document.getElementById("enquiry-form").style.display = 'none';
    document.getElementById("tableDiv").style.display = 'initial';
}
function viewPets(event) {
    event.preventDefault();
    document.getElementById("mainDiv").style.display = 'none';
    document.getElementById("mainDiv1").style.display = 'none';
    document.getElementById("tableDiv").style.display = 'initial';
    document.getElementById("enquiry-form").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    var i = 1;
    var table_body = document.querySelector('#table_body');
    table_body.innerHTML = '';
    for (var _i = 0, _a = availableObj.petsInformation; _i < _a.length; _i++) {
        var vals = _a[_i];
        table_body.insertAdjacentHTML('beforeend', "<tr>\n            <td> " + i + " </td>\n            <td> " + vals["pettype"] + " </td>\n            <td> " + vals["petcolor"] + " </td>\n            <td> " + vals["petage"] + " </td>\n            <td> " + vals["petbreed"] + " </td>\n            <td> " + vals["pethistory"] + " </td>\n            </tr>");
        i++;
    }
}
function petsCount(event) {
    event.preventDefault();
    document.getElementById("mainDiv").style.display = 'none';
    document.getElementById("mainDiv1").style.display = 'none';
    document.getElementById("tableDiv").style.display = 'none';
    document.getElementById("enquiry-form").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'initial';
    document.getElementById("firstfive").style.display = 'none';
    var i = 1;
    var table_body_counter = document.querySelector('#table_body_counter');
    table_body_counter.innerHTML = '';
    var res = availableObj.petcount();
    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
        var vals = res_1[_i];
        console.log(vals);
        table_body_counter.insertAdjacentHTML('beforeend', "<tr>\n            <td> " + i + " </td>\n            <td> " + vals["name"] + " </td>\n            <td> " + vals["count"] + " </td>\n            </tr>");
        i++;
    }
}
function firstFiveEnquiry(event) {
    event.preventDefault();
    document.getElementById("mainDiv").style.display = 'none';
    document.getElementById("mainDiv1").style.display = 'none';
    document.getElementById("tableDiv").style.display = 'none';
    document.getElementById("enquiry-form").style.display = 'none';
    document.getElementById("matching_data").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'initial';
    var i = 1;
    var table_body_firstfive = document.querySelector('#table_body_firstfive');
    table_body_firstfive.innerHTML = '';
    var result = reqObj.FirstFiveEnquries();
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var vals = result_1[_i];
        console.log(vals);
        table_body_firstfive.insertAdjacentHTML('beforeend', "<tr>\n        <td> Enquiry: " + i + " </td>\n        <td> " + vals + " </td>\n        </tr>");
        i++;
    }
}
function matchingData(event) {
    event.preventDefault();
    document.getElementById("tableDiv").style.display = 'none';
    document.getElementById("mainDiv1").style.display = 'none';
    document.getElementById("petsCountTable").style.display = 'none';
    document.getElementById("firstfive").style.display = 'none';
    document.getElementById("enquiry-form").style.display = 'none';
    document.getElementById("matching_data").style.display = 'initial';
    var res = reqObj.matchingStatus();
    document.getElementById("match").innerHTML = res;
}
