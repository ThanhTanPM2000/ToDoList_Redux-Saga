import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

export interface RequestWithToken extends Request {
  token: string;
}

const requireLogging = async (
  req: RequestWithToken,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.token) {
      return next();
    }
    return res.status(StatusCodes.FORBIDDEN).send();
  } catch (error) {
    console.error(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
export default requireLogging;
