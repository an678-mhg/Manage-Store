import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.currentUser = null;
      localStorage.removeItem("token");
      localStorage.removeItem("idUser");
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { logOut, setUser } = userSlice.actions;

export default userSlice.reducer;
