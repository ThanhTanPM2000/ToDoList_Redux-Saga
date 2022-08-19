import { IUser, Users } from "../models/user";
import StatusCodes from "http-status-codes";
import bcrypt from "bcrypt";

export const getUser = async (email: string): Promise<IUser> => {
  try {
    const user = await Users.findOne({ email });
    if (!user) throw new Error("User Not Found");
    return user;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const createUser = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    let user = await Users.findOne({ email });
    if (user) {
      throw new Error("User already registered");
    }
    user = new Users({ email, username, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    return user;
  } catch (error) {
    error.code = StatusCodes.BAD_REQUEST;
    throw error;
  }
};
