const routes = require('express').Router();
import ControllerWeather from './controller';
const controller = new ControllerWeather();


routes.get('/', (req, res) => {
    controller.getWeather(req, res);
})

export default routes;
