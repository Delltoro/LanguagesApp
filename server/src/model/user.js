import mongoose from 'mongoose';
import Joi from 'joi';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
   email: {
       type: String,
       required: true,
       minlength: 5,
       maxlength: 255,
       unique: true
   },
   password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
    unique: true
    },
    experience: {
        type: Number
    }
})

const User = mongoose.model('User',userSchema,'users');

function validateUser(user) {
    const schema = {
        name: Joi.string().required().min(5).max(50),
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(5).max(255)
    };
    return Joi.validate(user,schema);
}



exports.User = User;
exports.validate = validateUser;
