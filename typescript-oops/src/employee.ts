import { AddressConfig} from "./address-config";
import { personConfig } from "./person-config";

export class Employee {

    empName: string;
    empID: string;
    empAge: number;
    empAddress: AddressConfig;

    constructor(data: personConfig) {
        this.empName = data.name;
        this.empAge = data.age;

    }
    setAddress(add: AddressConfig) {
        this.empAddress = add;
    }
    getAddress() {
        return this.empAddress;
    }
}


