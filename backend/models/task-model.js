import mongoose from "mongoose"
const { model, Schema } = mongoose

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, min: 10, max: 1000 },
    status: { type: String, default: "active" },

    date: { type: Date, default: "" },
    checked: { type: Boolean, default: false },
    priority: { type: String, default: "low", enum: ["high", "medium", "low"] },

    user: { type: Schema.Types.ObjectId, ref: "User" },
    project: { type: Schema.Types.ObjectId, ref: "Project" },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  },
  { timestamps: true }
)

export default model("Task", taskSchema)
