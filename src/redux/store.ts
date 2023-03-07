import { apiSlice } from '@/services/authApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'

import storage from "redux-persist/lib/storage";
import adminRegisterSlice from './reducers/adminRegisterSlice';

const persistConfig = {
    key: "root",
    storage,
    blacklist: [apiSlice.reducerPath],
  };
  const reducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    adminRegister: adminRegisterSlice,
  });
  
const persistedReducer = persistReducer(persistConfig, reducers);
// config the store 
export const store= configureStore({
   reducer: persistedReducer,

   middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(apiSlice.middleware),
})

export const persistor = persistStore(store)