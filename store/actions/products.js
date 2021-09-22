export const DELETE_PRODUCT = 'DELETE_PRODUXT';

export const deleteProduct = (productId) => {
  return { type: DELETE_PRODUCT, pid: productId };
};
