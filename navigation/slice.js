import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    selectedTab: "",
  },
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = navigationSlice.actions

export const selectNavigation = (state) => state.navigationSlice

export default navigationSlice.reducer