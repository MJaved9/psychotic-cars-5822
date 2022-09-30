const { Schema, model } = require("mongoose");

const WorkGroupSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const WorkGroupModel = new model("workgroup", WorkGroupSchema);

module.exports = { WorkGroupModel };
