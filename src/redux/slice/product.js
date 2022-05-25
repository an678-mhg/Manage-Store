import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addProductApi,
  deleteProductApi,
  editProductApi,
  getAllProductApi,
} from "../../api/product";

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
    return {
      products: res.data,
      total: res.headers["x-total-count"],
    };
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    const res = await addProductApi(product);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    await deleteProductApi(id);
    return id;
  }
);

export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ id, newProduct }) => {
    await editProductApi(id, newProduct);
    return { ...newProduct, id };
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
      state.loading = false;
      state.products = action.payload.products;
      state.totalProducts = Number(action.payload.total);
    });
    builer.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builer.addCase(addProduct.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      if (state.products.length < 5) {
        state.products = [...state.products, action.payload];
      }
      state.totalProducts = state.totalProducts + 1;
      toast.success("Thêm sản phẩm thành công!");
    });
    builer.addCase(addProduct.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.success("Thêm sản phẩm thất bại!");
    });
    builer.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.totalProducts = state.totalProducts - 1;
      state.loading = false;
      toast.success("Xóa sản phẩm thành công!");
    });
    builer.addCase(deleteProduct.rejected, (state) => {
      state.error = true;
      state.loading = false;
      toast.error("Xóa sản phẩm thất bại!");
    });
    builer.addCase(editProduct.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(editProduct.fulfilled, (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      state.loading = false;
      toast.success("Sửa sản phẩm thành công!");
    });
    builer.addCase(editProduct.rejected, (state) => {
      state.loading = false;
      state.error = true;
      toast.error("Sửa sản phẩm thất bại!");
    });
  },
});

export default productSlice.reducer;
