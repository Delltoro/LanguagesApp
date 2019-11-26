import axios from 'axios';
import { FETCH_USER , FETCH_QUESTIONS , ADD_ONE_EXPERIENCE} from './types';

export  const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER , payload: res.data });
};


export const fetchQuestions = () => async dispatch => {
  const res = await axios.get('/api/questions');
  dispatch({type: FETCH_QUESTIONS , payload: res.data });
};

export const addOneExperience = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: ADD_ONE_EXPERIENCE , payload: res.data});
};
