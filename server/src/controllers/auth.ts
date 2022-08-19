import { RequestWithToken } from "./../middleware/requireLogging";
import { comparePassword, generateToken } from "./../services/auth";
import _ from "lodash";
import { ZodError } from "zod";
import { Request, Response } from "express";

import { loginValidator, registerValidator } from "./validators/auth";
import { getUser, createUser } from "../services/user";
import { IUser } from "../models/user";
import { StatusCodes } from "http-status-codes";

export const register = async (req: Request, res: Response) => {
  try {
    const { body } = registerValidator(req);
    const { email, username, password } = body;
    const userCreated: IUser = await createUser(email, username, password);
    const token = generateToken(userCreated._id, userCreated.email);
    return res
      .cookie("token", token)
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send({ token, user: _.pick(userCreated, ["_id", "username", "email"]) });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).send(error.errors);
    }
    console.error(error);
    return res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { body } = loginValidator(req);
    const { email, password } = body;

    const user: IUser = await getUser(email);
    if (!user)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send("Invalid email or password.");

    const validPassword = comparePassword(password, user.password);
    if (!validPassword)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send("Invalid email or password.");

    const token = generateToken(user._id, user.email);

    res
      .cookie("token", token)
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send({
        token,
        user: _.pick(user, ["_id", "username", "email"]),
      });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).send(error.errors);
    }
    console.error(error);
    return res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

export const logout = (req: RequestWithToken, res: Response) => {
  try {
    res
      .cookie("token", null)
      .header("x-auth-token", "")
      .header("access-control-expose-headers", "x-auth-token")
      .send({
        token: null,
        user: {},
      });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};
