import UserDb from '../../db/schemas/User';
import User from '../../models/user/user';
import UserParams from '../../models/interfaces/userParams'
class RepositoryUser {
    constructor() {
        
    }
    public saveUser = async (user)=> {
        const userDb = new UserDb(user);
        let response:User;
        response = await userDb.save();
        return response;
    }//saveUser

    public getUsers = async ():Promise<Array<User>> => {
        const response = await UserDb.find();
        return response;
    }//getUsers

    public getUser = async (_id:string):Promise<User> => {
        const response = await UserDb.findById(_id);
        return response;
    }//getUser

    public updateUser = async (_id:string, userParams:UserParams) => {
        const response = await UserDb.findOneAndUpdate({_id}, userParams, {new:true, useFindAndModify:false});
        return response;
    }//updateUser

    public deleteUser = async (_id:string) => {
        const response = await UserDb.deleteOne({_id});
        return response;
    }//deleteUser
}

export default RepositoryUser;