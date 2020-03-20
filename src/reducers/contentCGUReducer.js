import { CGU_COMPLETE } from '../actions/contentAbout';

export default function( state = [], action ) {
    if ( action.type == CGU_COMPLETE )
    {
        return {
            ...state, 
            cgu: action.cgu
        }
    }
    return state;
}