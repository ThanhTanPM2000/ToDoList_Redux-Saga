import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import confEnv from "../configs/env";
import { getUser } from "./user";

export const generateToken = (_id: mongoose.Types.ObjectId, email: string) => {
  const token = jwt.sign(
    {
      _id,
      email,
    },
    confEnv.JWT_KEY
  );
  return token;
};

export const comparePassword = async (password: string, hashedPass: string) => {
  const validPassword = await bcrypt.compare(password, hashedPass);
  return validPassword;
};

// export const checkAndExtendSession = async (email: string, token: string) => {
//   try {
//     const user = await getUser(email);
//     if (!user) {
//       return null;
//     }
//     const now = new Date();
//   } catch (error) {
//     return null;
//   }
// };
