import { ALL_USER_FAIL, ALL_USER_REQUEST, ALL_USER_SUCCESS, CLEAR_ERROR, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstant"



export const allUsersReducers = (state = { users: [] }, action) => {

    switch (action.type) {
        case ALL_USER_REQUEST:
            return {
                loading: true,
                users: []
            }
        case ALL_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload.users
            }
        case ALL_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const loginUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
      case LOAD_USER_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case USER_LOGIN_SUCCESS:
      case LOAD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
  
    //   case LOGOUT_SUCCESS:
    //     return {
    //       loading: false,
    //       user: null,
    //       isAuthenticated: false,
    //     };
      case USER_LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
  
      case LOAD_USER_FAIL:
        return {
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
  
    //   case LOGOUT_FAIL:
    //     return {
    //       ...state,
    //       loading: false,
    //       error: action.payload,
    //     };
  
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };