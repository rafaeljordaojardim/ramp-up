import express from 'express' // importando o express
import routes from './routes' // todas as rotas
import bodyParser from 'body-parser';
import mwError from './src/mw/mwError'
import bd from './src/db/connection';
import './src/mw/monitoringInvalidTokenInTheBd';
bd('rump_up');

const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes);
app.use(mwError);

  

app.listen(port, ()=> {
    console.log(`the server is running on port ${port}`);  
})