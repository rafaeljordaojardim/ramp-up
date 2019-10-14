import jwt from 'jsonwebtoken';
import Token from '../db/schemas/Token';
import ErrorHandling from '../errorHandling/error';
import { STATUS_CODES } from 'http';

class Auth {
    private _key:string;
    constructor(){
        this._key = "secretKey";
    }

    public login(email:string){
        return new Promise((resolve, reject) =>{
            jwt.sign({email}, this._key, { expiresIn: 25  }, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
        })
       
    }//login

    public async verifyTokenValid(token:string){
        try {
            const decoded = await jwt.decode(token);            
            const userToken = await Token.findOne({email:decoded.email});
            if (userToken) {
                console.log(userToken.token);
                console.log(token);
                if (userToken.token == token) {
                    jwt.verify(token, this._key, (err, decoded) => {
                        console.log(err);
                        console.log(decoded);
                    });
                    return {auth:'ok'};
                }else{
                    throw new Error();
                } 
            }else{
                throw new Error();
            } 
        } catch (error) {
            throw new ErrorHandling(STATUS_CODES[401], 401);
        }
    }
}//Auth

export default Auth;