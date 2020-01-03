import { FETCH_SECTION } from '../actions/types';

export default function( state = null , action ) {
    switch(action.type) {
        case FETCH_SECTION:
            return action.payload || false; 
        default: 
            return state;
    }
}