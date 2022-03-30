import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('phonebook/changeFilter');
const switchTheme = createAction('phonebook/switchTheme');

export { changeFilter, switchTheme };
