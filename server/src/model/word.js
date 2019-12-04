import mongoose from 'mongoose';
import Joi from 'joi';

var wordSchema = new mongoose.Schema({
    polishWord: String,
    germanWord: String
});


const Word = mongoose.model('Word' , wordSchema,'words')

function validateWord(word) {
    const schema = {
        polishWord: Joi.string().required(),
        germanWord: Joi.string().required(),

    }
    return Joi.validate(word,schema);
}

exports.Word = Word;
exports.validate = validateWord;
exports.vocabularySchema = wordSchema;

