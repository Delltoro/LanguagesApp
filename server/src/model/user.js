import mongoose from 'mongoose';
// import Joi from 'joi';


const userSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    experience: Number
})

mongoose.model('users',userSchema);

// function validateUser(user) {
//     const schema = {
//         name: Joi.string().required().min(5).max(50),
//         email: Joi.string().required().min(5).max(255).email(),
//         password: Joi.string().required().min(5).max(255)
//     };
//     return Joi.validate(user,schema);
// }

