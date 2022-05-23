import axios from ".";

export const loginApi = (user) => {
  return axios.post("/login", user);
};

export const authenticationApi = (idUser) => {
  return axios.get(`/600/users/${idUser}`);
};
