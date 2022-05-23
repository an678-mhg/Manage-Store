import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProductApi } from "../../api/product";

const initialState = {
  products: [],
  totalProducts: 0,
  loading: false,
  error: false,
};

export const getAllProducts = createAsyncThunk(
  "product/getAllProduct",
  async ({ limit, page }) => {
    const res = await getAllProductApi(limit, page);
    return res;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(getAllProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.products = action.payload.data;
      state.totalProducts = Number(action.payload.headers["x-total-count"]);
    });
    builer.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default productSlice.reducer;
