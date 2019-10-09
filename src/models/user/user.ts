import Adress from './endereco'
class User {
    name:string;
    email:string;
    phoneNumber:string;
    adress:Adress;
    age:number;

    constructor(name:string, email:string, phoneNumber:string, adress:Adress, age:number) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.adress = adress;
        this.age = age;
    }
}

export default User;