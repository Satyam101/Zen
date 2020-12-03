interface petInfo {
    pettype: string,
    petcolor: string,
    petage: number,
    petbreed: string,
    pethistory: string
}

interface petCount {

    name: string,
    count: number
}

class availability {
    petsInformation: petInfo[];
    petCount: petCount[];
    petsType: string[];


    constructor() {
        this.petsInformation = [];
        this.petCount = [];
        this.petsType = [];
    }


    insert(pets: petInfo): void {
        var flag: boolean = false;
        this.petsInformation.push(pets);


        for (let x of this.petsType) {
            if (x == pets.pettype) {
                flag = true;
            }
        }
        if (flag != true) {
            this.petsType.push(pets.pettype);
        }
    }

    petcount(): petCount[] {

        this.petCount = [];
        for (let x of this.petsType) {
            var counter = 0;
            for (let y of this.petsInformation) {
                if (x == y['pettype']) {
                    counter++;
                }
            }
            let obj = {
                name: x,
                count: counter
            }
            this.petCount.push(obj);

        }


        return this.petCount;

    }


    Display(): petInfo[] {
        return this.petsInformation;
    }
    DisplayPetsType(): string[] {
        return this.petsType;

    }
}


class PetRequest {
    customerRequest: string[];
    status: string[];

    constructor() {
        this.customerRequest = [];
        this.status = [];
    }

    insert(enquiry: any) {
        this.customerRequest.push(enquiry);
    }
    print(): string[] {

        return this.customerRequest;
    }

