import api from './config';

export const PROMOS_LIST_COMPLETE = 'PROMOS_LIST_COMPLETE';
export const ERROR_PROMOS_LIST_COMPLETE = 'ERROR_PROMOS_LIST_COMPLETE';

export const fetchPromos = function(categorie='', event='', sort='') {
  return function (dispatch) {
    api.get("/announces?category=" +categorie+ '&event=' +event+ '&sort=' +sort) 
    .then(function(response) {
      console.log(response)
      dispatch({ 
        type: PROMOS_LIST_COMPLETE,
        promotions: response.data,
      })
    }).catch(function(error) {
      dispatch({
        type: ERROR_PROMOS_LIST_COMPLETE
      })
    })
  }
}

export const PROMO_DETAIL_COMPLETE = 'PROMO_DETAIL_COMPLETE';
export const ERROR_PROMO_DETAIL_COMPLETE = 'ERROR_PROMO_DETAIL_COMPLETE';

export const fetchPromoDetail = function( id ) {
  return function (dispatch) {
    api.get('/announces/' + id )
    .then(function(response) {
      dispatch({ 
        type: PROMO_DETAIL_COMPLETE,
        promotion: response.data,
        isFetching: true
      })
    })
    .catch(function(error) {
      dispatch({
        type: ERROR_PROMO_DETAIL_COMPLETE
      })
    })
  }
}

export const ADD_ANNONCE_COMPLETE = 'ADD_ANNONCE_COMPLETE';
export const ERROR_ADD_ANNONCE_COMPLETE = 'ERROR_ADD_ANNONCE_COMPLETE';

export const addAnnonces = function( annonce ) {
  return function (dispatch) {
    api.post('/announces', {
      app: 1, 
      event: annonce.event,
      name: annonce.name,
      text: annonce.text,
      real_price: annonce.real_price,
      promo_price: annonce.promo_price,
      external_link: annonce.external_link,
      date_start: annonce.date_start,
      date_end: annonce.date_end,
      image: annonce.image,
      category: annonce.id_category,
      user: annonce.user,
      recurrence: annonce.recurrence
    })
    .then(function(response) {
      dispatch({ 
        type: ADD_ANNONCE_COMPLETE,
      })
    }).catch(function(error) {
      dispatch({
        type: ERROR_ADD_ANNONCE_COMPLETE
      })
    })
  }
}

export const SEARCH_EVENT_ACTIVE = 'SEARCH_EVENT_ACTIVE';

export const searchEvent = function(event='', sort ='') {
  return {
    type : SEARCH_EVENT_ACTIVE,
    event : event,
    sort : sort,
  }
}