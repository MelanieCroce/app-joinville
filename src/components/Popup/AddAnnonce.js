import React, {Component} from 'react';
import {Text, TouchableOpacity, View, } from 'react-native';
import {styleAlert} from '../../assets/Style/Components/StyleAlertDelete';
import Modal from "react-native-modal";
import { ButtonCTA } from '../button';

import {bgPopup} from '../../assets/Style/variables';

import Dimensions from 'Dimensions';

let centerVertical = (Dimensions.get("window").height / 2) - 180;

export class AddAnnonce extends Component {
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
            <Text style={[styleAlert.title, { fontWeight: 'normal', marginVertical: 10, fontSize: 15}]}>Annonce en ligne</Text>
          </View>
        </Modal>

        {/* <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
            this.props.onPress
          }}
          style={{ shadowColor: "#000000", shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 10,}}
          >  */}
            <ButtonCTA large texte={this.props.text} />
        {/* </TouchableOpacity>  */}
      </View>
    );
  }
}