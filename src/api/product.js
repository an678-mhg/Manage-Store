import axios from ".";

export const getAllProductApi = (limit, page) => {
  return axios.get(`/products?_limit=${limit}&_page=${page}`);
};

export const addProductApi = (product) => {
  return axios.post("/products", product);
};

export const deleteProductApi = (id) => {
  return axios.delete(`/products/${id}`);
};

export const editProductApi = (id, newProduct) => {
  return axios.put(`/products/${id}`, newProduct);
};
 