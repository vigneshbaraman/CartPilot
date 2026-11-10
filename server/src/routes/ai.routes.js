import express from 'express';
import { handleAiRequest } from '../controllers/ai.controller.js';
import { validateRequest } from '../middleware/validate.middleware.js';
import { aiRequestSchema } from '../validators/ai.validator.js';

const router = express.Router();

router.post('/chat', validateRequest(aiRequestSchema), handleAiRequest);

export default router;
