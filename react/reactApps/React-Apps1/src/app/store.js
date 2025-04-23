import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todolist/todoSlice'
import cartReducer from '../features/products/cartSlice'
import { countriesApi } from '../services/countries'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from '../services/products'
import { blogApi } from '../services/blog'

export const store = configureStore({
  reducer: {
    c: counterReducer,
    t: todoReducer,
    cart: cartReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware, productsApi.middleware, blogApi.middleware),
})

setupListeners(store.dispatch) 