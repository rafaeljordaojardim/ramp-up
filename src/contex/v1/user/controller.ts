import ServiceUser from '../../../services/user/';
import User from '../../../models/user/user';
import Adress from '../../../models/user/endereco';
import ErrorHandling from '../../../errorHandling/error';
import { STATUS_CODES } from 'http';

class ControllerUser{
   private ServiceUser:  ServiceUser;
    constructor() {
        this.ServiceUser = new ServiceUser();
    }
    //save a user
    public async saveUser(req, res):Promise<User> {
        try {
            const {name, email, phoneNumber, age, street, codeCity, number, complement, password} = req.body
            const address = new Adress(street, codeCity, number, complement);
            const user = new User(name, email, password, phoneNumber,address, age);
            const response = await this.ServiceUser.saveUser(user);
            if (response) {
                return res.json(response);
            }
            throw new ErrorHandling(STATUS_CODES[400], 400);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
        
    }//saveUser
    
    //Get all users and Get an user by id
    public async getUsers(req, res):Promise<User[]> {
        try {
            const response = await this.ServiceUser.getUsers(req, res);
            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    }//getUsers
 
    public async getUser(req, res):Promise<User>{
        try {
            const {id} = req.params;
            const response = await this.ServiceUser.getUser(id);
            if (!response) {
                throw new ErrorHandling(STATUS_CODES[404], 404);
            }
            return res.json(response)
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
       
    }//getUser

    //update an user
    public async updateUser(req, res):Promise<User>{
        try {
            const {id} = req.params;
            const userParams = req.body;
            const response = await this.ServiceUser.updateUser(id, userParams);
            if (!response) {
                throw new ErrorHandling(STATUS_CODES[404], 404);
            }
            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    }//updateUser

    public async deleteUser(req, res):Promise<any>{
        try {
            const {id} = req.params;
            const response = await this.ServiceUser.deleteUser(id);
            if (!response) {
                throw new ErrorHandling(STATUS_CODES[404], 404);
            }
            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    }//deleteUser

    public async loginUser(req, res) {
       try {
           const {email, password} = req.body;
           const response = await this.ServiceUser.loginUser(email, password);
           if(!response){
               throw new ErrorHandling(STATUS_CODES[400], 400);
           }
           res.send(response);
       } catch (error) {
            res.json(error);
       }
    }

    public async logoutUser(req, res) {
        try {
            const {email} = req.body;
            const response = await this.ServiceUser.logoutUser(email);
            if (!response) {
                throw new ErrorHandling(STATUS_CODES[404], 404);
            }
            res.send(response);
        } catch (error) {
            res.json(error);
        }
    }

}//ControllerUser

export default ControllerUser;