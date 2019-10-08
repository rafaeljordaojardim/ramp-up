import User from "../../models/user/user";
import repositoryUser from "../../repository/user/index";
class ServiceUser {
    private repositoryUser: repositoryUser;
    constructor() {
        this.repositoryUser = new repositoryUser();
    }
    public saveUser = async (user:User) => {
       const response = await this.repositoryUser.saveUser(user);
       return response;
    }//saveUser

    public getUsers = async (req, res) => {
        const response = await this.repositoryUser.getUsers();
        return response;

    }//getUsers

    public getUser = async(id:string) => {
        const response = await this.repositoryUser.getUser(id);
        return response;
    }//getUser

    public updateUser = async(id:string, userParams:any) => {
        const response = await this.repositoryUser.updateUser(id, userParams);
        return response;
    }//updateUser

    public deleteUser = async (id:string) => {
        const response = await this.repositoryUser.deleteUser(id);
        return response;
    }//deleteUser
}

export default ServiceUser;