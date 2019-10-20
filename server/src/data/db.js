import mongoose from 'mongoose';
import fawn from 'fawn';

const data = ['videcte' , 'eakZxBgC$8aZC.9']
const dburl = `mongodb+srv://${data[0]}:${data[1]}@cluster0-kyaux.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(dburl , {
    useNewUrlParser: true
})
let db = mongoose.connection;
db.on('open' , () => {
    console.log('Successfully connected to '+dburl);
});

