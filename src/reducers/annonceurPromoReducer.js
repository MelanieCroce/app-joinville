import {ANNONCEURS_PROMO_COMPLETE} from '../actions/annonceurs';

export default function( state = null, action ) {
    if ( action.type == ANNONCEURS_PROMO_COMPLETE )
    {
        return action.annonceurPromo;
    }
    return state;
}