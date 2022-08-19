import {
  GET_ROOM_REQUEST,
  GET_ROOM_SUCCEEDED,
  GET_ROOM_FAILED,
  FIND_ROOMS_REQUEST,
  FIND_ROOMS_SUCCEEDED,
  FIND_ROOMS_FAILED,
  CREATE_ROOM_SUCCEEDED,
  CREATE_ROOM_FAILED,
  CREATE_ROOM_REQUEST,
  UPDATE_ROOM_REQUEST,
  UPDATE_ROOM_SUCCEEDED,
  UPDATE_ROOM_FAILED,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_SUCCEEDED,
  DELETE_ROOM_FAILED,
} from "./actionTypes";

export const findRooms = () => {
  return {
    type: FIND_ROOMS_REQUEST,
  };
};
export const findRoomsSucceeded = (payload) => {
  return {
    type: FIND_ROOMS_SUCCEEDED,
    payload,
  };
};
export const findRoomsFailed = (error) => {
  return {
    type: FIND_ROOMS_FAILED,
    error,
  };
};

export const getRoom = (roomId) => {
  return {
    type: GET_ROOM_REQUEST,
    payload: { roomId },
  };
};
export const getRoomSucceeded = (payload) => {
  return {
    type: GET_ROOM_SUCCEEDED,
    payload,
  };
};
export const getRoomFailed = (error) => {
  return {
    type: GET_ROOM_FAILED,
    error,
  };
};

export const createRoom = (name) => {
  return {
    type: CREATE_ROOM_REQUEST,
    payload: { name },
  };
};
export const createRoomSucceeded = (payload) => {
  return {
    type: CREATE_ROOM_SUCCEEDED,
    payload,
  };
};
export const createRoomFailed = (error) => {
  return {
    type: CREATE_ROOM_FAILED,
    error,
  };
};

export const updateRoom = (roomId, name) => {
  return {
    type: UPDATE_ROOM_REQUEST,
    payload: { roomId, name },
  };
};
export const updateRoomSucceeded = (payload) => {
  return {
    type: UPDATE_ROOM_SUCCEEDED,
    payload,
  };
};
export const updateRoomFailed = (error) => {
  return {
    type: UPDATE_ROOM_FAILED,
    error,
  };
};

export const deleteRoom = (roomId) => {
  return {
    type: DELETE_ROOM_REQUEST,
    payload: { roomId },
  };
};
export const deleteRoomSucceeded = (payload) => {
  return {
    type: DELETE_ROOM_SUCCEEDED,
    payload,
  };
};
export const deleteRoomFailed = (error) => {
  return {
    type: DELETE_ROOM_FAILED,
    error,
  };
};
