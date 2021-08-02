const Joi = require('joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    firstname: Joi.string()
      .min(2)
      .required(),
    lastname: Joi.string()
      .min(2)
      .required(),
    email: Joi.string()
      .min(8)
      .required()
      .email(),
    username: Joi.string()
      .min(2)
      .required()
      .max(35),
    password: Joi.string()
      .min(8)
      .required(),
    address: Joi.required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(8)
      .required()
      .email(),
    username: Joi.string()
      .min(2)
      .required()
      .max(35),
    password: Joi.string()
      .min(8)
      .required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
