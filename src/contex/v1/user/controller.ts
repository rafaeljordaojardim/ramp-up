import UserService from '../../../services/user/'
import User from '../../../models/user/user';
import Adress from '../../../models/user/endereco';
class ControllerUser{
    userService:  UserService;
    constructor() {
        this.userService = new UserService();
    }

    saveUser = async (req, res) => {
        try {
            const {name, email, phoneNumber, age, street, codeCity, number, complement} = req.body
            const address = new Adress(street, codeCity, number, complement);
            const user = new User(name, email, phoneNumber,address, age);
            const response = await this.userService.saveUser(user);
            if (response) {
                return res.json(response);
            }
            res.sendStatus(400);
        } catch (error) {
        }
        
    }
    
}

export default ControllerUser;