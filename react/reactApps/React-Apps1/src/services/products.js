// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/products' }),
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: () => `/`,
    }),
    getproductDetailById: builder.query({
      query: (pid) => `/${pid}`,
    }),
    deleteproduct: builder.mutation({
      query : (id) => {
        return {
          url: `/${id}`,
          method: "DELETE"
        }
      }
    }),
    addProduct: builder.mutation({
      query: (newProduct) => {
        return {
          url: '/',
          method: "POST",
          body: newProduct
        }
      }
    }),
    editProduct: builder.mutation({
      query: (Product) => {
        console.log("Product::"+Product)
        return {
          url: `/${Product.id}`,
          method: "PUT",
          body: Product,
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useEditProductMutation, useGetproductDetailByIdQuery, useAddProductMutation, useLazyGetAllproductsQuery,useGetAllproductsQuery, useDeleteproductMutation } = productsApi