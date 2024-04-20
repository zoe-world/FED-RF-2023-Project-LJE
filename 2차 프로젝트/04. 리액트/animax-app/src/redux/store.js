import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemReducer, { itemSlice } from "./reducers/item";
import { useDispatch, useSelector } from "react-redux";

// const reducers = combineReducers({
//   item: itemReducer,
// });

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
  },
});
