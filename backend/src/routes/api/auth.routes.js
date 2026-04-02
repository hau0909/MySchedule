const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth.controller");
const { signupSchema } = require("../../utils/authValidator.utils");
const validate = require("../../middleware/validate.middleware");

// feat(auth): signup
router.post("/signup", validate(signupSchema), authController.signup);
// feat(auth): signin
router.post("/signin", authController.signin);

module.exports = router;
