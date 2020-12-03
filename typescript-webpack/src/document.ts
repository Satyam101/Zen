export class Documents {


    reference: string;
    AadharProof: number;


    constructor(refer: string, Aadharcard: number) {
        this.reference = refer;
        this.AadharProof = Aadharcard;
    }

    getReference()
    {
return this.reference;
    }

    getAadharNumber()
    {
        return this.AadharProof;
    }

}