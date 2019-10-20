// MONGO 1
import mongoose from 'mongoose';
import fawn from 'fawn';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import db from './src/data/db';

const app = express();
const host = '127.0.0.1';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(morgan('tiny'));
app.use(helmet() , () =>{
    console.log('Helmet ON HEAD !');
})
app.set('port' , 3000);
let server = app.listen(app.get('port') , () => {
    console.log(`Server working on port ' ${host} ${server.address().port}`);
});



