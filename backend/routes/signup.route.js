const { Router } = require("express");
const { UserModel } = require("../models/signup.model");

const bcrypt = require("bcryptjs");

const signupRouter = Router();

signupRouter.post("/", (req, res) => {
  const { name, email, password, age } = req.body;

  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      res.send({ msg: "something went wrong, please try again" });
    }

    try {
      const user = new UserModel({ name, email, password: hash, age });
      await user.save();
      res.send({ msg: "signup successfull" });
    } catch (error) {
      res.send({ msg: "something went wrong, please try again" });
    }
  });
});

module.exports = { signupRouter };
