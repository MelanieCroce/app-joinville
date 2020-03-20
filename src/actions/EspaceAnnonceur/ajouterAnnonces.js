import api from '../config';
import { formValueSelector } from 'redux-form';
import { AsyncStorage, Alert } from 'react-native';
import NavigationService from '../../containers/NavigationService';
export const ADD_ANNONCE_COMPLETE = 'ADD_ANNONCE_COMPLETE';
export const ERROR_ADD_ANNONCE = 'ERROR_ADD_ANNONCE';
import moment from 'moment';

export const addAnnonce = function() {
  return function( dispatch, getState ) {
    const selector = formValueSelector('AddAnnonce');
    const data = selector( getState(), 'name', 'text', 'event', 'external_link', 'data1','data2','data3', 'date_start', 'date_end', 'real_price', 'promo_price' );
    data.data1 = data.data1.data
    data.data2 = data.data2.data
    data.data3 = data.data3.data
    data.date_start = moment(data.date_start).format();
    data.date_end = moment(data.date_end).format();
    if(data.real_price == null){
      data.real_price = 0;
      console.log("​addAnnonce -> data.real_price", data.real_price);

    }
    if(data.name != null && data.text != null && data.date_start != null && data.date_end != null && data.promo_price != null){
      AsyncStorage.getItem('id_token').then((token) => {
        api.post("/announces", data,{
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(function(response) {
          console.log(response);
          Alert.alert(
            'Annonce ajoutée',
            'Votre annonce a bien été ajoutée',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          );
          dispatch({ 
            type: ADD_ANNONCE_COMPLETE,
          })
        }).catch(function(error) {
          console.log(error);
          Alert.alert(
            'Erreur lors de l\'ajout',
            'Il y a eu un problème lors de l\'insertion de votre annonce',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          );
          AsyncStorage.setItem('id_token', '');
          NavigationService.navigate("Login");
          dispatch({
            type: ERROR_ADD_ANNONCE
          })
        })
      })
    }else{
      Alert.alert(
        'Erreur lors de l\'ajout',
        'Veuillez renseigner tous les champs obligatoires',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      );
      return false;
    }
  };
}