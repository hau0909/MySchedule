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

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: false, //dev
      sameSite: "lax",
    });

    console.log("login success");

    res.status(200).json({
      message: "Login success",
      user: result.user, // nếu có
    });
  } catch (error) {
    next(error);
  }
});
