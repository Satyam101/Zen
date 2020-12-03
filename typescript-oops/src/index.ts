import { Employee } from "./employee";
import { Documents } from "./documents";


//from documents file

(<HTMLElement>document.getElementById('details-emp')).addEventListener('click', function () {
    let  refer = (<HTMLFormElement>document.getElementById('reference')).value;
    let name1 = (<HTMLFormElement>document.getElementById('nameOFTheReferal')).value;
    let  Validdoc = (<HTMLFormElement>document.getElementById('validDocument')).value;
    let  aadharno = (<HTMLFormElement>document.getElementById('aadharID')).value;
    
    
    let Doc = new Documents(refer, name1, Validdoc, aadharno);
    console.log(Doc.getReference());
    console.log(Doc.getnameOfReferal());
    console.log(Doc.getValidDocument());
    console.log(Doc.getAadharID());

})





// //from employee file
// let emp = new Employee({ name: "satyam", age: 23 });
// emp.setAddress({ doorNo: 100, locality: 'saraswati vidya mandir school', streetName: 'shiv colony', pincode: 425001 });
// console.log(emp.getAddress());





//from employee file
let emp = new Employee({ name: "satyam", age: 23 });
emp.setAddress({ doorNo: 100, locality: 'saraswati vidya mandir school', streetName: 'shiv colony', pincode: 425001 });
console.log(emp.getAddress());