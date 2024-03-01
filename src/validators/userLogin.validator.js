import Joi from '@hapi/joi';

export const userLoginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().min(2).required(),
    password: Joi.string().min(2).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
