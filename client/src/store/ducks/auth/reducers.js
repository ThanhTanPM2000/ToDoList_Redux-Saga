import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  REGISTER_SUCCEEDED,
  REGISTER_FAILED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
} from "./actionTypes";

const initState = {
  token: null,
  user: {},
  error: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      console.log(action);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: true,
        user: {},
      };
    case REGISTER_SUCCEEDED:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        error: true,
        user: {},
      };

    case LOGOUT_SUCCEEDED:
      return {
        ...state,
        token: null,
        user: {},
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default authReducer;
