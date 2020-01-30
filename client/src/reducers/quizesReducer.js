import { FETCH_QUIZES } from '../actions/types';

export default function( state = null , action ) {
    switch(action.type) {
        case FETCH_QUIZES:
            return action.payload || false; 
        default: 
            return state;
    }
}