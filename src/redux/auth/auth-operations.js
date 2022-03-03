import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, logIn, logOut } from 'services/userRequests';
import http from 'services/axiosInstance';

const token = {
  set(token) {
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  unset() {
    http.defaults.headers.common['Authorization'] = ``;
  },
};

export const signUpOperation = createAsyncThunk(
  'auth/signUpUser',
  async userData => {
    try {
      const response = await signUp(userData);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log('error: ', error);
    }
  },
);

export const logInOperation = createAsyncThunk(
  'auth/logInUser',
  async userData => {
    try {
      const response = await logIn(userData);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log('error: ', error);
    }
  },
);

export const logOutOperation = createAsyncThunk('auth/logOutUser', async () => {
  try {
    const response = await logOut();
    token.unset();
    return response.data;
  } catch (error) {
    console.log('error: ', error);
  }
});
