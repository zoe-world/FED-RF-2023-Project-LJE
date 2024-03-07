// redux/slide.js
import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  email: '',
  password: '',
  username: '',
};
export const userSlice = createSlice({
  name: 'user',
  // 초기값
  initialState: { value: initialState },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.username = action.payload.username;
    },
    initUser: (state) => {
      state.email = initialState.email;
      state.password = initialState.password;
      state.username = initialState.username;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser, initUser } = userSlice.actions;

export default userSlice.reducer;
