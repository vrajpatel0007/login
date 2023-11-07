const express = require("express");
const registrationvalidation = require("../../validations/registration.validtion")
const registrationcontroller = require("../../controllers/registration.controller")
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate")
const router = express.Router();

router.post(
  "/create-registration",
  auth(),
  validate(registrationvalidation.createregistration),
  registrationcontroller.createregistration
)

/** Get registration list */
router.get(
  "/list",
  auth(),
  validate(registrationvalidation.getregistrationList),
  registrationcontroller.getregistrationList
);

/** Delete registration */
router.delete(
  "/delete-registration/:registrationId",
  auth(),
  validate(registrationvalidation.updateDetails),
  registrationcontroller.deleteregistration
);
router.put(
  "/update-details/:registrationId",
 
  validate(registrationvalidation.updateDetails),
  registrationcontroller.updateDetails
);


module.exports = router;