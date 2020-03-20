import { FILTER_COMPLETE } from '../actions/filter';

export default function( state = [], action ) {
    if ( action.type == FILTER_COMPLETE )
    {
        return {
            ...state, 
            filterCategory: action.filterCategory
        }
    }
    return state;
}