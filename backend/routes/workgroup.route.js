const { Router } = require("express");
const { WorkGroupModel } = require("../models/workgroups.model");
const { authentication } = require("../middlewares/authentication");
const WorkGroupRouter = Router();

WorkGroupRouter.get("/getGroups", authentication, async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId);
    const groups = await WorkGroupModel.find({ userId });
    res.status(201).send({ type: "success", groups: groups });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

WorkGroupRouter.post("/create", authentication, async (req, res) => {
  try {
    const { userId } = req.body;
    const new_group = new WorkGroupModel({ ...req.body, userId });
    await new_group.save();
    res.status(201).send({ type: "success", message: "Group is created" });
  } catch (error) {
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

WorkGroupRouter.patch("/edit/:id", authentication, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const updated = await WorkGroupModel.findOneAndUpdate(
      { _id: id, userId },
      req.body
    );
    if (updated) {
      res.status(201).send({ type: "success", message: "Group is updated" });
    } else {
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  } catch (error) {
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

WorkGroupRouter.delete("/delete/:id", authentication, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const deleted = await WorkGroupModel.findOneAndDelete({
      _id: id,
      userId,
    });
    if (deleted) {
      res.status(201).send({ type: "success", message: "Group is deleted" });
    } else {
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  } catch (error) {
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

module.exports = { WorkGroupRouter };
