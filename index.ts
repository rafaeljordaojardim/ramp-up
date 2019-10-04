import express from 'express' // importando o express
import routes from './routes' // todas as rotas
import bodyParser from 'body-parser';

const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes);


app.listen(port, ()=> {
    console.log(`the server is running on port ${port}`);  
})