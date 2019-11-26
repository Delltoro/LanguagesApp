
// To execute configuration files
require('./src/data/db');
require('./src/model//user');
require('./src/services/passport');

import express from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';

import questions from './src/routes/questions';
import quizes from './src/routes/quizes';
import keys from './src/config/keys';
const app = express();
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./src/routes/auth')(app);
require('./src/services/middlewares')(app);


app.use('/api/questions' , questions);
app.use('/api/quizes' , quizes);

app.set('port' , 8080);
let server = app.listen(app.get('port') , () => {
    console.log(`Server working on port ' ${server.address().port}`);
});



