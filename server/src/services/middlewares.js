import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

module.exports = (app) => {
    
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

}

