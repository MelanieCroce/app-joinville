import React, {Component} from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import {styleAddPhoto} from '../../assets/Style/Components/StyleAddPhoto';
import Modal from "react-native-modal";
import { ButtonAlert, ButtonCTA, ButtonRound } from '../button';
import ImagePicker from 'react-native-image-picker';
import {bgPopup} from '../../assets/Style/variables';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};  

export class AddPhoto extends Component {
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

  getPhotosFromGallery = () => {
    ImagePicker.launchImageLibrary({quality: 0.5}, (response) => {  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.props.imageSource( response )
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          imageSource: response,
        });
        this.setModalVisible(false)
      }
    });
  }

  getPhotos = () => {
    ImagePicker.launchCamera({quality: 0.5}, (response) => {   
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.props.imageSource( response )
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(response.fileSize)
        this.setState({
          imageSource: response,
        });
        this.setModalVisible(false)
      }
    });
  }
  
  render() {  
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="fade"
          animationInTiming={600}
          animationOutTiming={600}
          isVisible={this.state.modalVisible}
          style={[styleAddPhoto.modal, {bottom: 0}]}
          onBackdropPress={() => this.setState({ modalVisible: false })}
          backdropColor={bgPopup}
          backdropOpacity={0.83}
          >
          
          <View style={styleAddPhoto.modalContent}>
            <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
              <TouchableOpacity
                onPress={this.getPhotosFromGallery}
                style={{ shadowColor: "#000000", shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 10,}}
              >
                <ButtonAlert texte="Depuis la pellicule" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.getPhotos}
                style={{ shadowColor: "#000000", shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 10,}}
              >
                <ButtonAlert texte="Prendre une photo" />
              </TouchableOpacity>
            </View>
            <View style={{ borderTopWidth: 1, borderColor: '#afafaf', flex: 1, paddingHorizontal: 15, paddingBottom: 15 }}>
              <TouchableOpacity
                onPress={() => { this.setModalVisible(false); }}
                style={{ shadowColor: "#000000", shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 10,}}
              >
              <ButtonAlert texte="Annuler" color={['#fa7137', '#ff0666']} />
            </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
           <ButtonRound icon="add" color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}