import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decremetQuantity, removeFromCart } from './cartSlice'

function Cart() {
  const cartItems =  useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()
  
  const handleRemove = (id) => {
    console.log(id)
    dispatch(removeFromCart(id))
  }
  return (
    <div className='box'>
        <h1>Cart</h1>
        <div>
            {
                cartItems.map((cartItem) => {
                    return <div className='box' key={cartItem.id}>
                        <h3>{cartItem.title}</h3>
                        <p>price: {cartItem.price}</p>
                        <p>quantity: {cartItem.quantity}</p>
                        <div>
                        <button onClick={()=>dispatch(addToCart(cartItem))} style={{width: '20px', height: '20px'}}>+</button>
                        <span style={{padding: '10px'}}>total: {cartItem.price * cartItem.quantity}</span>
                        <button onClick={()=>dispatch(decremetQuantity(cartItem))} style={{width: '20px', height: '20px'}}>-</button>
                        </div>
                        <button onClick={()=>handleRemove(cartItem.id)}>remove from cart</button>
                    </div>
                })
            }
            <div>
                <p>total: {
                    cartItems.reduce((e, a) => {
                        let total = Math.floor(a.price * a.quantity)
                        return e + total
                    }, 0)
                }</p>
                
            </div>
            {cartItems.length > 0 && <button onClick={()=>{dispatch(clearCart())}}>clear cart</button>}
        </div>
    </div>
  )
}

export default Cart