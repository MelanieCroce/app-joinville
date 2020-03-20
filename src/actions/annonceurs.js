import api from './config';

export const ANNONCEUR_LIST_COMPLETE = 'ANNONCEUR_LIST_COMPLETE';
export const ERROR_ANNONCEUR_LIST_COMPLETE = 'ERROR_ANNONCEUR_LIST_COMPLETE';

export const fetchAnnonceurs = function( category='', search='' ) {
  return function (dispatch) {
    api.get("/users/announcer?category=" +category+ "&search=" +search+ '&sort=desc')
    .then(function(response) {
      dispatch({ 
        type: ANNONCEUR_LIST_COMPLETE,
        annonceurList: response.data
      })
    }).catch(function(error) {
      console.log(error)
      dispatch({
        type: ERROR_ANNONCEUR_LIST_COMPLETE
      })
    })
  }
}

export const ANNONCEURS_DETAIL_COMPLETE = 'ANNONCEURS_DETAIL_COMPLETE';
export const ERROR_ANNONCEURS_DETAIL_COMPLETE = 'ERROR_ANNONCEURS_DETAIL_COMPLETE';

export const fetchAnnonceurDetail = function( id ) {
  return function (dispatch) {
    api.get('users/' + id )
    .then(function(response) {
      dispatch({  
        type: ANNONCEURS_DETAIL_COMPLETE,
        annonceurDetail: response.data
      })
    }).catch(function(error) {
      console.log(error)
      dispatch({
        type: ERROR_ANNONCEURS_DETAIL_COMPLETE
      })
    })
  }
}

export const ANNONCEURS_PROMO_COMPLETE = 'ANNONCEURS_PROMO_COMPLETE';
export const ERROR_ANNONCEURS_PROMO_COMPLETE = 'ERROR_ANNONCEURS_PROMO_COMPLETE';

export const fetchAnnonceurPromo = function( id ) {
  return function (dispatch) {
    api.get('/announces/last/' + id )
    .then(function(response) {
      dispatch({ 
        type: ANNONCEURS_PROMO_COMPLETE,
        annonceurPromo: response.data
      })
    }).catch(function(error) {
      console.log(error)
      dispatch({
        type: ERROR_ANNONCEURS_PROMO_COMPLETE
      })
    })
  }
}


export const SEARCH_ANNONCE_ACTIVE = 'SEARCH_ANNONCE_ACTIVE';

export const searchAnnonceur = function(search='') {
  return {
    type : SEARCH_ANNONCE_ACTIVE,
    search: search
  }
}