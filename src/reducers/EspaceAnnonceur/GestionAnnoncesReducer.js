import {GESTION_ANNONCE_COMPLETE} from '../../actions/EspaceAnnonceur/gestionAnnonces';

export default function( state = null, action ) {
    if ( action.type == GESTION_ANNONCE_COMPLETE )
    {
        return action.annonces;
    }
    return state;
}