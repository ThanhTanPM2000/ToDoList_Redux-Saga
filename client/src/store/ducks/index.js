import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { authReducer, authSagas } from "./auth";
import { roomReducer, roomSagas } from "./rooms";

export const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer,
});

export function* rootSagas() {
  yield all([fork(authSagas), fork(roomSagas)]);
}
