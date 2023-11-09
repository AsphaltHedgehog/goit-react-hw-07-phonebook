import { combineReducers, configureStore } from "@reduxjs/toolkit";

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

import { filterReducer } from "./filterSlice"; 
import { contactsReducer } from "./contactsSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

const persistedContactsReducer = persistReducer(persistConfig, combineReducers({contacts: contactsReducer, filter: filterReducer}))


export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware (getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
  devTools: process.env.NODE_ENV !== 'production',

})

export const persistor = persistStore(store)


