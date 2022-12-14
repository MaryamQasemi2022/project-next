import actionTypes from "../configs/actionTypes";

const job = (state = [], action) => {
  // console.log('action job', action)
  switch (action.type) {
    case actionTypes.GET_LIST_JOB_STARTED:
      return {
        ...state,
        loading: action.loading,


      }
    case actionTypes.GET_LIST_JOB_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        jobs: action.response


      }
    case actionTypes.GET_LIST_JOB_FAILED:
      return {

        ...state,
        ...action
      }

    default: return state

  }
}
export default job;
