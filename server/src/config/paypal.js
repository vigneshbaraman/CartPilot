import { env } from './env.js';

export const paypalConfig = {
  clientId: env.PAYPAL_CLIENT_ID,
  clientSecret: env.PAYPAL_CLIENT_SECRET,
  baseUrl: env.PAYPAL_BASE_URL || 'https://api-m.sandbox.paypal.com',
  isConfigured: Boolean(env.PAYPAL_CLIENT_ID && env.PAYPAL_CLIENT_SECRET),
};

export default paypalConfig;
