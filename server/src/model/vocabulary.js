import mongoose from 'mongoose';
import Joi from 'joi';

const vocabularySchema = new mongoose.Schema({
    
    section: {
        type: String,
        required: true
    },
    words: {
       type: [mongoose.Schema.Types.ObjectId]
    }
  
})

const Section = mongoose.model('Section' , vocabularySchema, 'vocabulary')

function validateSection(section) {
    const schema = {
        section: Joi.string().required(),
        words: Joi.array().required(),
    }
    return Joi.validate(section,schema);
}

exports.Section = Section;
exports.validate = validateSection;
exports.vocabularySchema = vocabularySchema;