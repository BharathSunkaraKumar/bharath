
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/blogs' }),
  endpoints: (build) => ({
    getBlogItems: build.query({
        query: () => `/`,
    }),
  }),
})

export const { useGetBlogItemsQuery } = blogApi