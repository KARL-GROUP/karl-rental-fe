import { apiSlice } from '@/services/authApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist'

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    blacklist: [apiSlice.reducerPath],
  };
  const reducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
  });
  
const persistedReducer = persistReducer(persistConfig, reducers);
// config the store 
export const store= configureStore({
   reducer: persistedReducer,

   middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(apiSlice.middleware)
})

export const persistor = persistStore(store)