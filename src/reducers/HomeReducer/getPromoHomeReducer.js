import { GET_PROMO_HOME } from '../../actions/home';

export default function( state = [], action ) {
    if ( action.type == GET_PROMO_HOME )
    {
        return action.promo;
    }
    return state;
}