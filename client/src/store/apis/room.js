import { axios } from "./axios";

const findRoomsRequest = async () => {
  try {
    const res = await axios.get("/rooms");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getRoomRequest = async ({ roomId }) => {
  try {
    const res = await axios.get(`/rooms/${roomId}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createRoomRequest = async ({ email }) => {
  try {
    const res = await axios.post("/rooms", {
      email,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateRoomRequest = async ({ roomId, name }) => {
  try {
    const res = await axios.put(`/rooms/${roomId}`, { name });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteRoomRequest = async ({ roomId }) => {
  try {
    const res = await axios.delete(`/rooms/${roomId}`);
    return res?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  findRoomsRequest,
  getRoomRequest,
  createRoomRequest,
  updateRoomRequest,
  deleteRoomRequest,
};
