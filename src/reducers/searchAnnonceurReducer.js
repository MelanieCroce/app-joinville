import { SEARCH_ANNONCE_ACTIVE } from '../actions/annonceurs';

export default function( state = [], action ) {
    if ( action.type == SEARCH_ANNONCE_ACTIVE )
    {
        return {
            ...state, 
            search: action.search,
        }
    }
    return state;
}