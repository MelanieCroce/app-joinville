import api from './config';

export const FILTER_COMPLETE = 'FILTER_COMPLETE';
export const ERROR_FILTER_COMPLETE = 'ERROR_FILTER_COMPLETE';

export const fetchFilter = function() {
  return function (dispatch) {
    api.get("/categories")
    .then(function(response) {
      dispatch({ 
        type: FILTER_COMPLETE,
        filterCategory: response.data
      })
    }).catch(function(error) {
      dispatch({
        type: ERROR_FILTER_COMPLETE
      })
    })
  }
}

export const SEARCH_FILTER_ACTIVE = 'SEARCH_FILTER_ACTIVE';

export const searchFilter = function(categorie) {
  return {
    type : SEARCH_FILTER_ACTIVE,
    categorie : categorie
  }
}