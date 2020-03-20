import React, {Component} from 'react';
import {Text, TouchableOpacity, View, DatePickerIOS, Dimensions} from 'react-native';
import {styleSearch} from '../../assets/Style/Components/StyleSearch';
import {styleForm} from '../../assets/Style/Components/StyleForm';
import Modal from "react-native-modal";
import { ButtonSquare } from '../button';
import {bgPopup} from '../../assets/Style/variables';

const width = (Dimensions.get('window').width) - 60;

const today = new Date();

export class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      chosenDate: new Date(),
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
      this.setState({chosenDate: newDate})
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          animationInTiming={600}
          animationOutTiming={600}
          visible={this.state.modalVisible}
          style={[styleSearch.modalPicker, { width }]}
          onBackdropPress={() => this.setState({ modalVisible: false })}
          backdropColor={bgPopup}
          backdropOpacity={0.83}
          >
          <View style={styleSearch.triangle}></View>
          <View style={{ backgroundColor: 'white', width: "100%", height: 150, zIndex: 99, left: 0, bottom: 40, borderRadius: 5, }}>
            <DatePickerIOS 
            date={this.state.chosenDate}
            onDateChange={this.setDate}
            mode="date"
            minimumDate={today}
            />
          </View>
        </Modal>
        <View style={styleForm.dateRow}>
          <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
            <View style={styleForm.inputDate}>
              <Text style={styleForm.inputDateText}>
              {this.state.chosenDate.getDate().toString()} / {this.state.chosenDate.getMonth()+ 1} / {this.state.chosenDate.getFullYear().toString()}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
            <View>
              <ButtonSquare icon="calendar" color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}