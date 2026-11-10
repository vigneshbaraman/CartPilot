export const getCartSummary = async (userId = 'guest') => ({
  message: 'Cart placeholder',
  userId,
  items: [],
  total: 0,
});

export const addCartItem = async (item = {}) => ({
  message: 'Add cart item placeholder',
  item,
  added: false,
});

export const updateCartItem = async (itemId, updates = {}) => ({
  message: 'Update cart item placeholder',
  itemId,
  updates,
  updated: false,
});

export const removeCartItem = async (itemId) => ({
  message: 'Remove cart item placeholder',
  itemId,
  removed: false,
});

export default {
  getCartSummary,
  addCartItem,
  updateCartItem,
  removeCartItem,
};
