const Joi = require("joi");

exports.signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).+$"))
    .required()
    .messages({
      "string.pattern.base": `\"password\" must contain at least 1 uppercase letter, 1 number and 1 special character`,
    }),
  name: Joi.string().required(),
});
