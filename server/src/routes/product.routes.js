import express from 'express';
import {
  handleProductById,
  handleProductSearch,
} from '../controllers/product.controller.js';
import { validateRequest } from '../middleware/validate.middleware.js';
import {
  productIdSchema,
  productSearchSchema,
} from '../validators/product.validator.js';

const router = express.Router();

router.get('/search', validateRequest(productSearchSchema, 'query'), handleProductSearch);
router.get('/:id', validateRequest(productIdSchema, 'params'), handleProductById);

export default router;
