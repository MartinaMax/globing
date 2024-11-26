import Joi from 'joi';

// Reference validation
export const referenceValidation = (data) => {
    
  const schema = Joi.object({
    title: Joi.string()
                 .max(255)
                 .required(),
    descr: Joi.string()
                 .max(500)
                 .required()
  });

  return schema.validate(data);
};