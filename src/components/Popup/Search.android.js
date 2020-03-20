import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Picker} from 'react-native';
import { Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import {styleSearch} from '../../assets/Style/Components/StyleSearch';
import Modal from "react-native-modal";
import { ButtonCTA } from '../button';
import { searchEvent } from '../../actions/promotions';
import SearchAnnonceur from '../SearchAnnonceur';

import {iconSearchColor} from '../../assets/Style/variables';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      category: '',
      ordrePromo: 'asc',
      ordrePromoText: 'Qui expirent bientôt',

      ordreAnnonce: 'desc',
      ordreAnnonceText: 'Les nouveaux',
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount() {
    this.props.dispatch(searchEvent());
  }

  _btnOrdrePromo() {
    if(this.state.ordrePromo == 'asc') {
      this.setState({ ordrePromo: '', ordrePromoText: 'Les plus récentes' })
    }
    else {
      this.setState({ ordrePromo: 'asc', ordrePromoText: 'Qui expirent bientôt' })
    }
  }

  _btnOrdreAnnonces() {
    if(this.state.ordreAnnonce == 'desc') {
      this.setState({ ordreAnnonce: '', ordreAnnonceText: 'Les plus anciens' })
    }
    else {
      this.setState({ ordreAnnonce: 'desc', ordreAnnonceText: 'Les nouveaux' })
    }
  }
  

  render() {
    if ( this.props.event == null ) {
      
    }    
    return (
      
      <View>
        <Modal
          animationType="fade"
          visible={this.state.modalVisible}
          style={styleSearch.modal}
          onBackdropPress={() => this.setState({ modalVisible: false })}
          >
          <View style={styleSearch.triangle}></View>
          <View style={styleSearch.modalContent}>
            <View style={styleSearch.triangle}></View>
            <View>
              { this.props.type == 'filtres' ? (
                <Text style={styleSearch.title}>Filtres</Text>
              ) : (
                  <SearchAnnonceur popupclose={() => {this.setModalVisible(!this.state.modalVisible)}} />
              )}
              { this.props.type == 'filtres'  && 
              <View style={styleSearch.dropDown}>
                <Picker
                  selectedValue={this.state.category}
                  style={{ height: 40, color: iconSearchColor }}
                  onValueChange={(itemValue, itemIndex) => (
                    this.setState({category: itemValue}),
                    this.props.dispatch(searchEvent(itemValue, this.props.sort))
                  )}>
                  <Picker.Item label="Toutes les annnonces" value={''} />
                  <Picker.Item label="Événement" value={1} />
                  <Picker.Item label="Promotion" value={0} />
                </Picker>
                </View>}

              {this.props.type == 'filtres' && 
                <TouchableOpacity 
                  onPress={ () => { 
                    this.props.dispatch(searchEvent(this.props.event, this.state.ordrePromo)) 
                    this.setModalVisible(!this.state.modalVisible)
                    this._btnOrdrePromo()
                  } 
                }>
                <ButtonCTA large texte={this.state.ordrePromoText} />
              </TouchableOpacity>
            }
            </View>
          </View>
          <View style={styleSearch.close}>
            <Icon
              name='md-close-circle'
              type='ionicon'
              color='#c0c8ca' 
              size={15}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }} 
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              />
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
            <Icon
              name='search'
              type='FontAwesome'
              color='#fff' 
              /> 
        </TouchableOpacity>
      </View>
    );
  }
}


function mapStateToProps( state ) {
  return {
    event : state.eventSearchReducer.event, 
    sort: state.eventSearchReducer.sort
  };
}


export default connect(mapStateToProps)(Search);