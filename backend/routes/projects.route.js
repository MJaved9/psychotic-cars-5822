const { Router } = require("express");
const { ProjectModel } = require("../models/projects.model");

const ProjectRouter = Router();

ProjectRouter.get("/getProjects", async (req, res) => {
  try {
    const userId = req.user_data._id;
    const project = await ProjectModel.find({ userId });
    tasks.save();
    return res.status(201).send({ type: "success", project: project });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProjectRouter.post("/create", async (req, res) => {
  try {
    const userId = req.user_data._id;
    const new_project = await new ProjectModel(...req.body, userId);
    new_project.save();
    return res
      .status(201)
      .send({ type: "success", message: "Project is created" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProjectRouter.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProject = ProjectModel.finfByIdAndUpdate(id, req.body);
    updatedProject.save();
    return res
      .status(201)
      .send({ type: "success", message: "Project is updated" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

ProjectRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const remaiProjects = ProjectModel.finfByIdAndUpdate(id, { delete: true });
    remaiProjects.save();
    return res
      .status(201)
      .send({ type: "success", message: "Project is deleted" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

module.exports = { ProjectRouter };
