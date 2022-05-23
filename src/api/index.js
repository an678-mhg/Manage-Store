import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://shopjsonserver-production.up.railway.app/",
});

export default axiosClient;
