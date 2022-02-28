import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

export const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export const toggleTheme = createReducer('light', {
  [actions.switchTheme]: (_, { payload }) => payload,
});
