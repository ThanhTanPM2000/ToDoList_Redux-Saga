import { Request } from "express";
import * as z from "zod";

export const registerValidator = (req: Request) => {
  const schema = z.object({
    body: z.object({
      username: z.string(),
      email: z.string(),
      password: z.string(),
    }),
  });
  return schema.parse(req);
};

export const loginValidator = (req: Request) => {
  const schema = z.object({
    body: z.object({
      email: z.string(),
      password: z.string(),
    }),
  });
  return schema.parse(req);
};
