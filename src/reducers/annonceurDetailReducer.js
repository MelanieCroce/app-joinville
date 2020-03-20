import {ANNONCEURS_DETAIL_COMPLETE} from '../actions/annonceurs';

export default function( state = null, action ) {
    if ( action.type == ANNONCEURS_DETAIL_COMPLETE )
    {
        return action.annonceurDetail;
    }
    return state;
}