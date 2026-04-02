const authService = require("../services/auth.service");
const asyncHandler = require("../utils/asyncHandler.utils");

// feat(auth): signup
exports.signup = asyncHandler(async (req, res, next) => {
  try {
    const user = await authService.createUser(req.body);
    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    next(error);
  }
});

// feat(auth): signin
exports.signin = asyncHandler(async (req, res, next) => {
  try {
    const result = await authService.signin(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});
