import {
  LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCEEDED,
  REGISTER_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
} from "./actionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password },
  };
};

export const loginSucceeded = (payload) => {
  console.log("payload is ", payload);
  return {
    type: LOGIN_SUCCEEDED,
    payload,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error,
  };
};

export const register = (email, username, password) => {
  return {
    type: REGISTER_REQUEST,
    payload: { email, username, password },
  };
};

export const registerSucceeded = (payload) => {
  return {
    type: REGISTER_SUCCEEDED,
    payload,
  };
};

export const registerFailed = (payload) => {
  return {
    type: REGISTER_FAILED,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSucceeded = (payload) => {
  return {
    type: LOGOUT_SUCCEEDED,
    payload,
  };
};

export const logoutFailed = (error) => {
  return {
    type: LOGOUT_FAILED,
    error,
  };
};
