import mongoose from "mongoose";

export interface IUser {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  owningRoomIds?: mongoose.Types.ObjectId[];
  roomIds?: mongoose.Types.ObjectId[];
  taskIds?: mongoose.Types.ObjectId[];
}

export const schemaUser = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  owningRoomIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
  roomIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  taskIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

export const Users = mongoose.model<IUser>("Users", schemaUser);
