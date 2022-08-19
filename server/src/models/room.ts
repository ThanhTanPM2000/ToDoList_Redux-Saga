import mongoose from "mongoose";

export interface IRoom {
  _id: mongoose.Types.ObjectId;
  name: string;
  createdDate: Date;
  taskIds?: mongoose.Types.ObjectId[];
  memberIds?: mongoose.Types.ObjectId[];
}

export const schemaRoom = new mongoose.Schema<IRoom>({
  name: { type: String, required: true },
  createdDate: { type: Date, required: true },
  taskIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  memberIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export const Rooms = mongoose.model<IRoom>("Rooms", schemaRoom);