    StatusOfPet():void {

        let requests: string[] = this.customerRequest;
        let petList: any = availableObj.petsType;

        for (let req123 of requests) {

            let flag = false;
            for (let pet1=0;pet1 < req123.length;pet1++){  // of req123) {
                if (petList.includes(pet1)) {

                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                this.status.push("Available");
            } else {
                this.status.push("Not Available");
            }
        }
    }

    matchingStatus(): string {
        this.status = [];
        this.StatusOfPet();

        let presentCount: number = 0;
        let absentCount: number = 0;

        for (let status1 of this.status) {
            if (status1 == "Available") {
                presentCount++;
            } else {
                absentCount++;

            }
        }
        let res: string;

        return res = `Matching Available Enquiries ${presentCount} And UnMatching Enquiries ${absentCount}`;
    }

    FirstFiveEnquries():string[] {

        this.status = [];
        this.StatusOfPet();
        return this.status.slice(0, 5);
    }

}


let availableObj = new availability();
availableObj.insert({ pettype: 'cat', petcolor: 'white', petage: 5, petbreed: 'xyz', pethistory: 'born in 2015' });
availableObj.insert({ pettype: 'dog', petcolor: 'black', petage: 3, petbreed: 'abc', pethistory: 'born in 2016' });
availableObj.insert({ pettype: 'monkey', petcolor: 'brown', petage: 2, petbreed: 'xyz', pethistory: 'born in 2017' });
availableObj.insert({ pettype: 'dog', petcolor: 'white', petage: 1, petbreed: 'pomilion', pethistory: 'born in 2018' });
availableObj.insert({ pettype: 'cat', petcolor: 'gray', petage: 6, petbreed: 'lioness', pethistory: 'born in 2019' });

let reqObj = new PetRequest()
reqObj.insert(["dog", "cat"]);
reqObj.insert(["giraffe", "cat", "monkey","dog"]);
reqObj.insert(["cat", "monkey"]);
reqObj.insert(["lion", "tiger"]);
reqObj.insert(["goat", "cow", "horse","monkey"]);
reqObj.insert(["dog", "cat"]);





//-------------------------------DOM---------------------------------------------------------------
//-------------------------------------------------------------------------------------------------


window.addEventListener('load', (event) => {
    (<HTMLSelectElement>document.getElementById('mainDiv')).click();
});

function AddPetsform(event: Event): void {

    event.preventDefault();
    (<HTMLSelectElement>document.getElementById("mainDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("mainDiv1")).style.display = 'initial';
    (<HTMLSelectElement>document.getElementById("tableDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("enquiry-form")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';

}

function displayPetData(event: Event): void {
    event.preventDefault();

    (<HTMLSelectElement>document.getElementById("mainDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("mainDiv1")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("tableDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("enquiry-form")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';


    let pettype1: string = (<HTMLSelectElement>document.getElementById('pettype')).value;
    let color: string = (<HTMLSelectElement>document.getElementById('petcolor')).value;
    let age: number = +(<HTMLSelectElement>document.getElementById('petage')).value;
    let breed: string = (<HTMLSelectElement>document.getElementById('petbreed')).value;
    var history: string = (<HTMLSelectElement>document.getElementById('pethistory')).value;

    availableObj.insert({ pettype: pettype1, petcolor: color, petage: age, petbreed: breed, pethistory: history })
    alert("Added....!!! check the Pet Table");

}

function enquirePets(event: Event): void {
    event.preventDefault();
    (<HTMLSelectElement>document.getElementById("mainDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("mainDiv1")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("tableDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("enquiry-form")).style.display = 'initial';
    (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';

}

function insertEnquirePets(): void | boolean {
    var pets_types: string = (<HTMLSelectElement>document.getElementById("pets_types")).value;
    if (!pets_types) {
        alert("enter pet types !!");
        return false;
    }
    var pets_array: string[] = pets_types.split(",");
    console.log(pets_array)
    reqObj.insert(pets_array);
    console.log(reqObj.customerRequest);
    alert("Thanks for your interest !!");
    (<HTMLSelectElement>document.getElementById("enquiry-form")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("tableDiv")).style.display = 'initial';

}


function viewPets(event: Event): void {
    event.preventDefault();
    (<HTMLSelectElement>document.getElementById("mainDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("mainDiv1")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("tableDiv")).style.display = 'initial';
    (<HTMLSelectElement>document.getElementById("enquiry-form")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';

    let i: number = 1;
    var table_body: HTMLSelectElement = (<HTMLSelectElement>document.querySelector('#table_body'));
    table_body.innerHTML = '';
    for (let vals of availableObj.petsInformation) {
        table_body.insertAdjacentHTML('beforeend', `<tr>
            <td> ${i} </td>
            <td> ${vals["pettype"]} </td>
            <td> ${vals["petcolor"]} </td>
            <td> ${vals["petage"]} </td>
            <td> ${vals["petbreed"]} </td>
            <td> ${vals["pethistory"]} </td>
            </tr>`);
        i++;
    }
}


function petsCount(event: Event): void {
    event.preventDefault();
    (<HTMLSelectElement>document.getElementById("mainDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("mainDiv1")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("tableDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("enquiry-form")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'initial';
    (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';

    let i: number = 1;
    let table_body_counter: HTMLSelectElement = (<HTMLSelectElement>document.querySelector('#table_body_counter'));
    table_body_counter.innerHTML = '';
    let res: petCount[] = availableObj.petcount()
    for (let vals of res) {
        console.log(vals);
        table_body_counter.insertAdjacentHTML('beforeend', `<tr>
            <td> ${i} </td>
            <td> ${vals["name"]} </td>
            <td> ${vals["count"]} </td>
            </tr>`);
        i++;
    }
}


function firstFiveEnquiry(event: Event): void {
    event.preventDefault();
    (<HTMLSelectElement>document.getElementById("mainDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("mainDiv1")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("tableDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("enquiry-form")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'initial';

    let i: number = 1;
    let table_body_firstfive: HTMLSelectElement = (<HTMLSelectElement>document.querySelector('#table_body_firstfive'));
    table_body_firstfive.innerHTML = '';
    let result: string[] = reqObj.FirstFiveEnquries();
    for (let vals of result) {
        console.log(vals);
        table_body_firstfive.insertAdjacentHTML('beforeend', `<tr>
        <td> Enquiry: ${i} </td>
        <td> ${vals} </td>
        </tr>`);
        i++;    
    }
}
function matchingData(event: Event): void {
    event.preventDefault();
    (<HTMLSelectElement>document.getElementById("tableDiv")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("mainDiv1")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("petsCountTable")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("firstfive")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("enquiry-form")).style.display = 'none';
    (<HTMLSelectElement>document.getElementById("matching_data")).style.display = 'initial';
    let res: string = reqObj.matchingStatus();
    (<HTMLSelectElement>document.getElementById("match")).innerHTML = res;
}