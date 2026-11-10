import Joi from 'joi';

export const aiRequestSchema = Joi.object({
  message: Joi.string().trim().min(1).max(2000).required(),
  context: Joi.object().optional(),
}).required();

export default aiRequestSchema;
