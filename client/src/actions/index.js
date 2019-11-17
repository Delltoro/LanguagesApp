import { FETCH_QUESTION , FETCH_QUESTIONS} from "../actions/types";

import questions from '../services/questions';


export const getQuestions = () => async dispatch => {
  const response = await questions.get('/');
  dispatch({
    type: FETCH_QUESTIONS,
    payload: response.data,
  });
};

export const getQuestion = id => async dispatch => {
  const response = await questions.get(`/${id}`);
  dispatch({
    type: FETCH_QUESTION,
    payload: response.data,
  });
};

