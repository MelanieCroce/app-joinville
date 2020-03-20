import { GET_SLIDER_HOME } from '../../actions/home';

export default function( state = [], action ) {
    if ( action.type == GET_SLIDER_HOME )
    {
        return action.slider;
    }
    return state;
}