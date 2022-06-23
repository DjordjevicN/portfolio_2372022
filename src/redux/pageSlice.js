import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setNewPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNewPage } = pageSlice.actions;

export default pageSlice.reducer;
