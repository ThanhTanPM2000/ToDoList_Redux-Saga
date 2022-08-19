import mongoose from "mongoose";

export interface ITask {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  roomId?: mongoose.Types.ObjectId;
  creatorId?: mongoose.Types.ObjectId;
}

const schemaTask = new mongoose.Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Tasks = mongoose.model<ITask>("Tasks", schemaTask);

export default Tasks;
