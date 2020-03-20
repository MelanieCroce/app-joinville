import {HISTORIQUE_COMPLETE} from '../../actions/EspaceAnnonceur/historique';

export default function( state = null, action ) {
    if ( action.type == HISTORIQUE_COMPLETE )
    {
        return action.historique;
    }
    return state;
}