import * as Joi from 'joi';
import mongoose from 'mongoose';

class Validator {
    constructor(){}

    public static async validateSaveUser(req, res, next) {
        const schemaUser = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
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
            next(error);
        }
    }//validateSaveUser

    public static async validadeId(req, res, next) {
        try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id is not valid");
        }
        const schemaId = Joi.object({id: Joi.string().required().length(24)});
            await Joi.validate({ id:id }, schemaId);
            next()
        } catch (error) {
            next(error)
        }
    }//validadeGetUser

    public static async validateParamsAlter(req, res, next) {
        try{
            const schemaUser = Joi.object({
                name: Joi.string(),
                email: Joi.string().email(),
                phoneNumber: Joi.string(),
                age: Joi.number(),
                street: Joi.string(),
                codeCity: Joi.string(),
                number: Joi.number(),
                complement: Joi.string()
            }); 
            await Joi.validate({...req.body}, schemaUser);
            next();
        }catch(error){
            next(error);
        }
    }//validateParamsAlter
}
export default Validator;