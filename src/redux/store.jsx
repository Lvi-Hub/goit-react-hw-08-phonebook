import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filtersSlice';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};
const persistedReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
