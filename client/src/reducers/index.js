import { combineReducers } from 'redux';
import authReducer from './authReducer';
import questionReducer from './questionsReducer';

export default combineReducers({
  auth: authReducer,
  questions: questionReducer
})