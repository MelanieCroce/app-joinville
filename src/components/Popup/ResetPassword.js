import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput } from 'react-native';
import {styleResetPassword} from '../../assets/Style/Components/StyleResetPassword';
import Modal from "react-native-modal";
import { ButtonAlert, ButtonCTA, ButtonConnexion } from '../button';
import {bgPopup} from '../../assets/Style/variables';
import Dimensions from 'Dimensions';

let centerVertical = (Dimensions.get("window").height / 2) - 180;

export class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          isVisible={this.state.modalVisible}
          style={[styleResetPassword.modal, {top: centerVertical}]}
          onBackdropPress={() => this.setState({ modalVisible: false })}
          backdropColor={bgPopup}
          backdropOpacity={0.83}
          hideModalContentWhileAnimating={true}
          >
          
          <View style={styleResetPassword.modalContent}>

            <View>
              <Text style={styleResetPassword.title}>Mot de passe oublié ?</Text>
              <Text style={styleResetPassword.contentText}>
              Contactez nous au <Text style={{ color: '#1f80cb' }}>0650145362</Text> ou par mail à l'adresse <Text style={{ color: '#1f80cb' }}>contact@joinville-connect.fr</Text> nous prendrons contact avec vous le plus rapidement possible. 
              </Text>
            </View>

          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => { this.setModalVisible(true);}}
          style={{ shadowColor: "#000000", shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 10,}}
          >
            <Text style={styleResetPassword.link}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}