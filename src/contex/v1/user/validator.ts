import Joi from 'joi';
import mongoose from 'mongoose';
import UserDb from '../../../db/schemas/User'
import { STATUS_CODES } from 'http';
import ErrorHandling from '../../../errorHandling/error';


class Validator {
    constructor(){}
    public static async validateSaveUser(req, res, next) {
        const schemaUser = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password:Joi.string().required(),
            phoneNumber: Joi.string().required(),
            age: Joi.number().required(),
            street: Joi.string().required(),
            codeCity: Joi.string().required(),
            number: Joi.number().required(),
            complement: Joi.string()
        });
        try {
            await Joi.validate({ ...req.body }, schemaUser);
            next();
        } catch (error) {
            next(new ErrorHandling(error.message, 400));
        }
    }//validateSaveUser

    public static async validadeId(req, res, next):Promise<void> {
        try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)){
            return next(new ErrorHandling(STATUS_CODES[400], 400));
        }
        const schemaId = Joi.object({id: Joi.string().required().length(24)});
            await Joi.validate({ id:id }, schemaId);
            return next();
        } catch (error) {
            return next(new ErrorHandling(error.message, 400))
        }
    }//validadeGetUser
    
    public static async validateParamsAlter(req, res, next):Promise<void>{
        try{
            const schemaUser = Joi.object({
                name: Joi.string(),
                email: Joi.string().email(),
                password:Joi.string(),
                phoneNumber: Joi.string(),
                age: Joi.number(),
                street: Joi.string(),
                codeCity: Joi.string(),
                number: Joi.number(),
                complement: Joi.string()
            }); 
            await Joi.validate({...req.body}, schemaUser);
            return next();
        }catch(error){
            return next(new ErrorHandling(error.message, 400));
        }
    }//validateParamsAlter

    public static async validateIfUserAlwaryExists(req, res, next):Promise<void>{
        try {
            const {email} = req.body;
            console.log(email);
            const user = await UserDb.findOne({email:email});
            if (user) {
                throw new ErrorHandling(STATUS_CODES[409], 409);
            }
            return next();
        } catch (error) {
            return next(error);
        }
    }//validateIfUserAlwaryExists
}
export default Validator;