import api from '../config';
import { AsyncStorage,Alert } from 'react-native';
import NavigationService from '../../containers/NavigationService';
export const MODIFIER_COMPLETE = 'MODIFIER_COMPLETE';
export const ERROR_MODIFIER_COMPLETE = 'ERROR_MODIFIER_COMPLETE';

export const fetchModifierAnnonce = function(id) {
  return function (dispatch) {
    api.get("/announces/" + id)
    .then(function(response) {
      console.log(response)
      dispatch({ 
        type: MODIFIER_COMPLETE,
        annonceModifier: response.data
      })
    }).catch(function(error) {
      AsyncStorage.setItem('id_token', '');
      NavigationService.navigate("Login");
      dispatch({
        type: ERROR_MODIFIER_COMPLETE
      })
    })
  }
}

import { formValueSelector, Field } from 'redux-form';
export const MODIFY_ANNONCE_COMPLETE = 'MODIFY_ANNONCE_COMPLETE';
export const ERROR_MODIFY = 'ERROR_MODIFY';

import moment from 'moment';

export const modifyAnnonce = function() {
  return function( dispatch, getState ) {
    const selector = formValueSelector('ModifierAnnonce');
    const data = selector( getState(), 'id', 'name', 'text','event', 'external_link', 'data1','data2','data3', 'date_start', 'date_end', 'real_price', 'promo_price' );
    data.data1 = data.data1.data
    data.data2 = data.data2.data
    data.data3 = data.data3.data
    data.date_start = moment(data.date_start).format();
    data.date_end = moment(data.date_end).format();
		console.log("​modifyAnnonce -> data", data)
    if(data.name != "" && data.text != "" && data.date_start != null && data.date_end != null && data.promo_price != ""){
      AsyncStorage.getItem('id_token').then((token) => {
        api.put("/announces", data,{
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(function(response) {
          Alert.alert(
            'Annonce modifiée',
            'Votre annonce a bien été modifiée',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          );
          dispatch({ 
            type: MODIFY_ANNONCE_COMPLETE,
          })
        }).catch(function(error) {
          Alert.alert(
            'Erreur lors de la modification',
            'Il y a eu un problème lors de la modification de votre annonce',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          );
          AsyncStorage.setItem('id_token', '');
          NavigationService.navigate("Login");
          dispatch({
            type: ERROR_MODIFY
          })
        })
      })
    }else{
      Alert.alert(
        'Erreur lors de la modification',
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