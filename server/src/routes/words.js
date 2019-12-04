import express from 'express';
const router = express.Router();
import wordController from '../controllers/word';


router
   .route('/')
   .get(wordController.getWords)
   .post(wordController.addWord)

router
   .route('/:id')
   .get(wordController.getWordById)
   .delete(wordController.deleteWord);

module.exports = router;
