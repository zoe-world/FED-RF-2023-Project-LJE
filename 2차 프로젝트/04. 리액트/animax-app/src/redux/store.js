import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/item';
import { useDispatch, useSelector } from 'react-redux';

const reducers = combineReducers({
  item: itemReducer,
});

export const store = configureStore({
  reducer: reducers,
});
