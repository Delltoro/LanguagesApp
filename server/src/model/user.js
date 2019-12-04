import mongoose from 'mongoose';
// import Joi from 'joi';


const userSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    experience: Number
})

mongoose.model('users',userSchema);
