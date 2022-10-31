import actionTypes from "../configs/actionTypes";
import fetchUrl from "./fetchUrl";

const reduxCall = async (dispatch, { url, method = "GET", name }) => {

  dispatch({
    type: actionTypes[`${name}_STARTED`],
    logged: true,
    loading: true,

  })

  try {

    const response = await fetchUrl({
      url: url,
      method: method,
    });

    dispatch({
      type: actionTypes[`${name}_SUCCESS`],
      logged: true,
      loading: false,
      response,
    })

  } catch (e) {
    dispatch({
      type: actionTypes[`${name}_FAILED`],
      logged: false,
      error: true,
      loading: false,

    })

  }



}

export default reduxCall;
