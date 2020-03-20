import {MODIFIER_COMPLETE} from '../../actions/EspaceAnnonceur/modifierAnnonces';

export default function( state = null, action ) {
    if ( action.type == MODIFIER_COMPLETE )
    {
        return action.annonceModifier[0];
    }
    return state;
}