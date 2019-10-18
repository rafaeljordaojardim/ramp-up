import app from './routes' // importando o express
// import {routes} from './routes' // todas as rotas
import bd from './src/db/connection';
import './src/mw/monitoringInvalidTokenInTheBd';
bd('rump_up');

const port = 3000;

app.listen(port, ()=> {
    console.log(`the server is running on port ${port}`);  
})