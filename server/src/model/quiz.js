import mongoose from 'mongoose';
import Joi from 'joi';


const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    questionsInQuiz: Number,
    arrayofQuestionsId: {
        type: [mongoose.Schema.Types.ObjectId]
    },
})

const Quiz = mongoose.model('Quiz',quizSchema,'quizes');

function validateQuiz(quiz) {
    const schema = {
        title: Joi.string().required(),
        arrayofQuestionsId: Joi.array().required(),
        questionsInQuiz: Joi.number().required(),
    }
    return Joi.validate(quiz,schema);
}



exports.Quiz = Quiz;
exports.validate = validateQuiz;
