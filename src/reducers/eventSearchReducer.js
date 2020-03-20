import { SEARCH_EVENT_ACTIVE } from '../actions/promotions';

export default function( state = [], action ) {
    if ( action.type == SEARCH_EVENT_ACTIVE )
    {
        return {
            ...state, 
            event: action.event,
            sort: action.sort,
        }
    }
    return state;
}