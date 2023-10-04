import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './auth/auth-slise';

import { filterReduser } from './filter/sliceFilter';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { contactReduser } from './contacts/slice.contacts';

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuth = persistReducer(persistConfigAuth, authReduser);

export const store = configureStore({
  reducer: {
    auth: persistedAuth,
    contacts: contactReduser,
    filter: filterReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
