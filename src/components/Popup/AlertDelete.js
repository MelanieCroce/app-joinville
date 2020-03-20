import React, {Component} from 'react';
import {Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import {styleAlert} from '../../assets/Style/Components/StyleAlertDelete';
import Modal from "react-native-modal";
import { ButtonAlert, ButtonCTA } from '../button';
import api from '../../actions/config';

import Dimensions from 'Dimensions';
import NavigationService from '../../containers/NavigationService';

import {bgPopup} from '../../assets/Style/variables';

let centerVertical = (Dimensions.get("window").height / 2) - 180;

export class AlertDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      confirmer: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  __deleteItem(id) {
    AsyncStorage.getItem('id_token').then((token) => {
      api.delete('/announces/' + id,
      {headers: {
        Authorization: "Bearer " + token
      }}).then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({confirmer: true});
        NavigationService.navigate("EspaceAnnonceur");
      })
      .catch(function (error) {
        console.log(error);
      });
    }) 
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="fade"
          isVisible={this.state.modalVisible}
          style={[styleAlert.modal, {top: centerVertical}]}
          onBackdropPress={() => this.setState({ modalVisible: false })}
          backdropColor={bgPopup}
          backdropOpacity={0.83}
          >
          
          <View style={styleAlert.modalContent}>
          {this.state.confirmer ? (
            <Text style={[styleAlert.title, {color: 'red', fontWeight: 'normal', marginVertical: 10, fontSize: 15}]}>
              Annonce supprimée
            </Text>
          ) : (
            <View>
              <Text style={styleAlert.title}>Confirmer suppression</Text>
              <Text style={styleAlert.contentText}>êtes vous sur de vouloir supprimer cette événement/promotion ?</Text>
              <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-evenly' }}>
              <View style={{ width: '45%' }}>
              <TouchableOpacity
                onPress={() => {
                  this.__deleteItem(this.props.id);
                }}>
                <ButtonAlert texte="Confirmer" color={['#68c030', '#16a085']} />
              </TouchableOpacity>
              </View>
              <View style={{ width: '45%' }}>
                <TouchableOpacity
                  onPress={() => { this.setModalVisible(false); }}
                  style={{ shadowColor: "#000000", shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 10,}}
                >
                  <ButtonAlert texte="Annuler" color={['#fa7137', '#ff0666']} />
                </TouchableOpacity>
              </View>
            </View>
            </View>
          )}

          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={{ shadowColor: "#000000", shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 10,}}
          >
            <ButtonAlert texte={'Supprimer'} color={['#fa7137', '#ff0666']} />
        </TouchableOpacity>
      </View>
    );
  }
}