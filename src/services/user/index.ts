import User from "../../models/user/user";
import repositoryUser from "../../repository/user/index";
class ServiceUSer {
    repositoryUser: repositoryUser;
    constructor() {
        this.repositoryUser = new repositoryUser();
    }
    saveUser = async (user:User) => {
       const response = await this.repositoryUser.saveUser(user);
       return response;
    }//saveUser

    getUsers = async (req, res) => {
        const response = await this.repositoryUser.getUsers();
        return response;

    }//getUsers

    getUser = async(id:string) => {
        const response = await this.repositoryUser.getUser(id);
        return response;
    }//getUser

    updateUser = async(id:string, userParams:any) => {
        const response = await this.repositoryUser.updateUser(id, userParams);
        return response;
    }//updateUser

    deleteUser = async (id:string) => {
        const response = await this.repositoryUser.deleteUser(id);
        return response;
    }//deleteUser
}

export default ServiceUSer;