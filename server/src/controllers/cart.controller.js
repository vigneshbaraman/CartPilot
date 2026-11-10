import { asyncHandler } from '../utils/asyncHandler.js';
import {
  addCartItem,
  getCartSummary,
  removeCartItem,
  updateCartItem,
} from '../services/cart.service.js';

export const handleGetCart = asyncHandler(async (req, res) => {
  const result = await getCartSummary(req.user?.id ?? 'guest');

  res.status(200).json({
    success: true,
    data: result,
  });
});

export const handleAddCartItem = asyncHandler(async (req, res) => {
  const result = await addCartItem({
    userId: req.user?.id ?? 'guest',
    ...req.body,
  });

  res.status(201).json({
    success: true,
    data: result,
  });
});

export const handleUpdateCartItem = asyncHandler(async (req, res) => {
  const result = await updateCartItem(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: result,
  });
});

export const handleRemoveCartItem = asyncHandler(async (req, res) => {
  const result = await removeCartItem(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});
