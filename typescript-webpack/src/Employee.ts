export class Employee{

empName:string;
empID:number;

constructor(Ename:string,EID:number)
{
    this.empName=Ename;
    this.empID=EID;
}

getEmployeeName()
{
return this.empName;

}
getEmployeeID()
{
return this.empID;

}

}