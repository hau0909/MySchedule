const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth.controller");
const { signupSchema } = require("../../utils/authValidator.utils");
const validate = require("../../middleware/validate.middleware");
const authMiddleware = require("../../middleware/auth.middleware");

// feat(auth): signup
router.post("/signup", validate(signupSchema), authController.signup);

// feat(auth): signin
router.post("/signin", authController.signin);

// feat(auth): auto login
router.get("/me", authMiddleware, (req, res) => {
  res.json({
    user: req.user,
  });
});

// feat(auth): logout
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  res.json({ message: "Logged out" });
});

module.exports = router;
