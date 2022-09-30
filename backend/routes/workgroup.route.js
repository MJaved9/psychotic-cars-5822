const { Router } = require("express");
const { WorkGroupModel } = require("../models/projects.model");

const WorkGroupRouter = Router();

WorkGroupRouter.get("/getGroups", async (req, res) => {
  try {
    const userId = req.user_data._id;
    const groups = await WorkGroupModel.find({ userId });
    tasks.save();
    return res.status(201).send({ type: "success", groups: groups });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

WorkGroupRouter.post("/create", async (req, res) => {
  try {
    const userId = req.user_data._id;
    const new_group = await new WorkGroupModel({ ...req.body, userId });
    new_group.save();
    return res
      .status(201)
      .send({ type: "success", message: "Group is created" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

WorkGroupRouter.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedGroup = WorkGroupModel.finfByIdAndUpdate(id, req.body);
    updatedGroup.save();
    return res
      .status(201)
      .send({ type: "success", message: "Group is updated" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

WorkGroupRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const remaiGroups = WorkGroupModel.finfByIdAndUpdate(id, { delete: true });
    remaiGroups.save();
    return res
      .status(201)
      .send({ type: "success", message: "Group is deleted" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

module.exports = { WorkGroupRouter };
