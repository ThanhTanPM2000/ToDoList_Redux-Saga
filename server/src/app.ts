import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import confEnv from "./configs/env";
import confStore from "./configs/store";
import apiRouter from "./routes/apiRouter";
import sessionManager from "./middleware/sessionManager";

const app = express();
app.use(
  cors({
    // Required for using cross domain api calls
    credentials: true,
    origin: confEnv.CLIENT_URL,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
confStore();
//middleware that check token
app.use(sessionManager);
app.use("/api", apiRouter());

app.listen(confEnv.SERVER_PORT, (): void => {
  console.log(
    `Example app listening at ${confEnv.SERVER_URL}:${confEnv.SERVER_PORT}`
  );
});
