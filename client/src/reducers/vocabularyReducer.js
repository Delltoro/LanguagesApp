import { FETCH_VOCABULARY } from '../actions/types';

export default function( state = null , action ) {
    switch(action.type) {
        case FETCH_VOCABULARY:
            return action.payload || false; 
        default: 
            return state;
    }
}