import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator } from 'react-native';
import MainLayout from '../../../components/Layout/MainLayout';
import { Icon } from 'react-native-elements';
import {styleEspaceAnnonceur} from '../../../assets/Style/Screen/StyleEspaceAnnonceur';
import NavigationService from '../../NavigationService';
import HeaderEspaceAnnonceur from '../../../components/Layout/HeaderEspaceAnnonceur';

export default class EspaceAnnonceurScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };  

  constructor(props) {
    super(props);

    this.state = {
      visiblePromo: 'flex',
      visibleGestion: 'flex',
      connexion: 'true',
    };
  }  

  userConnexion(data) {
    this.setState({ connexion: data })
  }

  render() {
      return (
        <MainLayout title="Espace Annonceur" navigation={this.props.navigation}>
          <View style={styleEspaceAnnonceur.content}>
            <HeaderEspaceAnnonceur userConnexion={this.userConnexion.bind(this)} title='' />  
            <View style={styleEspaceAnnonceur.droppDown}>
              <TouchableWithoutFeedback 
                onPress={ (this.state.visiblePromo == 'none' ? (
                  () => this.setState({visiblePromo: 'flex'}) 
                  ) : (
                  () => this.setState({visiblePromo: 'none'}) 
                ))}
              >
                <View style={styleEspaceAnnonceur.btnDropDown}>
                  <Text style={styleEspaceAnnonceur.btnDropDownText}>Ajouter Promotion/Événement</Text>
                  <Icon
                    name='md-arrow-dropdown'
                    type='ionicon'
                    color='#263c88' 
                    size={22}
                    iconStyle={{ position: 'absolute', right: 0, top: -20 }}
                  />
                </View>
              </TouchableWithoutFeedback>
              <View style={{ display: this.state.visiblePromo }}>
                <TouchableOpacity onPress={() => { NavigationService.navigate('AjoutAnnonce', event= 0) }}>
                  <View style={styleEspaceAnnonceur.ItemDropDown}>
                    <Text style={styleEspaceAnnonceur.btnDropDownText}>Ajouter une promotion</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { NavigationService.navigate('AjoutAnnonce', event= 1) }}>
                  <View style={[styleEspaceAnnonceur.ItemDropDown, {elevation: 2}]}>
                    <Text style={styleEspaceAnnonceur.btnDropDownText}>Ajouter un événement</Text>
                  </View> 
                </TouchableOpacity>
              </View>
            </View>

            <View style={styleEspaceAnnonceur.droppDown}>
              <TouchableWithoutFeedback 
                onPress={ (this.state.visibleGestion == 'none' ? (
                  () => this.setState({visibleGestion: 'flex'}) 
                  ) : (
                  () => this.setState({visibleGestion: 'none'}) 
                ))}
              >
                <View style={styleEspaceAnnonceur.btnDropDown}>
                  <Text style={styleEspaceAnnonceur.btnDropDownText}>Gestion des annonces en ligne</Text>
                  <Icon
                    name='md-arrow-dropdown'
                    type='ionicon'
                    color='#263c88' 
                    size={22}
                    iconStyle={{ position: 'absolute', right: 0, top: -20 }}
                  />
                </View>
              </TouchableWithoutFeedback>
              <View style={{ display: this.state.visibleGestion }}>
                <TouchableOpacity onPress={() => { NavigationService.navigate('GestionAnnonce') }}>
                  <View style={styleEspaceAnnonceur.ItemDropDown}>
                    <Text style={styleEspaceAnnonceur.btnDropDownText}>Voir Vos Promotion/Événements En Ligne</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { NavigationService.navigate('Historique') }}>
                  <View style={[styleEspaceAnnonceur.ItemDropDown, {elevation: 2}]}>
                    <Text style={styleEspaceAnnonceur.btnDropDownText}>Historique Promotion/Événement</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => { 
                AsyncStorage.removeItem('id_token')
                NavigationService.navigate('Login') }}>
                <Text>Déconnexion</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </MainLayout> 
      );
  };
};
