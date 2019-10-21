import { Quiz , validate } from '../model/quiz';
import {Question } from '../model/question';
module.exports = {
    getQuizById: async (req , res) => {
        try {
            const quiz = await Quiz.findById(req.params.id);
            if(!question) return res.status(404).send('Quiz not found');
        }catch(err) {
            res.status(500).send('An error occured');
        }
    },

    getQuiz: async (req , res) => {
        try {
            const quizes = await Quiz.find();
            res.send(quizes);
        }catch(err) {
            res.status(500).send('An error occured');
        }
  
    },
    
    addQuiz: async (req , res) => {
        try {
           const { error } = validate(req.body);
           if(error) return res.status(400).send(error.details[0].message);
           //const questions = await getQuestions(req,res);
            const quiz = new Quiz({
                title: req.body.title,
                questionsInQuiz: req.body.questionsInQuiz,
                arrayofQuestionsId: req.body.arrayofQuestionsId,
            })
            await quiz.save();

            res.send(quiz);
        }catch(err) {
            res.status(500).send('An error occured');
        }
    },

    deleteQuiz: async (req, res) => {
        try {
            const question = await Question.findByIdAndRemove(req.params.id);
            if (!question) return res.status(404).send('question not found.');
            res.send(question);
          } catch (error) {
              res.status(500).send('An error occured.');
          }
    },
    // getQuestions: async (req , res) => {
    //         const arrayOfQuestions = [];
    //     try{
    //         for(let i=0; i<10; i++){
    //             const question = await Question.findById(req.body.answers[i]);
    //             arrayOfQuestions.push(question);
    //         }
    //         return arrayOfQuestions;
    //     }catch(err) {
    //         res.status(500).send('An error occured');
    //     }
    // }


}