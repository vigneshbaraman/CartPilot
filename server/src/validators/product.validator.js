import Joi from 'joi';

export const productSearchSchema = Joi.object({
  q: Joi.string().trim().min(1).max(200).optional(),
  category: Joi.string().trim().max(100).optional(),
  minPrice: Joi.number().min(0).optional(),
  maxPrice: Joi.number().min(0).optional(),
}).required();

export const productIdSchema = Joi.object({
  id: Joi.string().trim().min(1).required(),
}).required();

export default {
  productSearchSchema,
  productIdSchema,
};
