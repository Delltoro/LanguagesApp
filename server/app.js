// MONGO 1
import db from './src/data/db';
import express from 'express';
import questions from './src/routes/questions';
import quizes from './src/routes/quizes';

import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.set('port' , 8080);


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
app.use('/api/quizes' , quizes);
let server = app.listen(app.get('port') , () => {
    console.log(`Server working on port ' ${server.address().port}`);
});



