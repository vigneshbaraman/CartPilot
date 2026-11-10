import { asyncHandler } from '../utils/asyncHandler.js';
import { createAiCompletion } from '../services/ai.service.js';

export const handleAiRequest = asyncHandler(async (req, res) => {
  const result = await createAiCompletion(req.body);

  res.status(200).json({
    success: true,
    data: result,
  });
});
