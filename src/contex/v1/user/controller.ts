import UserService from '../../../services/user/'
import User from '../../../models/user/user';
import Adress from '../../../models/user/endereco';
class ControllerUser{
    userService:  UserService;
    constructor() {
        this.userService = new UserService();
    }

    //save a user
    saveUser = async (req, res) => {
        try {
            const {name, email, phoneNumber, age, street, codeCity, number, complement} = req.body
            const address = new Adress(street, codeCity, number, complement);
            const user = new User(name, email, phoneNumber,address, age);
            const response = await this.userService.saveUser(user);
            if (response) {
                return res.json(response);
            }
            return res.sendStatus(400);
        } catch (error) {
            return res.json(error);
        }
        
    }//saveUser
    
    //Get all users and Get an user by id
    getUsers = async (req, res) => {
        try {
            const response = await this.userService.getUsers(req, res);
            return res.json(response);
        } catch (error) {
            return res.json(error);
        }
    }//getUsers

    getUser = async (req, res) => {
        const {id} = req.params;
        if (!id) {
            return res.status(400).send('ID not informed');
        }
        const response = await this.userService.getUser(id);
        if (!response) {
            return res.status(400).send('User not found');
        }
        return res.json(response)
    }//getUser

    //update an user
    updateUser = async (req, res) => {
        try {
            const {id} = req.params;
            if (!id) {
                return res.status(400).send('ID not informed');
            }
            const userParams = req.body;
            const response = await this.userService.updateUser(id, userParams);
            if (!response) {
                return res.status(400).send('User not found');
            }
            return res.json(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }//updateUser

    deleteUser = async (req, res) => {
        try {
            const {id} = req.params;
            if (!id) {
                return res.status(400).send('ID not informed');
            }
            const response = await this.userService.deleteUser(id);
            if (!response) {
                return res.status(400).send('User not found');
            }
            return res.json(response);
        } catch (error) {
            return res.json(error);
        }
    }//deleteUser

}//ControllerUser

export default ControllerUser;