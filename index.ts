import express from 'express' // importando o express
import routes from './routes' // todas as rotas
import bodyParser from 'body-parser';
import './src/db/connection';

const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes);
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.statusCode || 500).send(err.message || err.stack);
  })

app.listen(port, ()=> {
    console.log(`the server is running on port ${port}`);  
})