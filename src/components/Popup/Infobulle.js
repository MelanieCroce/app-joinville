import React, {Component} from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import {styleInfobulle} from '../../assets/Style/Components/StyleInfobulle';
import Modal from "react-native-modal";

export class Infobulle extends Component {
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
        <View style={styleInfobulle.modal}>
          <View style={styleInfobulle.triangle}></View>
          <View style={styleInfobulle.modalContent}>
            <View>
                <Text style={styleInfobulle.title}>Explication du champ</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
            <Icon
              name='question-circle'
              type='font-awesome'
              size={20}
              color='#465a7e'
              /> 
        </TouchableOpacity>
      </View>
    );
  }
}