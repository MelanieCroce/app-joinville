import { PROMOS_LIST_COMPLETE } from '../actions/promotions';

export default function( state = [], action ) {
    if ( action.type == PROMOS_LIST_COMPLETE )
    {
        return {
            ...state, 
            promotionList: action.promotions
        }
    }
    return state;
}