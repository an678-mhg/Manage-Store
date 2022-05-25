import axios from ".";

export const getAllUsersApi = (page, limit) => {
  return axios.get(`/users?_page=${page}&_limit=${limit}`);
};

export const deleteUserApi = (id) => {
  return axios.delete(`/users/${id}`);
};

export const editUserApi = (id, newUser) => {
  return axios.put(`/users/${id}`, newUser);
};

export const addUserApi = (user) => {
  return axios.post("/users", user);
};

export const getUserByEmail = (email) => {
  return axios.get(`/users?email=${email}`);
};
