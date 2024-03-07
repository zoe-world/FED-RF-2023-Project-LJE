import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import itemReducer from './reducers/item';
import userReducer from './reducers/user';
import storage from 'redux-persist/lib/storage';
import { useDispatch, useSelector } from 'react-redux';

const reducers = combineReducers({
  item: itemReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
