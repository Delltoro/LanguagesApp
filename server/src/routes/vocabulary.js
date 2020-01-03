import express from 'express';
const router = express.Router();
import vocabularyController from '../controllers/vocabulary';


router
   .route('/')
   .get(vocabularyController.getSection)
   .post(vocabularyController.addSection)

router
   .route('/:id')
   .get(vocabularyController.getSectionById)
   .delete(vocabularyController.deleteSection);

module.exports = router;
