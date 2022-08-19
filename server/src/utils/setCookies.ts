import { Response } from "express";

export const setCookie = (
  key: string,
  value: string,
  maxAgeMilliseconds: number,
  res: Response
) => {
  res.cookie(key, value, {
    path: "/",
    maxAge: maxAgeMilliseconds,
    sameSite: "none",
    httpOnly: true,
    secure: true,
  });
};
