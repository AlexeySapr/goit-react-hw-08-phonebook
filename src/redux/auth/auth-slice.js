import { createSlice } from '@reduxjs/toolkit';
import { operations } from 'redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.signUpOperation.fulfilled]: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggedIn: true,
    }),
  },
});

export default authSlice.reducer;

//  {
//    state.user = action.payload.user;
//    state.token = action.payload.token;
//  }
