import { Question , validate } from '../model/question';

module.exports = {
    getQuestions: async (req , res) => {
        try {
            const questions = await Question.find();
            res.send(questions);
        }catch(err) {
            res.status(500).send('An error occured');
        }
  
    },

    getQuestionById: async (req , res) => {
        try {
            const question = await Question.findById(req.params.id);
            if(!question) return res.status(404).send('Question not found');
            return res.send(question);
        }catch(err) {
            res.status(500).send('An error occured');
        }
    },

    addQuestion: async (req , res) => {
        try {
            console.log(req.body);
           const { error } = validate(req.body);
           if(error) return res.status(400).send(error.details[0].message);
            const question = new Question({
                questionText: req.body.questionText,
                answers: req.body.answers,
                correctAnswer: req.body.correctAnswer,
                pointsForCorrectAnswer: req.body.pointsForCorrectAnswer
            })
            await question.save();

            res.send(question);
        }catch(err) {
            res.status(500).send('An error occured');
        }
    },

    deleteQuestion: async (req, res) => {
        try {
            const question = await Question.findByIdAndRemove(req.params.id);
            if (!question) return res.status(404).send('question not found.');
            res.send(question);
          } catch (error) {
              res.status(500).send('An error occured.');
          }
    }


}