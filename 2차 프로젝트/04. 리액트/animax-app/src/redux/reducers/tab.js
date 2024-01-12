// redux/slide.js
import { createSlice, } from "@reduxjs/toolkit";

const initialStateValue = {
  
  tabIndex: 0,
};
export const tabSlice = createSlice({
  name: "tab",
  // 초기값
  initialState: { value: initialStateValue },
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTab } = tabSlice.actions;

export default tabSlice.reducer;
