import {
  FIND_ROOMS_SUCCEEDED,
  FIND_ROOMS_FAILED,
  CREATE_ROOM_SUCCEEDED,
  CREATE_ROOM_FAILED,
  UPDATE_ROOM_SUCCEEDED,
  UPDATE_ROOM_FAILED,
  DELETE_ROOM_SUCCEEDED,
  DELETE_ROOM_FAILED,
  GET_ROOM_SUCCEEDED,
  GET_ROOM_FAILED,
} from "./actionTypes";

const initState = {
  rooms: {},
  error: false,
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case FIND_ROOMS_SUCCEEDED:
      return {
        ...state,
        rooms: action.payload.rooms,
        error: false,
      };
    case FIND_ROOMS_FAILED:
      return {
        ...state,
        error: true,
      };
    case GET_ROOM_SUCCEEDED:
      const room = state.rooms.find((room) => room._id === action.payload._id);
      if (!room) {
        return {
          ...state,
          rooms: [...state.rooms, action.payload],
        };
      }
      return {
        ...state,
        rooms: state.rooms.map((room) => {
          if (room._id === action.payload._id) {
            return action.payload;
          }
          return room;
        }),
        error: true,
      };
    case GET_ROOM_FAILED:
      return {
        ...state,
        error: true,
      };
    case CREATE_ROOM_SUCCEEDED:
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
        error: false,
      };
    case CREATE_ROOM_FAILED:
      return {
        ...state,
        error: true,
      };
    case UPDATE_ROOM_SUCCEEDED:
      return {
        ...state,
        rooms: state.rooms.map((room) => {
          if (room._id === action.payload._id) {
            return action.payload;
          }
          return room;
        }),
        error: false,
      };
    case UPDATE_ROOM_FAILED:
      return {
        ...state,
        error: true,
      };
    case DELETE_ROOM_SUCCEEDED:
      return {
        ...state,
        rooms: state.rooms.filter((room) => room._id !== action.payload._id),
        error: false,
      };
    case DELETE_ROOM_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default roomReducer;
