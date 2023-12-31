/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl:
     'https://book-catalogue-server-lovat.vercel.app'
     
    //  "http://localhost:5000"
    }),
  tagTypes: ['reviews','books'],
  endpoints: () => ({}),
});