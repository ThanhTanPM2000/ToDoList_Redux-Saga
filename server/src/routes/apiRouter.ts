import { Router } from "express";

import requireLogging from "../middleware/requireLogging";
import { login, register, logout } from "../controllers/auth";

const apiRouter = (): Router => {
  const router = Router();

  router.post("/register", register);
  router.post("/login", login);
  router.post("/logout", logout);

  router.get("/rooms", requireLogging);

  return router;
};

export default apiRouter;
