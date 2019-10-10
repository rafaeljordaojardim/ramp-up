import TokenDb from '../../db/schemas/Token';
import UserDb from '../../db/schemas/User';
import User from '../../models/user/user';
import UserParams from '../../models/interfaces/userParams';
import Auth from '../../auth/auth';
const auth = new Auth();
class RepositoryUser {
    constructor() {
        
    }
    public async saveUser(user) {
        const userDb = new UserDb(user);
        let response:User;
        response = await userDb.save();
        return response;
    }//saveUser

    public async getUsers():Promise<Array<User>> {
        const response = await UserDb.find();
        return response;
    }//getUsers

    public async getUser(_id:string):Promise<User> {
        const response = await UserDb.findById(_id);
        return response;
    }//getUser

    public async updateUser(_id:string, userParams:UserParams) {
        const response = await UserDb.findOneAndUpdate({_id}, userParams, {new:true, useFindAndModify:false});
        return response;
    }//updateUser

    public async deleteUser(_id:string) {
        const response = await UserDb.deleteOne({_id});
        return response;
    }//deleteUser

    public async loginUser(email:string){
        let emailToken = await TokenDb.findOne({email});
        let token;
        if(!emailToken){
            token = await auth.login(email);
            console.log("Passei dentro do if");
            const tk = new TokenDb({email, token});
            await tk.save();
        }
        return token || emailToken.token;
    }//loginUser

    public async logoutUser(email:string){
        let userToken = TokenDb.deleteOne({email});
        return userToken;
    }
}

export default RepositoryUser;