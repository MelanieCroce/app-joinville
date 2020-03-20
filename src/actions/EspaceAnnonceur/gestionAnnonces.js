import api from '../config';

export const GESTION_ANNONCE_COMPLETE = 'GESTION_ANNONCE_COMPLETE';
export const ERROR_GESTION_ANNONCE_COMPLETE = 'ERROR_GESTION_ANNONCE_COMPLETE';

export const fetchGestionAnnonce = function(id) {
  return function (dispatch) {
    api.get("/announces/user?sort=desc&user=" +id)
    .then(function(response) {
      console.log(id)
      dispatch({ 
        type: GESTION_ANNONCE_COMPLETE,
        annonces: response.data
      })
    }).catch(function(error) {
      dispatch({
        type: ERROR_GESTION_ANNONCE_COMPLETE
      })
    })
  }
}