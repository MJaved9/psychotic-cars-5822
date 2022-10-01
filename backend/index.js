const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const cors = require("cors");
const { signupRouter } = require("./routes/signup.route");
const { connection } = require("./configs/db");
const { loginRouter } = require("./routes/login.route");
const { TaskRouter } = require("./routes/tasks.route");
const { ProjectRouter } = require("./routes/projects.route");
const { WorkGroupRouter } = require("./routes/workgroup.route");
const { eventRouter } = require("./routes/calendar.route");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/event", eventRouter);

const PORT = process.env.PORT || 7500;
app.use("/tasks", TaskRouter);
app.use("/projects", ProjectRouter);
app.use("/groups", WorkGroupRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
    console.log("connected to port 7500");
  } catch (error) {
    console.log(error);
  }
});
