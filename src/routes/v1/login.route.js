const express = require("express");
const loginvalidation = require("../../validations/login.validtion")
const logincontroller = require("../../controllers/login.controller")
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate")
const router = express.Router();

router.post(
  "/login",
  auth(),
  validate(loginvalidation.login),
  logincontroller.login
)

/** Get login list */
router.get(
  "/list",
  auth(),
  validate(loginvalidation.getuser),
  logincontroller.getuser
);

/** Delete login */
router.delete(
  "/delete-login/:loginId",
  auth(),
  validate(loginvalidation.updateDetails),
  logincontroller.deleteuser
);
router.put(
  "/update-details/:loginId",
  auth(),
  validate(loginvalidation.updateDetails),
  logincontroller.updateDetails
);


module.exports = router;