import { call, all, fork, put, takeEvery } from "redux-saga/effects";

import {
  findRoomsSucceeded,
  findRoomsFailed,
  getRoomSucceeded,
  getRoomFailed,
  createRoomSucceeded,
  createRoomFailed,
  updateRoomSucceeded,
  updateRoomFailed,
  deleteRoomSucceeded,
  deleteRoomFailed,
} from "./actions";
import {
  findRoomsRequest,
  getRoomRequest,
  createRoomRequest,
  updateRoomRequest,
  deleteRoomRequest,
} from "../../apis/room";
import {
  CREATE_ROOM_REQUEST,
  DELETE_ROOM_REQUEST,
  FIND_ROOMS_REQUEST,
  GET_ROOM_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  UPDATE_ROOM_REQUEST,
} from "./actionTypes";

export function* handleFindRooms({ payload }) {
  try {
    const payLoad = yield call(findRoomsRequest);
    yield put(findRoomsSucceeded, payLoad);
  } catch (error) {
    yield put(findRoomsFailed, error);
  }
}

export function* handleGetRoom({ payload }) {
  try {
    const { roomId } = payload;
    const payLoad = yield call(getRoomRequest, { roomId });
    yield put(getRoomSucceeded, payLoad);
  } catch (error) {
    yield put(getRoomFailed, error);
  }
}

export function* handleCreateRoom({ payload }) {
  try {
    const { name } = payload;
    const payLoad = yield call(createRoomRequest, { name });
    yield put(createRoomSucceeded, payLoad);
  } catch (error) {
    yield put(createRoomFailed, error);
  }
}

export function* handleUpdateRoom({ payload }) {
  try {
    const { roomId, name } = payload;
    const payLoad = yield call(updateRoomRequest, { roomId, name });
    yield put(updateRoomSucceeded, payLoad);
  } catch (error) {
    yield put(updateRoomFailed, error);
  }
}

export function* handleDeleteRoom({ payload }) {
  try {
    const { roomId } = payload;
    const payLoad = yield call(deleteRoomRequest, { roomId });
    yield put(deleteRoomSucceeded, payLoad);
  } catch (error) {
    yield put(deleteRoomFailed, error);
  }
}

export function* watchAuthRequest() {
  yield takeEvery(FIND_ROOMS_REQUEST, handleFindRooms);
  yield takeEvery(GET_ROOM_REQUEST, handleGetRoom);
  yield takeEvery(CREATE_ROOM_REQUEST, handleCreateRoom);
  yield takeEvery(UPDATE_ROOM_REQUEST, handleUpdateRoom);
  yield takeEvery(DELETE_ROOM_REQUEST, handleDeleteRoom);
}

export default function* authSagas() {
  yield all([fork(watchAuthRequest)]);
}
