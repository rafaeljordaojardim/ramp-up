import express from 'express';
const routes = express.Router();
import ControllerUser from './controller';
const controller = new ControllerUser();

routes.post('/', (req, res) => {
    controller.saveUser(req, res);
})

routes.get('/', (req, res) => {
    controller.getUsers(req, res);
})

routes.get('/:id', (req, res) => {
    controller.getUser(req, res);
})

routes.patch('/:id', (req, res) => {
    controller.updateUser(req, res);
})

routes.delete('/:id', (req, res) => {
    controller.deleteUser(req, res);
})


export default routes;
