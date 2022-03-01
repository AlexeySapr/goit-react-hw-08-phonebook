import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from 'services/userRequests';

export const signUpOperation = createAsyncThunk(
  'auth/signUpUser',
  async userData => {
    try {
      const response = await signUp(userData);
      console.log('response: ', response);
      return response.data;
    } catch (error) {}
  },
);
