import { asyncHandler } from '../utils/asyncHandler.js';
import { getProductById, searchProducts } from '../services/product.service.js';

export const handleProductSearch = asyncHandler(async (req, res) => {
  const result = await searchProducts(req.query);

  res.status(200).json({
    success: true,
    data: result,
  });
});

export const handleProductById = asyncHandler(async (req, res) => {
  const result = await getProductById(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});
