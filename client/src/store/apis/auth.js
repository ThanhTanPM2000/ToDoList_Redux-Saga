import { axios } from "./axios";

const loginRequest = async ({ email, password }) => {
  try {
    const res = await axios.post("/login", { email, password });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const registerRequest = async ({ email, username, password }) => {
  try {
    const res = await axios.post("/register", {
      email,
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const logoutRequest = async () => {
  try {
    const res = await axios.post("/logout", {});
    return res?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { loginRequest, registerRequest, logoutRequest };
