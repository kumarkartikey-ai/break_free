const express = require("express");
const router = express.Router();

// batches controlers
const { getUser, getUsers } = require("../../../controler/v1/users/users");
const { PostRegister } = require("../../../controler/v1/users/register")
const { postLogin } = require("../../../controler/v1/users/login")

// return a user details
router.get("/:userId(\\d+)", getUser);

// return users list
router.get("/", getUsers);

// users register
router.post("/register", PostRegister);

// users login
router.post("/login", postLogin);

module.exports = router;