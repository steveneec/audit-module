import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAgent: "mobile",
  isMenuOpen: false,
  theme: {
    accentColor: "#1e40af",
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setUserAgent: (state, action) => {
      state.userAgent = action.payload;
    },
    setMenuIsOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setUserAgent, setMenuIsOpen } = settingsSlice.actions;
export const selectIsMenuOpen = (state: any) => state.settings.isMenuOpen;
export const selectUserAgent = (state: any) => state.settings.userAgent;
export const selectTheme = (state: any) => state.settings.theme;
export default settingsSlice.reducer;
