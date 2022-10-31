import reduxCall from "../utils/reduxCall";
import fetchUrl from "../utils/fetchUrl"

const GET_LIST_JOB_ACTION = () => {
  return async (dispatch) => {

    return reduxCall(dispatch, {
      url: '/jobs.json',
      method: 'GET',
      name: 'GET_LIST_JOB'
    })
  }

}




export { GET_LIST_JOB_ACTION };
