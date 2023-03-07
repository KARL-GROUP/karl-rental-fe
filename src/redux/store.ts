import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '@/services/authApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

// config the store 
const store= configureStore({
   reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer
   },
   middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)