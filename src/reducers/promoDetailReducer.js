import {PROMO_DETAIL_COMPLETE} from '../actions/promotions';

export default function( state = null, action ) {
    if ( action.type == PROMO_DETAIL_COMPLETE )
    {
        return {
            promotion : action.promotion[0],
        }
    }
    return state;
}