import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

export const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
