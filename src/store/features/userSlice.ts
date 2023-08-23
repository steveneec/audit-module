import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  isAuthenticated: false,
  role: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.role = action.payload.role;
    },
  },
});

export const { setIsAuthenticated, setUser } = userSlice.actions;
export const selectUser = (state: any) => state.user;
export default userSlice.reducer;
