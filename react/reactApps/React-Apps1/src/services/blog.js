
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/blogs' }),
  endpoints: (builder) => ({
    getBlogItems: builder.query({
        query: () => `/`,
        // providesTags: ['blog']
    }),
    getBlogItem: builder.query({
        query: (seachTerm) => `?title=${seachTerm}`
    }),
    getBlogDetails: builder.query({
        query: (id) => `/${id}`
    }),
    deleteBlog: builder.mutation({
      query: (id) => {
        console.log(id)
        return {
          url: `/${id}`,
          method: "DELETE"
        }
      }
    }),
    // invalidatesTags: ['/'],
  }),
})

export const { useLazyGetBlogItemsQuery, useLazyGetBlogItemQuery, useDeleteBlogMutation, useGetBlogDetailsQuery, useGetBlogItemQuery, useGetBlogItemsQuery } = blogApi