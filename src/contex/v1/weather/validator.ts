import Joi from 'joi';

class Validator {
    
    constructor(){}

    public static async validateAddress(req, res, next):Promise<void>{
        //schema to compare with the req param
        const schemaAdress = Joi.object({address: Joi.string().required()});
        const  address  = req.body.address;
        console.log(address);
        try {
            await Joi.validate({address:address}, schemaAdress);
            return next();
        } catch (error) {
            return next(error);
        }
    }
}//Validator


export default Validator;

