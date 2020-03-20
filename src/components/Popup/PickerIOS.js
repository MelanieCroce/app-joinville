import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput, Picker, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { reduxForm, Field  } from 'redux-form';
import {connect} from 'react-redux';
import {styleSearch} from '../../assets/Style/Components/StyleSearch';
import Modal from "react-native-modal";
import { ButtonCTA } from '../button';
import { searchEvent } from '../../actions/promotions';

import {iconSearchColor, iconColor} from '../../assets/Style/variables';

const width = (Dimensions.get('window').width) - 60;

class PickerIOS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: '',
      select: this.props.data[0].name,
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount() {
    //this.props.dispatch(searchEvent());
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
          backdropColor="black"
          backdropOpacity={0.83}
          >
          <View style={styleSearch.triangle}></View>
          <View style={styleSearch.close}>
              <Icon
                name='md-close-circle'
                type='ionicon'
                color={iconColor} 
                size={15}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} 
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                style={{ position: 'absolute', zIndex: 999 }}
                />
            </View>
          <View style={{ backgroundColor: 'white', width: "100%", height: 190, zIndex: 99, left: 0, bottom: 0, borderRadius: 5, }}>
              <Picker
              selectedValue={this.state.selectValue}
              style={{ height: 40, color: iconSearchColor }}
              textStyle={{ fontFamily: 'Montserrat-Regular' }}
              onValueChange={(itemValue, itemIndex) => {
                let valueName = this.props.data.find(value => value.value === itemValue);
                this.setState({select: valueName.name, selectValue: itemValue})
                this.props.dispatch(searchEvent(itemValue, this.props.sort))
              }}>
                {this.props.data.map((data) =>
                  <Picker.Item key={data.id} label={data.name} value={data.value} />
                )}
              </Picker>

          </View>
        </Modal>
 
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
            
          }}>
            <View style={[styleSearch.dropDown, (this.props.form && styleSearch.dropdownForm)]}><Text>{this.state.select}</Text></View>
            <View style={[{ position: 'absolute', right: 12, top: 15 }, (this.props.form && { right: 60 })]}> 
              <Icon
                name="arrow-drop-down"
                size={30} 
                color={this.props.form ? "#a4a4a4" : iconColor }
              />
            </View>
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


export default connect(mapStateToProps)(PickerIOS);
