import axios from ".";

export const getAllProductApi = (limit, page) => {
  return axios.get(`/products?_limit=${limit}&_page=${page}`);
};
