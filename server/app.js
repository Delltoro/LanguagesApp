
// To execute configuration files
require('./src/data/db');
require('./src/services/passport');

import questions from './src/routes/questions';
import quizes from './src/routes/quizes';
import users from './src/routes/users';

import express from 'express';
const app = express();



require('./src/routes/auth')(app);
require('./src/services/middlewares')(app);


app.use('/api/questions' , questions);
app.use('/api/quizes' , quizes);
app.use('/api/users' , users);

app.set('port' , 8080);
let server = app.listen(app.get('port') , () => {
    console.log(`Server working on port ' ${server.address().port}`);
});



