import { combineReducers } from 'redux';
import authReducer from './authReducer';
import questionsReducer from './questionsReducer';
import questionReducer from './questionReducer';
import vocabularyReducer from './vocabularyReducer';
import sectionReducer from './sectionReducer';
import wordReducer from './wordReducer';
import quizReducer from './quizReducer';
import quizesReducer from './quizesReducer';

// Store aplikacji , domyslnie null 

export default combineReducers({
  auth:         authReducer,
  question:     questionReducer,
  questions:    questionsReducer,
  vocabulary:   vocabularyReducer,
  section:      sectionReducer,
  word:         wordReducer,
  quiz:         quizReducer,
  quizes:       quizesReducer
})