const routes = require('express').Router();
import ControllerWeather from './controller';
import Validator from './validator';
const controller = new ControllerWeather();


routes.get('/', Validator.validateAddress,(req, res) => {
    controller.getWeather(req, res);
})

export default routes;
