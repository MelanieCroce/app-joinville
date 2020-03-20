import api from './config';

export const GET_SLIDER_HOME = "GET_SLIDER_HOME";
export const ERROR_SLIDER_HOME = "ERROR_SLIDER_HOME";

export const GET_PROMO_HOME = "GET_PROMO_HOME";
export const ERROR_PROMO_HOME = "ERROR_PROMO_HOME";

export function getSliderHome () {
  return function (dispatch) {
    api.get("/contents?type=home")
    .then(function(response) {
      dispatch({ 
        type: GET_SLIDER_HOME,
        slider: response.data
      })
    }).catch(function(error) {
      console.log(error)
      dispatch({
        type: ERROR_SLIDER_HOME
      })
    })
  }
}


export function getPromoHome() {
  return function (dispatch) {
    api.get("/announces/last")
    .then(function(response) {
      dispatch({ 
        type: GET_PROMO_HOME,
        promo: response.data
      })
    }).catch(function(error) {
      console.log(error)
      dispatch({
        type: ERROR_PROMO_HOME
      })
    })
  }
}