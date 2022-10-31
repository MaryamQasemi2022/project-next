import actionTypes from "../configs/actionTypes";

const auth = (state = [], action) => {
  // console.log('action', action)
  switch (action.type) {
    case actionTypes.LOGIN_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,

      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
        user: action.response.user,
        ...action


      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
        error: action.error
      }
    // REGISTER
    case actionTypes.REGISTER_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,

      }
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,

      }
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
        error: action.error
      }
    default: return state

  }
}
export default auth;
