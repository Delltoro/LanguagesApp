// MONGO 1
import db from './src/data/db';
import express from 'express';
import questions from './src/routes/questions';


import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.set('port' , 8080);
app.get('/', (req,res)=>{
    res.send('hiho');
})


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(morgan('tiny'));
app.use(helmet());
app.use('/api/questions' , questions);

let server = app.listen(app.get('port') , () => {
    console.log(`Server working on port ' ${server.address().port}`);
});



