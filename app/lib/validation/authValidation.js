import Joi from 'joi';

// Admin register and login validation
export const adminValidation = (data) => {
  
    const schema = Joi.object({
    username: Joi.string()
                 .min(2)
                 .required(),
    password: Joi.string()
                 .min(8)
                 .required(),
  });

  return schema.validate(data);
};