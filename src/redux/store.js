import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user";
import productSlice from "./slice/product";
import categoriesSlice from "./slice/categories";
import usersSlice from "./slice/users";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    categories: categoriesSlice,
    users: usersSlice,
  },
});
