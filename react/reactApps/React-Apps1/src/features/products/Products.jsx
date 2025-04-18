import React from 'react'
import axios from 'axios'
import { useDeleteproductMutation, useGetAllproductsQuery, useLazyGetAllproductsQuery } from '../../services/products'

function Products() {
   const {isLoading, data} = useGetAllproductsQuery()
   const [fn] = useDeleteproductMutation()
   const [rfn] = useLazyGetAllproductsQuery()
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
  return (
    <div className='box'>
       
            { 
                isLoading ? <h3>loading...</h3> : (
                    <ul>
                        <h1>Products</h1>
                    {
                        data.map((e) => {
                            const {title, description, id, price, category, image, rating} = e
                            return <li key={id}>
                                    {title} <button onClick={()=>handleDelet(id)}>delete product</button>
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