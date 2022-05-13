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
    },
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
