import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const userSchema = Schema({
    name: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:String,
    age:Number,
    adress: {
        street:String,
        codeCity:String,
        number:String,
        complement:String
    }
});

const User = mongoose.model('User', userSchema);

export default User;