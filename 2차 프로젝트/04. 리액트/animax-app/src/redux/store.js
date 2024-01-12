import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './reducers/item'
import tabReducer from './reducers/tab'

export default configureStore({
    reducer:{
        item: itemReducer,
        tab: tabReducer,
    }
})