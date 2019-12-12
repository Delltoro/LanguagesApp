import { FETCH_WORD } from '../actions/types';

export default function( state = null , action ) {
    switch(action.type) {
        case FETCH_WORD:
            return action.payload || false; 
        default: 
            return state;
    }
}