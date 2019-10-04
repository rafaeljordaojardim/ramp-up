import '../../db/connection'
import UserDb from '../../db/schemas/User'
class RepositoryUser {
    constructor() {
        
    }
    saveUser = async (user) => {
        const userDb = new UserDb(user);
        const response = await userDb.save();
        return response;
    }

}

export default RepositoryUser;