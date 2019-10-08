import express from 'express';
const routes = express.Router();
import user from './user';
import weather from './weather';

routes.use('/users', user);
routes.use('/weather', weather);


export default routes;