const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const { ProjectModel } = require("../models/projects.model");

const ProjectRouter = Router();

ProjectRouter.get("/getProjects", authentication, async (req, res) => {
  try {
    const { userId } = req.body;
    const project = await ProjectModel.find({ userId });
    res.status(201).send({ type: "success", project: project });
  } catch (error) {
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProjectRouter.post("/create", authentication, async (req, res) => {
  const { userId } = req.body;
  try {
    const new_project = new ProjectModel({ ...req.body, userId });
    await new_project.save();
    res.status(201).send({ type: "success", message: "Project is created" });
  } catch (error) {
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProjectRouter.patch("/edit/:id", authentication, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const updatedProject = await ProjectModel.findOneAndUpdate(
      { _id: id, userId },
      req.body
    );
    if (updatedProject) {
      res.status(201).send({ type: "success", message: "Project is updated" });
    } else {
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  } catch (error) {
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProjectRouter.delete("/delete/:id", authentication, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const deleted = await ProjectModel.findOneAndDelete({ _id: id, userId });
    if (deleted) {
      res.status(201).send({ type: "success", message: "Project is deleted" });
    } else {
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  } catch (error) {
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

module.exports = { ProjectRouter };
