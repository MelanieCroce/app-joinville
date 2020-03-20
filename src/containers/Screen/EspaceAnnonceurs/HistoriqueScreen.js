import React from 'react';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';
import MainLayout from '../../../components/Layout/MainLayout';
import {styleEspaceAnnonceur} from '../../../assets/Style/Screen/StyleEspaceAnnonceur';
import {connect} from 'react-redux';
import { ButtonCTA } from '../../../components/button';
import { fetchHistorique } from '../../../actions/EspaceAnnonceur/historique';
import moment from 'moment';
import HeaderEspaceAnnonceur from '../../../components/Layout/HeaderEspaceAnnonceur';

class HistoriqueScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };  

	componentDidMount() {
      this.props.dispatch(fetchHistorique(this.props.users[0].id));
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
            {/* <ButtonCTA large medium  texte={'Modifier et remettre en ligne'} page="Modifier" id={item.id} /> */}
          </View>
        </View> 
    );  
  }

  render() {
      return (
        <MainLayout page_single title="Historique promotion/événements" navigation={this.props.navigation}>
          <View style={styleEspaceAnnonceur.content}>
            <HeaderEspaceAnnonceur nomAnnonceur='Nom Annonceur' title='Historique de vos promotions/événements' />  
            <View>
              <FlatList
                data={this.props.historique}
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
      historique: state.HistoriqueReducer,
      users: state.EspaceAnnonceurReducer
  };
}


export default connect(mapStateToProps)(HistoriqueScreen);