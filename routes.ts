import express from  "express";
import bodyParser from 'body-parser';
import mwError from './src/mw/mwError';
import v1 from './src/contex/v1';

const app = express();

const routes = express.Router();

app.use(bodyParser.json());
app.use('/api', routes);
app.use(mwError);

routes.use('/v1', v1);

export default app;