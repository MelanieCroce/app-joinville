import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MainLayout from '../../../components/Layout/MainLayout';
import {styleEspaceAnnonceur} from '../../../assets/Style/Screen/StyleEspaceAnnonceur';
import { ButtonCTA } from '../../../components/button';
import {connect} from 'react-redux';
import { AlertDelete } from '../../../components/Popup/AlertDelete';
import { fetchGestionAnnonce } from '../../../actions/EspaceAnnonceur/gestionAnnonces';
import HeaderEspaceAnnonceur from '../../../components/Layout/HeaderEspaceAnnonceur';

import moment from 'moment';

class GestionAnnoncesScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };  

  componentDidMount() {
    this.props.dispatch(fetchGestionAnnonce( this.props.users[0].id ));
  }


  _renderItem = ({item, index}) => {
    const date_end = moment(item.date_end).format("DD/MM/YYYY HH:mm");
    return (
      <View style={styleEspaceAnnonceur.itemPromo}>
        <View style={{ width: '55%' }}>
          <Text style={styleEspaceAnnonceur.titleItem}>{item.name}</Text>
          <Text style={styleEspaceAnnonceur.subTitleItem}>Fin : {date_end}</Text>
          {item.promo_price != 0 && (
            <Text style={styleEspaceAnnonceur.subTitleItem}>Prix : { item.promo_price }{item.promo_price.indexOf('%') == -1 ? "€" : ""}</Text>
          )}
        </View>
        <View style={{ width: '45%' }}>
          <ButtonCTA large texte={'Modifier'} page="Modifier" id={item.id} />
          <AlertDelete id={item.id}  />
        </View>
      </View>
    );  
  }

  render() {
      return (
        <MainLayout page_single title="Gestion de vos annonces" navigation={this.props.navigation}>
          <View style={styleEspaceAnnonceur.content}>
            <HeaderEspaceAnnonceur nom="Nom Annonceur" title="Historique de vos promotions/événements" />
            <View>
              <FlatList
                data={this.props.annonces}
                renderItem={this._renderItem}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>        
        </MainLayout> 
      );
  };
};

function mapStateToProps( state ) {
  return {
      annonces: state.GestionAnnoncesReducer,
      users: state.EspaceAnnonceurReducer
  };
}


export default connect(mapStateToProps)(GestionAnnoncesScreen);