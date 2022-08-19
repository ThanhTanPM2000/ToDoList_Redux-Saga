import { call, all, fork, put, takeEvery } from "redux-saga/effects";

import {
  loginSucceeded,
  loginFailed,
  registerSucceeded,
  registerFailed,
  logoutSucceeded,
  logoutFailed,
} from "./actions";
import { loginRequest, registerRequest, logoutRequest } from "../../apis/auth";
import { LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST } from "./actionTypes";

export function* handleLogin({ payload }) {
  try {
    const { email, password } = payload;
    const payLoad = yield call(loginRequest, { email, password });
    yield put(loginSucceeded(payLoad));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

export function* handleRegister({ payload }) {
  try {
    const { email, username, password } = payload;
    const payLoad = yield call(registerRequest, { email, username, password });
    yield put(registerSucceeded(payLoad));
  } catch (error) {
    yield put(registerFailed(error));
  }
}

export function* handleLogout() {
  try {
    const payLoad = yield call(logoutRequest, {});
    yield put(logoutSucceeded(payLoad));
  } catch (error) {
    yield put(logoutFailed(error));
  }
}

export function* watchAuthRequest() {
  yield takeEvery(LOGIN_REQUEST, handleLogin);
  yield takeEvery(REGISTER_REQUEST, handleRegister);
  yield takeEvery(LOGOUT_REQUEST, handleLogout);
}

export default function* authSagas() {
  yield all([fork(watchAuthRequest)]);
}
