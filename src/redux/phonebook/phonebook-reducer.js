import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

export const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export const themeMode = createReducer(['light'], {
  [actions.switchTheme]: (state, { payload }) => {
    return [`${payload}`];
  },
});
