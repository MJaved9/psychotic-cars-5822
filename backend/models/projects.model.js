const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  project_owner: { type: String },
  description: { type: String, required: true },
});

const ProjectModel = new model("project", ProjectSchema);

module.exports = { ProjectModel };
