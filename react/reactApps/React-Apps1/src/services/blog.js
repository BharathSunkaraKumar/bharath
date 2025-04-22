
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getBlogItems: builder.query({
        query: (seachTerm = '') => {

          return seachTerm ?  `/blogs?title=${seachTerm}` :  `/blogs`   },

          // providesTags: (result, error, seachTerm) => 
          //   result
          // ? [...result.map(({id}) => ({tpye: 'Blogs', id})),
          //   {type: 'Blogs', id: `LIST-${seachTerm}`},

          // ]
          // : [{ type: 'Blogs', id: `List-${seachTerm}` }],
    }),

    getBlogDetails: builder.query({
        query: (id) => `blogs/${id}`
    }),

    editblog: builder.mutation({
      query: (blog) => {
        return {
          url: `blogs/${blog.id}`,
          method: "PUT",
          body: blog
        }
      }
    }),

    addBlogPost: builder.mutation({
      query: (newBlog) => {
        return {
          url: '/blogs',
          method: "POST",
          body: newBlog
        }
      }
    }),

    deleteBlog: builder.mutation({
      query: (id) => {
        console.log(id)
        return {
          url: `blogs/${id}`,
          method: "DELETE"
        }
      }
    }),
    // invalidatesTags: (result, error, id) => [
    //   { type: 'Blogs', id }, // Invalidate deleted item
    //   { type: 'Blogs', id: 'LIST-searchTerm' }, // Invalidate all LISTs (you can also pass current searchTerm)
    // ],
    
  }),
})

export const {useLazyGetBlogItemsQuery, useDeleteBlogMutation, useGetBlogDetailsQuery, useGetBlogItemsQuery, useAddBlogPostMutation, useEditblogMutation} = blogApi
