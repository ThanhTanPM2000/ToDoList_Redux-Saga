import { RequestWithToken } from "./requireLogging";
import { Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

import { setCookie } from "../utils/setCookies";

const sessionManager = async (
  req: RequestWithToken,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  try {
    const PUBLIC_PATHS = ["/api/login", "/api/register"];
    if (PUBLIC_PATHS.includes(req.path)) {
      next();
      return;
    }

    const token = req?.cookies?.token;

    if (!token) {
      setCookie("email", "", 0, res);
      setCookie("token", "", 0, res);
      return res.status(StatusCodes.UNAUTHORIZED).send();
    }

    req.token = token;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export default sessionManager;
