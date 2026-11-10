import express from 'express';
import aiRoutes from './ai.routes.js';
import cartRoutes from './cart.routes.js';
import paypalRoutes from './paypal.routes.js';
import productRoutes from './product.routes.js';

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'CartPilot API is healthy',
    timestamp: new Date().toISOString(),
  });
});

router.use('/ai', aiRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);
router.use('/paypal', paypalRoutes);

export default router;
