const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedToId: { type: Object, required: true },
  deadline: { type: String, required: true },
  userId: { type: Object, required: true },
});

const TaskModel = new model("task", TaskSchema);

module.exports = { TaskModel };
