import { apiSlice } from '@/services/authApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";

// config the store 
const store= configureStore({
   reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer
   },
   middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)