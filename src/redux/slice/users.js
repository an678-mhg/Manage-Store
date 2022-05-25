import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserApi,
  deleteUserApi,
  editUserApi,
  getAllUsersApi,
} from "../../api/users";

const initialState = {
  users: [],
  loading: false,
  totalUsers: 0,
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async ({ page, limit }) => {
    const res = await getAllUsersApi(page, limit);
    return {
      users: res.data,
      totalUsers: res.headers["x-total-count"],
    };
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await deleteUserApi(id);
  return id;
});

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ id, newUser }) => {
    await editUserApi(id, newUser);
    return {
      ...newUser,
      id,
    };
  }
);

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const res = await addUserApi(user);
  return res.data.user;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builer) => {
    builer.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builer.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.totalUsers = Number(action.payload.totalUsers);
    });
    builer.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((p) => p.id !== action.payload);
      state.totalUsers = state.totalUsers - 1;
      toast.success("Xóa nhân viên thành viên thành công!");
    });
    builer.addCase(deleteUser.rejected, () => {
      toast.error("Xóa nhân viên thành viên thất bại!");
    });
    builer.addCase(editUser.fulfilled, (state, action) => {
      state.users = state.users.map((p) => {
        if (p.id === action.payload.id) {
          return action.payload;
        }
        return p;
      });
      toast.success("Sửa nhân viên thành viên thành công!");
    });
    builer.addCase(editUser.rejected, () => {
      toast.error("Sửa nhân viên thành viên thất bại!");
    });
    builer.addCase(addUser.fulfilled, (state, action) => {
      if (state.users.length < 5) {
        state.users = [...state.users, action.payload];
      }
      state.totalUsers = state.totalUsers + 1;
      toast.success("Thêm nhân viên thành công!");
    });
    builer.addCase(addUser.rejected, () => {
      toast.error("Thêm nhân viên thất bại!");
    });
  },
});

export default usersSlice.reducer;
