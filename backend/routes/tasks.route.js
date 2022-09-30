const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const { TaskModel } = require("../models/tasks.model");

const TaskRouter = Router();

TaskRouter.get("/getTasks", authentication, async (req, res) => {
  try {
    const { userId } = req.body;
    const tasks = await TaskModel.find({ userId });
    res.status(201).send({ type: "success", tasks: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

TaskRouter.post("/create", authentication, async (req, res) => {
  try {
    const { userId } = req.body;
    const new_task = new TaskModel({ ...req.body, userId });
    await new_task.save();
    res.status(201).send({ type: "success", message: "Task is created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

TaskRouter.patch("/edit/:id", authentication, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const updatedTask = await TaskModel.findOneAndUpdate(
      { _id: id, userId },
      req.body
    );
    if (updatedTask) {
      res.status(201).send({ type: "success", message: "Task is updated" });
    } else {
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  } catch (error) {
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

TaskRouter.delete("/delete/:id", authentication, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const deleted = await TaskModel.findOneAndDelete({ _id: id, userId });
    if (deleted) {
      res.status(201).send({ type: "success", message: "Task is deleted" });
    } else {
      res.status(500).send({ type: "error", message: "An error occured" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ type: "error", message: "An error occured" });
  }
});

module.exports = { TaskRouter };
