const router = require('express').Router();
const contactController = require("../Controllers/mailControllers")

console.log("handling routes...")
router.route("/send_email").post(contactController.sendMailController)

module.exports = router;