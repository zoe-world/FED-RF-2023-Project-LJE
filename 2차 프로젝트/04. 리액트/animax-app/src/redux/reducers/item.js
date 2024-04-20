// redux/slide.js
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  itemInfo: {},
};
export const itemSlice = createSlice({
  name: "item",
  // 초기값
  initialState: { value: initialStateValue },
  reducers: {
    itemOver: (state, action) => {
      state.value = action.payload;
      console.log(itemSlice.actions);
    },
    itemOut: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { itemOver, itemOut } = itemSlice.actions;

export default itemSlice.reducer;
