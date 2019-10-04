import express from 'express';
const routes = express.Router();
import ControllerUser from './controller';
const controller = new ControllerUser();

routes.post('/', (req, res) => {
    controller.saveUser(req, res);
})



export default routes;
