import http from "./http";

const getProducts = (query) => {
  const { categoryLevel, categoryParams, brandParams, colorParams, priceParams, sizeParams, discountParams, search, sortingParams } = query;

  let url = "products";

  if (categoryLevel) url += `?level=${categoryLevel}`;
  if (categoryParams) url += `&category=${categoryParams}`;
  if (brandParams) url += `&brand=${brandParams}`;
  if (colorParams) url += `&color=${colorParams}`;
  if (priceParams) url += `&price=${priceParams}`;
  if (sizeParams) url += `&size=${sizeParams}`;
  if (discountParams) url += `&discount=${discountParams}`;
  if (sortingParams) url += `&sort=${sortingParams}`;
  if (search) url += `?search=${search}`;

  return http.get(url);
}
const createProduct = (data) => {
  return http.post('products', data);
}
const productDetails = (id) => {
  return http.get(`products/${id}`);
}
const deleteProduct = (id) => {
  return http.delete(`products/${id}`);
}
const updateProduct = (data, id) => {
  return http.put(`products/${id}`, data);
}

const productService = {
  getProducts,
  createProduct,
  productDetails,
  deleteProduct,
  updateProduct
};

export default productService;