const express = require("express");
const registrationRoute = require("./registration.route");
const loginRoute = require("./login.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/registration", registrationRoute);
router.use("/login", loginRoute);
router.use("/token", tokenRoute);
module.exports = router;