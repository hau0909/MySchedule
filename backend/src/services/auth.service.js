const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError.utils");

const JWT_SECRET = process.env.JWT_SECRET;

// feat(auth): signup
exports.createUser = async ({ email, password, name }) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) throw new AppError("Email alredy exists", 409);

  const hasedPassword = await bcrypt.hash(password, 10);

  if (hasedPassword) {
    const user = await User.create({
      email: email,
      password: hasedPassword,
      name: name,
    });

    if (user) return user;
  }
};

// feat(auth): signIn
exports.signin = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return { user, token };
};
