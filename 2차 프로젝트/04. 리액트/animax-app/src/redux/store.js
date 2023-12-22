import { configureStore } from "@reduxjs/toolkit";
import { slideReducer } from "./reducers/item";

export const store =  configureStore({
    reducer:{
        items: itemSlice,
    }
})