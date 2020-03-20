import {USERS_COMPLETE} from '../../actions/EspaceAnnonceur/espaceAnnonceur';

export default function( state = null, action ) {
    if ( action.type == USERS_COMPLETE )
    {
        return action.users;
    }
    return state;
}