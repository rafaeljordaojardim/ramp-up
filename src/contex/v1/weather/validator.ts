import Joi from 'joi';
import ErrorHandling from '../../../models/error/error';

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
            return next(new ErrorHandling(error.message, 400));
        }
    }
}//Validator

export default Validator;

