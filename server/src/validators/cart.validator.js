import Joi from 'joi';

export const addCartItemSchema = Joi.object({
  productId: Joi.string().trim().min(1).required(),
  quantity: Joi.number().integer().min(1).default(1),
  variant: Joi.string().trim().optional(),
}).required();

export const updateCartItemSchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
}).required();

export const cartItemIdSchema = Joi.object({
  id: Joi.string().trim().min(1).required(),
}).required();

export default {
  addCartItemSchema,
  updateCartItemSchema,
  cartItemIdSchema,
};
