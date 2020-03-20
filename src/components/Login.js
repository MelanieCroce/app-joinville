import React from 'react';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage,Alert } from 'react-native';
import Dimensions from 'Dimensions';
import api from '../actions/config';
import NavigationService from '../containers/NavigationService';

import { stylesConnexion } from '../assets/Style/Screen/StyleConnexion';
import { ButtonConnexion } from './button';
import { ResetPassword } from './Popup/ResetPassword';
import { stylesButton } from '../assets/Style/Components/StyleButton';

let ScreenHeight = Dimensions.get("window").height - 80;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        textPassword: '', 
        textLogin: '',
    };
  };

  _login = () => {
    api.post('/login_check', {
      username: this.state.textLogin,
      password: this.state.textPassword,
    })
    .then((responseData) => {
      AsyncStorage.setItem('id_token', responseData.data.token),
      NavigationService.navigate('EspaceAnnonceur'),
      console.log(responseData)
    })
    .catch(function (error) {
      if (error.response) {
        Alert.alert(
          'Erreur de connexion',
          'Veuillez verifier votre login et/ou votre mot de passe',
          [
            {text: 'OK'},
          ],
          { cancelable: false }
        )
        console.log(error.response);
      } 
    });
  }

  render() {
    return (
      <View style={{ 
        height: ScreenHeight, 
      }}>
        <View style={[stylesConnexion.container]}>
          <View style={{ width: '100%', smarginTop: -50,alignItems: 'center' }}>
            <Text style={stylesConnexion.title}>Connexion</Text>
            <TextInput
              placeholder={"Login"}
              placeholderTextColor={"#fff"}
              style={stylesConnexion.inputLogin}
              value={this.state.textLogin}
              selectTextOnFocus
              onChangeText={(textLogin) => this.setState({textLogin})}
              underlineColorAndroid='transparent'
              textContentType={'emailAddress'}
              keyboardType={'email-address'}
            />
            <TextInput
              placeholder={"Mot de passe"}
              placeholderTextColor={"#fff"}
              style={stylesConnexion.inputLogin}
              value={this.state.textPassword}
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              selectTextOnFocus
              textContentType={"password"}
              onChangeText={(textPassword) => this.setState({textPassword})}
            />
            <TouchableOpacity 
              onPress={this._login}
              style={stylesButton.login}
            >
              <ButtonConnexion texte="Connexion" />
            </TouchableOpacity>
            <ResetPassword />
          </View>
        </View>                            
      </View>
    )
  }

}