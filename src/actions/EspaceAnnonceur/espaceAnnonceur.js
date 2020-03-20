import api from '../config';
import { AsyncStorage } from 'react-native';
import NavigationService from '../../containers/NavigationService';
export const USERS_COMPLETE = 'USERS_COMPLETE';
export const ERROR_USERS_COMPLETE = 'ERROR_USERS_COMPLETE';

export const fetchUsers = function() {
  return function (dispatch) {
    AsyncStorage.getItem('id_token').then((token) => {
      api.post("/users/token", null,{
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(function(response) {
        dispatch({ 
          type: USERS_COMPLETE,
          users: response.data
        })
      }).catch(function(error) {
        console.log(error)
        AsyncStorage.setItem('id_token', '');
        NavigationService.navigate("Login");
        dispatch({
          type: ERROR_USERS_COMPLETE
        })
      })
    })
  }
}