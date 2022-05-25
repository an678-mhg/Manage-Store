import axios from "axios";
import { urlCloudinary } from "./contans";

export const uploadImg = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "xhkmjqak");

  try {
    const res = await axios.post(urlCloudinary, formData);
    return res.data.url;
  } catch (error) {
    console.log(error);
  }
};
