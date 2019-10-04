import express from 'express';
const routes = express.Router();
import user from './user';

routes.use('/users', user);


export default routes;