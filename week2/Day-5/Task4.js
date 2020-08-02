class Bank{
	constructor(code,adddress){
		this.code = code;
		this.adddress = adddress;
		this.customer = new Customer();
	this.account = new Account();
	this.atm = new ATM();

	}

	

	manages(){

	}

	maintains(){

	}


}

class Customer{
	constructor(name,address,dob,cardnumber,pin){
		this.name = name;
		this.address = address;
		this.dob = dob;
		this.cardnumber = cardnumber;
		this.pin = pin;

	}

	verifyPassword(){

	}


}

class ATM{
	constructor(location,managedby){
		this.location = location;
		this.managedby = managedby;

	}

	identifies(){

	}

	transactions(){

	}

}

class Account{
	constructor(number,balance){
		this.number = number;
		this.balance = balance;

	}

	deposit(){

	}

	withdraw(){

	}

	createTransaction(){

	}

}

class ATM_Transactions{
	constructor(transactionid,date,type,postbalance){
		this.transactionid = transactionid;
		this.date = date;
		this.type = type;
		this.postbalance = postbalance;

	}

	modifies(){

	}

}

class Current_Account extends Account{
	constructor(accountno,balance){
		this.accountno = accountno;
		this.balance = balance;
		this.savingsAccount = new Savings_Account();

	}
    
    

	withdraw(){

	}

}

class Savings_Account extends Account{
	constructor(accountno,balance){
		this.accountno = accountno;
		this.balance = balance;
		this.currentAccount = new Current_Account();

	}

	
}