const express = require("express");

require("dotenv").config();

const cors = require("cors");
const { signupRouter } = require("./routes/signup.route");
const { connection } = require("./configs/db");
const { loginRouter } = require("./routes/login.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/signup", signupRouter);
app.use("/login", loginRouter);

const PORT = process.env.PORT || 7500;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
    console.log("connected to port 7500");
  } catch (error) {
    console.log(error);
  }
});
