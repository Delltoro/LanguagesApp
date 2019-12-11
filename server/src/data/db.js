import mongoose from 'mongoose';
import { mongoURI } from '../config/keys';

import Fawn from 'fawn';
Fawn.init(mongoose);


mongoose.connect(mongoURI , {
    useNewUrlParser: true
})


let db = mongoose.connection;
db.on('open' , () => {
    console.log('Successfully connected to '+mongoURI);
});

