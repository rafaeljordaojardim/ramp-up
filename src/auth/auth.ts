import jwt from 'jsonwebtoken';

class Auth {
    private _key:string;
    constructor(){
        this._key = "secretKey";
    }

    public login(email:string){
        return new Promise((resolve, reject) =>{
            jwt.sign({email}, this._key, { expiresIn: 600  }, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
        })
       
    }//login

    public async verifyTokenValid(token:string){
        return new Promise((resolve, reject)=>{
            jwt.verify(token, this._key, (err, decoded) => {
                if (err) {
                     reject(err);
                }
                console.log("err",err);
                console.log("decoded", decoded);
                 resolve(decoded);
            })
        })
    }
}//Auth

export default Auth;