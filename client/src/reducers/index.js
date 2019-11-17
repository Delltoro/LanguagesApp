import { ADD_QUIZ , FETCH_QUIZ} from "../actions/types";

const initialState = {
    quizes: []
  };

  function rootReducer(state = initialState, action) {
    if(action.type === ADD_QUIZ) {
        state.quizes.push(action.payload);
    }
  
    return state;
};

  export default rootReducer;