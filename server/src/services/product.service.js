export const searchProducts = async (filters = {}) => ({
  message: 'Product search placeholder',
  filters,
  results: [],
});

export const getProductById = async (productId) => ({
  message: 'Product lookup placeholder',
  productId,
  product: null,
});

export default {
  searchProducts,
  getProductById,
};
