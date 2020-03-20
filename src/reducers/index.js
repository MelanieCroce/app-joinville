import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import promotionReducer from './promotionReducer';
import promoDetailReducer from './promoDetailReducer';
import annonceurReducer from './annonceurReducer';
import annonceurDetailReducer from './annonceurDetailReducer';
import contentCGUReducer from './contentCGUReducer';
import annonceurPromoReducer from './annonceurPromoReducer';
import contentAboutReducer from './contentAboutReducer';
import filterReducer from './filterReducer';
import filterSearchReducer from './filterSearchReducer';
import eventSearchReducer from './eventSearchReducer';
import searchAnnonceurReducer from './searchAnnonceurReducer';

import getSliderHomeReducer from "./HomeReducer/getSliderHomeReducer";
import getPromoHomeReducer from './HomeReducer/getPromoHomeReducer';

import EspaceAnnonceurReducer from './EspaceAnnonceur/EspaceAnnonceurReducer';
import HistoriqueReducer from './EspaceAnnonceur/HistoriqueReducer';
import AnnonceModifierReducer from './EspaceAnnonceur/AnnonceModifierReducer';
import GestionAnnoncesReducer from './EspaceAnnonceur/GestionAnnoncesReducer';

export default combineReducers({
  promotionReducer,
  promoDetailReducer,
  annonceurReducer,
  annonceurDetailReducer,
  getSliderHomeReducer,
  getPromoHomeReducer,
  contentAboutReducer,
  contentCGUReducer,
  annonceurPromoReducer,
  HistoriqueReducer,
  AnnonceModifierReducer,
  GestionAnnoncesReducer,
  filterReducer,
  filterSearchReducer,
  eventSearchReducer,
  form: formReducer,
  searchAnnonceurReducer,
  EspaceAnnonceurReducer,
});