import User from "../../models/user/user";
import repositoryUser from '../../repository/user/index';
class UserService {
    repositoryUser: repositoryUser;
    constructor() {
        this.repositoryUser = new repositoryUser();
    }
    saveUser = async (user:User) => {
       const response = await this.repositoryUser.saveUser(user);
       return response;
    }
}

export default UserService;