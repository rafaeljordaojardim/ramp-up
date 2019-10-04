class Adress {
    street:string;
    codeCity:string;
    number:string;
    complement:string;

    constructor(street:string, codeCity:string, number:string, complement:string){
        this.street = street;
        this.codeCity = codeCity;
        this.number = number;
        this.complement = complement;
    }
}

export default Adress;