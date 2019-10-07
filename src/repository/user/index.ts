import UserDb from '../../db/schemas/User';

class RepositoryUser {
    constructor() {
        
    }
    saveUser = async (user) => {
        const userDb = new UserDb(user);
        const response = await userDb.save();
        return response;
    }//saveUser

    getUsers = async () => {
        const response = await UserDb.find();
        return response;
    }//getUsers

    getUser = async (_id:string) => {
        const response = await UserDb.findById(_id);
        return response;
    }//getUser

    updateUser = async (_id:string, userParams:any) => {
        const response = await UserDb.findOneAndUpdate({_id}, userParams, {new:true, useFindAndModify:false});
        return response;
    }//updateUser

    deleteUser = async (_id:string) => {
        const response = await UserDb.deleteOne({_id});
        return response;
    }//deleteUser
}

export default RepositoryUser;