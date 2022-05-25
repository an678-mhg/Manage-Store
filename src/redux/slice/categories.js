import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addCategoryApi,
  deleteCategoryApi,
  editCategoryApi,
  getAllCategoriesApiPage,
} from "../../api/categories";

const initialState = {
  loading: false,
  categories: [],
  totalCategories: 0,
};

export const getAllCategories = createAsyncThunk(
  "categories/getAll",
  async ({ page, limit }) => {
    const res = await getAllCategoriesApiPage(page, limit);
    return {
      categories: res.data,
      totalCategories: res.headers["x-total-count"],
    };
  }
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category) => {
    const res = await addCategoryApi(category);
    return res.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id) => {
    await deleteCategoryApi(id);
    return id;
  }
);

export const editCategory = createAsyncThunk(
  "categories/editCategory",
  async ({ id, newCategory }) => {
    await editCategoryApi(id, newCategory);
    return { ...newCategory, id: id };
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer.addCase(getAllCategories.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.totalCategories = Number(action.payload.totalCategories);
      state.loading = false;
    });
    builer.addCase(addCategory.fulfilled, (state, action) => {
      if (state.categories.length < 5) {
        state.categories = [...state.categories, action.payload];
      }
      state.totalCategories = state.totalCategories + 1;
      toast.success("Thêm danh mục thành công!");
    });
    builer.addCase(addCategory.rejected, () => {
      toast.error("Thêm danh mục thất bại!");
    });
    builer.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (p) => p.id !== action.payload
      );
      state.totalCategories = state.totalCategories - 1;
      toast.success("Xóa danh mục thành công");
    });
    builer.addCase(deleteCategory.rejected, () => {
      toast.error("Xóa danh mục thất bại!");
    });
    builer.addCase(editCategory.fulfilled, (state, action) => {
      state.categories = state.categories.map((p) => {
        if (p.id === action.payload.id) {
          return action.payload;
        }
        return p;
      });
      toast.success("Sửa danh mục thành công!");
    });
    builer.addCase(editCategory.rejected, () => {
      toast.error("Sửa danh mục thất bại!");
    });
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
