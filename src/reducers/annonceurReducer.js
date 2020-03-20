import { ANNONCEUR_LIST_COMPLETE } from '../actions/annonceurs';

export default function( state = [], action ) {
    if ( action.type == ANNONCEUR_LIST_COMPLETE )
    {
        return {
            ...state, 
            annonceurList: action.annonceurList
        }
    }
    return state;
}