const AppError = require("../utils/AppError.utils");

module.exports = (schema) => (req, res, next) => {
  if (!schema) {
    return next(new Error("Schema is undefined"));
  }
  const { error } = schema.validate(req.body);

  if (error) {
    return next(new AppError(error.details[0].message, 400));
  }

  next();
};
