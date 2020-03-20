import { SEARCH_FILTER_ACTIVE } from '../actions/filter';

export default function( state = [], action ) {
    if ( action.type == SEARCH_FILTER_ACTIVE )
    {
        return {
            ...state, 
            categorie: action.categorie
        }
    }
    return state;
}