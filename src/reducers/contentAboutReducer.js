import { ABOUT_COMPLETE } from '../actions/contentAbout';

export default function( state = [], action ) {
    if ( action.type == ABOUT_COMPLETE )
    {
        return {
            ...state, 
            about: action.about
        }
    }
    return state;
}