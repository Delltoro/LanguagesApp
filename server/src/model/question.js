import mongoose from 'mongoose';
import Joi from 'joi';


const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true,
    },
    pointsForCorrectAnswer: {
        type: Number,
        min: 0,
        max: 3
    }
})

const Question = mongoose.model('Question' , questionSchema,'questions')

function validateQuestion(question) {
    const schema = {
        questionText: Joi.string().required(),
        answers: Joi.array().required(),
        correctAnswer: Joi.number().required(),
        pointsForCorrectAnswer: Joi.number().required()
    }
    return Joi.validate(question,schema);
}

exports.Question = Question;
exports.validate = validateQuestion;
exports.questionSchema = questionSchema;