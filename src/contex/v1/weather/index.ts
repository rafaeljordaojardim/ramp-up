const routes = require('express').Router();
import ControllerWeather from './controller';
import Validator from './validator';
import mwAuth from '../../../mw/mwAuth';
const controller = new ControllerWeather();


routes.get('/', mwAuth, Validator.validateAddress,(req, res) => {
    controller.getWeather(req, res);
});

export default routes;
