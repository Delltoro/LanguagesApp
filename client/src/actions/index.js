import axios from 'axios';
import { FETCH_USER , FETCH_QUESTIONS , ADD_ONE_EXPERIENCE, FETCH_SECTION , FETCH_VOCABULARY , FETCH_WORD} from './types';
import vocabularyAPI from '../services/vocabulary';
export  const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER , payload: res.data });
};

export const fetchQuestions = () => async dispatch => {
  const res = await axios.get('/api/questions');
  dispatch({type: FETCH_QUESTIONS , payload: res.data });
};

export const fetchVocabulary = () => async dispatch => {
  const res = await axios.get('./api/vocabulary');
  dispatch({type: FETCH_VOCABULARY, payload: res.data})
}

export const fetchSection = id => async dispatch => {
  const res = await axios.get(`http://127.0.0.1:8080/api/vocabulary/${id}`);
  dispatch( {type: FETCH_SECTION , payload: res.data});
}

export const fetchWord = id => async dispatch => {
  const res = await axios.get(`api/words/${id}`);
  dispatch( {type: FETCH_WORD , payload: res.data});
}

export const addOneExperience = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: ADD_ONE_EXPERIENCE , payload: res.data});
};


