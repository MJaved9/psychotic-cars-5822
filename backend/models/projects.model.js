const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  projectOwner: { type: Object, required: true },
  description: { type: String, required: true },
  userId: { type: Object, required: true },
});

const ProjectModel = new model("project", ProjectSchema);

module.exports = { ProjectModel };
