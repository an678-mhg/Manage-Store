import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user";
import productSlice from "./slice/product";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
});
