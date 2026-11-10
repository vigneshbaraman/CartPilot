import express from 'express';
import {
  handleAddCartItem,
  handleGetCart,
  handleRemoveCartItem,
  handleUpdateCartItem,
} from '../controllers/cart.controller.js';
import { validateRequest } from '../middleware/validate.middleware.js';
import {
  addCartItemSchema,
  updateCartItemSchema,
} from '../validators/cart.validator.js';

const router = express.Router();

router.get('/', handleGetCart);
router.post('/items', validateRequest(addCartItemSchema), handleAddCartItem);
router.put('/items/:id', validateRequest(updateCartItemSchema), handleUpdateCartItem);
router.delete('/items/:id', handleRemoveCartItem);

export default router;
