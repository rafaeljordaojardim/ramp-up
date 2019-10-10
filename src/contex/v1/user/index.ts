//imports
import express from 'express';
import Validator from './validator';
import ControllerUser from './controller';

//declarations
const routes = express.Router();
const controller = new ControllerUser();

routes.post('/', Validator.validateIfUserAlwaryExists, Validator.validateSaveUser, (req, res) => {
    controller.saveUser(req, res);
})

routes.get('/', (req, res) => {
    controller.getUsers(req, res);
})

routes.get('/:id', Validator.validadeId, (req, res) => {
    controller.getUser(req, res);
})

routes.patch('/:id', Validator.validadeId, Validator.validateParamsAlter, (req, res) => {
    controller.updateUser(req, res);
})

routes.delete('/:id', Validator.validadeId, (req, res) => {
    controller.deleteUser(req, res);
})

routes.post('/login', (req, res) => {
    controller.loginUser(req, res);
})

export default routes;
