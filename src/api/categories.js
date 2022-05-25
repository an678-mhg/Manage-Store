import axios from ".";

export const getAllCategoriesApi = () => {
  return axios.get(`/categories`);
};

export const getAllCategoriesApiPage = (page, limit) => {
  return axios.get(`/categories?_page=${page}&_limit=${limit}`);
};

export const addCategoryApi = (category) => {
  return axios.post("/categories", category);
};

export const deleteCategoryApi = (id) => {
  return axios.delete(`/categories/${id}`);
};

export const editCategoryApi = (id, newCategory) => {
  return axios.put(`/categories/${id}`, newCategory);
};
