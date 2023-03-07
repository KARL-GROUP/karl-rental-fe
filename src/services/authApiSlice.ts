import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://karla-rental-be-development.up.railway.app/api',
  }),
  endpoints: (builder) => ({
    adminRegister: builder.mutation({
      query: (body) => ({
        url: `/auth/register`,
        mrthod: "POST",
        body,
      }),
    }),
   
})
})
export const { useAdminRegisterMutation } = apiSlice