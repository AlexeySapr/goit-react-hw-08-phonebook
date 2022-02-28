import { configureStore } from '@reduxjs/toolkit';
import { filter, toggleTheme } from './phonebook/phonebook-reducer';
import { contactsApi } from 'services/contactsAPI';

export const store = configureStore({
  reducer: {
    filter,
    toggleTheme,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
