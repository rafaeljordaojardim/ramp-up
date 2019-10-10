import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tokenSchema =  Schema({
    email:{
        type:String
    },
    token:{
        type:String
    }
})

const Token = mongoose.model('Token', tokenSchema);
export default Token;