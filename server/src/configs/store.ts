import mongoose from "mongoose";
import confEnv from "./env";

export default function () {
  mongoose
    .connect(confEnv.MONGODB_URL)
    .then(() => console.log(`Connected to ${confEnv.MONGODB_URL}...`));
}
