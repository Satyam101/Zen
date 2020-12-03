type forValidDoc= 'wrong' | 'valid' | "mismatch";

export class Documents {
    reference: string;
    nameOFTheReferal: string;
    validDocument: forValidDoc;
    aadharID: number;

    constructor(refer: string, nameofrefer: string, validDoc: forValidDoc, aadhar: number) {

        this.reference = refer;
        this.nameOFTheReferal = nameofrefer;
        this.validDocument = validDoc;
        this.aadharID = aadhar;
    }


    // setReference(ref:string): string {

    //     return this.reference = ref;
    // }

    getReference() {
        return this.reference;
    }
    getnameOfReferal() {

    return this.nameOFTheReferal;
    }
    getValidDocument()
    {
        return this.validDocument;
    }
    
    getAadharID() {
        return this.aadharID;
    }
   
    
}


