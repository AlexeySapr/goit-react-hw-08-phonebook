import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filter, themeMode } from './phonebook/phonebook-reducer';
import { contactsApi } from 'services/contactsAPI';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookPersistConfig = {
  key: 'themeMode',
  storage: storage,
  whitelist: ['themeMode'],
};

// const rootReducer = combineReducers({
//   filter,
//   theme: persistReducer(phonebookPersistConfig, toggleTheme),
//   [contactsApi.reducerPath]: contactsApi.reducer,
// });

const rootReducer = combineReducers({
  filter,
  themeMode,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

const persistedReducer = persistReducer(phonebookPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
