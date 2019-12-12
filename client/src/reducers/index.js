import { combineReducers } from 'redux';
import authReducer from './authReducer';
import questionReducer from './questionsReducer';
import vocabularyReducer from './vocabularyReducer';
import sectionReducer from './sectionReducer';
import wordReducer from './wordReducer';

// Store aplikacji , domyslnie null 

export default combineReducers({
  auth:         authReducer,
  questions:    questionReducer,
  vocabulary:   vocabularyReducer,
  section:      sectionReducer,
  word:         wordReducer,
})