import { FETCH_QUESTION } from '../actions/types';


export default function( state = null , action ) {
    switch(action.type) {
        case FETCH_QUESTION:
            return action.payload || false; 
        default: 
            return state;
    }
}