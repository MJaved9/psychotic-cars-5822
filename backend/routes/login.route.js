const { Router } = require("express");
const { UserModel } = require("../models/signup.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  let user = await UserModel.findOne({ email });
  console.log(user);
  const hash = user.password;

  bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      res.send({ msg: "plz login again " });
    }
    if (result === true) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
      res.send({ msg: "login successfull", token: token });
    } else {
      res.send({ msg: "plz login again " });
    }
  });
});

module.exports = { loginRouter };
