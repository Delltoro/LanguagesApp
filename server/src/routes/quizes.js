import express from 'express';
const router = express.Router();
import quizController from '../controllers/quiz';

router
    .route('/')
    .get(quizController.getQuiz)
    .post(quizController.addQuiz)

router
    .route('/:id')
    .get(quizController.getQuizById)
    .delete(quizController.deleteQuiz);

module.exports = router;
