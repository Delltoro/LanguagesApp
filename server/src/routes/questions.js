import express from 'express';
const router = express.Router();
import questionController from '../controllers/question';

router
    .route('/questions')
    .get(questionController.index)
    .post(questionController.store)

router
    .route('questions/:id')
    .get(questionController.show)
    .delete(questionController.destroy)
    .edit(questionController.update);

module.exports = router;
