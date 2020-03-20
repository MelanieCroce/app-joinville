import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import SideMenu from './SideMenu';

import HomeScreen from './Screen/HomeScreen';
import ConnexionScreen from './Screen/ConnexionScreen';
import PromosEventsScreen from './Screen/PromosEventsScreen';
import PromoEventSingleScreen from './Screen/PromoEventSingleScreen';
import AnnonceursScreen from './Screen/AnnonceursScreen';
import AnnonceurSingleScreen from './Screen/AnnonceurSingleScreen';
import QuiSommesNousScreen from './Screen/QuiSommeNousScreen';
import CGUScreen from './Screen/CGUScreen';
import EspaceAnnonceurScreen from './Screen/EspaceAnnonceurs/EspaceAnnonceurScreen';
import HistoriqueScreen from './Screen/EspaceAnnonceurs/HistoriqueScreen';
import ModifierScreen from './Screen/EspaceAnnonceurs/ModifierScreen';
import GestionAnnoncesScreen from './Screen/EspaceAnnonceurs/GestionAnnoncesScreen';
import AjoutAnnonceScreen from './Screen/EspaceAnnonceurs/AjoutAnnonceScreen';

export const StackNavigator = createStackNavigator ( 
  {
    Home: HomeScreen,
    Login: ConnexionScreen,
    PromosEvents: PromosEventsScreen,
    PromoEventSingle: PromoEventSingleScreen,
    Annonceurs: AnnonceursScreen,
    AnnonceurSingle : AnnonceurSingleScreen,
    About: QuiSommesNousScreen,
    CGU : CGUScreen,
    EspaceAnnonceur: EspaceAnnonceurScreen,
    Historique: HistoriqueScreen,
    Modifier: ModifierScreen,
    GestionAnnonce: GestionAnnoncesScreen,
    AjoutAnnonce: AjoutAnnonceScreen
  },
  {
      initialRouteName: "Home",
      headerMode: "none",
  }
);

export const DrawerNavigator = createDrawerNavigator({
  StackNavigator,
},
{
  contentOptions: {
    activeItemKey : '#e91e63',
  },
  contentComponent: ({  
      activeItemKey,
    }) => (
    <SideMenu currentScreen={activeItemKey} />
  ),
});

