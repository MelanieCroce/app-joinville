import api from './config';

export const ABOUT_COMPLETE = 'ABOUT_COMPLETE';
export const ERROR_ABOUT_COMPLETE = 'ERROR_ABOUT_COMPLETE';

export const fetchAbout = function() {
    return function (dispatch) {
        api.get("/contents?type=qsn")
        .then(function(response) {
          dispatch({ 
            type: ABOUT_COMPLETE,
            about: response.data[0]
          })
        }).catch(function(error) {
          dispatch({
            type: ERROR_ABOUT_COMPLETE
          })
        })
      }
}

export const CGU_COMPLETE = 'CGU_COMPLETE';
export const CGU_ABOUT_COMPLETE = 'CGU_ABOUT_COMPLETE';

export const fetchCGU = function() {
    return function (dispatch) {
        api.get("/contents?type=cgu")
        .then(function(response) {
          dispatch({ 
            type: CGU_COMPLETE,
            cgu: response.data[0]
          })
        }).catch(function(error) {
          dispatch({
            type: CGU_ABOUT_COMPLETE
          })
        })
      }
}