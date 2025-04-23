import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(e => e.id === action.payload.id)
            if(item) {
                item.quantity += 1;
            }else{
                state.cartItems.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(eachItem => eachItem.id !== action.payload)
        },
        clearCart: (state,action) => {
            state.cartItems = []
        },
        decremetQuantity: (state, action) => {
            const item = state.cartItems.find(e => e.id === action.payload.id)
            if(action.payload.quantity == 1) {
                state.cartItems = state.cartItems.filter(eachItem => eachItem.id !== action.payload.id)
                // alert('empty')
            }else{
                if(item) {
                    console.log(action.payload.quantity)
                    item.quantity -= 1;
                }
            }
            
        }
    }
})

export const {addToCart, removeFromCart, clearCart, decremetQuantity} = cartSlice.actions;
export default cartSlice.reducer; 