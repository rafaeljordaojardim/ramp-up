import Adress from './endereco'
class User {
    name:string;
    email:string;
    phoneNumber:string;
    password:string;
    adress:Adress;
    age:number;
    constructor(name:string, email:string, password:string, phoneNumber:string, adress:Adress, age:number) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.adress = adress;
        this.age = age;
    }
}

export default User;