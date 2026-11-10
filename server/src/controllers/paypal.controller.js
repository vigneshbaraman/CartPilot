import { asyncHandler } from '../utils/asyncHandler.js';
import { captureOrder, createOrder } from '../services/paypal.service.js';

export const handleCreatePayPalOrder = asyncHandler(async (req, res) => {
  const result = await createOrder(req.body);

  res.status(200).json({
    success: true,
    data: result,
  });
});

export const handleCapturePayPalOrder = asyncHandler(async (req, res) => {
  const result = await captureOrder(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: result,
  });
});
