import express from 'express';
import {
  handleCapturePayPalOrder,
  handleCreatePayPalOrder,
} from '../controllers/paypal.controller.js';
import { validateRequest } from '../middleware/validate.middleware.js';
import {
  createPaypalOrderSchema,
} from '../validators/paypal.validator.js';

const router = express.Router();

router.post('/orders', validateRequest(createPaypalOrderSchema), handleCreatePayPalOrder);
router.post('/orders/:id/capture', handleCapturePayPalOrder);

export default router;
