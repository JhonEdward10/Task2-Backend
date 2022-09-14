const express = require("express")

const usersRouter = express.Router();

const { createUserValidators } = require("../middlewares/validator.middlewares");

const { createUser, getAllUsers, updateUser, deleteUser } = require("../controllers/user.controller");

const { userExists } = require("../middlewares/user.middlewares");

usersRouter.post("/", createUserValidators, createUser);

usersRouter.get("/", getAllUsers);

usersRouter.patch("/:id", userExists, updateUser);

usersRouter.delete("/:id", userExists, deleteUser);

module.exports = { usersRouter };