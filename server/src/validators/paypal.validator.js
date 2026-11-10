import Joi from 'joi';

export const createPaypalOrderSchema = Joi.object({
  amount: Joi.number().positive().required(),
  currency: Joi.string().trim().length(3).default('USD'),
  referenceId: Joi.string().trim().optional(),
}).required();

export const capturePaypalOrderSchema = Joi.object({
  captureId: Joi.string().trim().optional(),
}).required();

export default {
  createPaypalOrderSchema,
  capturePaypalOrderSchema,
};
