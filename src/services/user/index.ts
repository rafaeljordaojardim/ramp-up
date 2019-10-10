import User from "../../models/user/user";
import repositoryUser from "../../repository/user/index";
class ServiceUser {
    private repositoryUser: repositoryUser;
    constructor() {
        this.repositoryUser = new repositoryUser();
    }
    public async saveUser (user:User) {
       const response = await this.repositoryUser.saveUser(user);
       return response;
    }//saveUser

    public async getUsers (req, res){
        const response = await this.repositoryUser.getUsers();
        return response;

    }//getUsers

    public async getUser  (id:string) {
        const response = await this.repositoryUser.getUser(id);
        return response;
    }//getUser

    public async updateUser  (id:string, userParams:any)  {
        const response = await this.repositoryUser.updateUser(id, userParams);
        return response;
    }//updateUser

    public async deleteUser(id:string){
        const response = await this.repositoryUser.deleteUser(id);
        return response;
    }//deleteUser

    public async loginUser(email:string){
       const response = await this.repositoryUser.loginUser(email);
       return response;
    }
    public async logoutUser(email:string) {
        const response = await this.repositoryUser.logoutUser(email);
        return response;
    }
}

export default ServiceUser;