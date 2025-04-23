import React from 'react'
import axios from 'axios'
import './products.css'
import { useDeleteproductMutation, useGetAllproductsQuery, useLazyGetAllproductsQuery } from '../../services/products'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './cartSlice'

function Products() {
   const {isLoading, data, refetch} = useGetAllproductsQuery()
   const dispatch = useDispatch()
   let x = useGetAllproductsQuery()
//    console.log(x)
   const [fn] = useDeleteproductMutation()
   const [rfn] = useLazyGetAllproductsQuery()
   const nav = useNavigate()
//    console.log(x)
// const handleDelet = (id) => {
//     axios.delete(`http://localhost:3000/products/${id}`)
//     .then(() => {
//         alert('completed delete')
//     })
// }
const handleDelet = (id) => {
    fn(id).then((res) => {
        rfn()
    })
}
const handleEdit = (id) => {
    nav(`/editproduct/${id}`)
}

useEffect(()=>{
    refetch()
},[data])

const handleCart = (product) => {
    dispatch(addToCart(product))
}
  return (
    <div className='box'>
       
            { 
                isLoading ? <h3>loading...</h3> : (
                    <ul className='products-container wrapper'>
                        {/* <h1>Products</h1> */}
                    {
                        data.map((e) => {
                            const {title, description, id, price, category, image, rating} = e
                            return <li className='product-container wrapper' key={id}>
                                    <img src={image}  width='100px'/>
                                    <p className='title'>{title} </p>
                                    <div className='btns'>
                                        <button className='delete' onClick={()=>handleDelet(id)}>Delete product</button>
                                        <button onClick={()=>handleEdit(id)}>Edit product</button>
                                    </div>
                                    <div>
                                        <button onClick={()=>handleCart(e)} style={{background: 'yellow', color:'black'}}>add to cart</button>
                                    </div>
                            </li>
                        })
                    }
                    </ul>
                )
            }
    </div>
  )
}

export default Products