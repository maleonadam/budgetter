const express = require("express");
const router = express.Router();

const { addNewUser } = require("../controllers/allusers");

router.route("/register").post(addNewUser);

module.exports = router;
