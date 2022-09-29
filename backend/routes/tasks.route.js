const { Router } = require("express");
const { TaskModel } = require("../models/tasks.model");

const TaskRouter = Router();

TaskRouter.get("/getTasks", async (req, res) => {
  try {
    const userId = req.user_data._id;
    const tasks = await TaskModel.find({ userId });
    tasks.save();
    return res.status(201).send({ type: "success", tasks: tasks });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

TaskRouter.post("/create", async (req, res) => {
  try {
    const userId = req.user_data._id;
    const new_task = await new TaskModel(...req.body, userId);
    new_task.save();
    return res
      .status(201)
      .send({ type: "success", message: "Task is created" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

TaskRouter.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = TaskModel.finfByIdAndUpdate(id, req.body);
    updatedTask.save();
    return res
      .status(201)
      .send({ type: "success", message: "Task is updated" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

TaskRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const remaiTasks = TaskModel.finfByIdAndUpdate(id, { delete: true });
    remaiTasks.save();
    return res
      .status(201)
      .send({ type: "success", message: "Task is deleted" });
  } catch (error) {
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
});

module.exports = { TaskRouter };
