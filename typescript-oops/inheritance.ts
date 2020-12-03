class Menu{

    getInfo(){
console.log("satyam jagtap here");
    }

}
class billing extends Menu{
// name:string
    constructor()
    {
        super();

    }
    getMenu()
    {
console.log("smita jagtap there")
super.getInfo();

    }
}

let bill= new billing();
bill.getMenu();