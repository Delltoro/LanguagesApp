import express from 'express';
const router = express.Router();
import questionController from '../controllers/question';

router
    .route('/')
    .get(questionController.getQuestions)
    .post(questionController.addQuestion)

router
    .route('/:id')
    .get(questionController.getQuestionById)
    .delete(questionController.deleteQuestion);

module.exports = router;
