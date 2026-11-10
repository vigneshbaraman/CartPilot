export const createOrder = async (payload = {}) => ({
  message: 'PayPal order creation placeholder',
  payload,
  order: null,
  configured: false,
});

export const captureOrder = async (orderId, payload = {}) => ({
  message: 'PayPal capture placeholder',
  orderId,
  payload,
  captured: false,
});

export default {
  createOrder,
  captureOrder,
};
