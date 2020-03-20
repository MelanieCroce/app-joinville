import api from '../config';

export const HISTORIQUE_COMPLETE = 'HISTORIQUE_COMPLETE';
export const ERROR_HISTORIQUE_COMPLETE = 'ERROR_HISTORIQUE_COMPLETE';

export const fetchHistorique = function(id) {
  return function (dispatch) {
    api.get("/announces/user/old?sort=desc&user=" +id)
    .then(function(response) {
      dispatch({ 
        type: HISTORIQUE_COMPLETE,
        historique: response.data
      })
    }).catch(function(error) {
      dispatch({
        type: ERROR_HISTORIQUE_COMPLETE
      })
    })
  }
}