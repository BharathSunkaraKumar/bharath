import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useEditProductMutation, useGetproductDetailByIdQuery } from '../../services/products'
import { useFormik } from 'formik'


function EditProduct() {
  const {pid} = useParams()
  const navigate = useNavigate()
  const {isLoading, data, refetch} = useGetproductDetailByIdQuery(pid)
  const [efn] = useEditProductMutation()

  const productForm = useFormik({
      initialValues: {},
      onSubmit: async (values) => {
          await efn(values)
          await refetch()
          navigate('/products')
        }
    })
    
    useEffect(()=>{
        productForm.setValues(data)
    },[data])
  
  return (
    <div className='box'>
        <h1>EditProduct</h1>
        <form onSubmit={productForm.handleSubmit}>
            <input type='text' name='title' value={productForm.values?.title} placeholder='title' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <input type='text' name='price' value={productForm.values?.price} placeholder='price' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <input type='text' name='description' value={productForm.values?.description} placeholder='description' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <input type='text' name='category' value={productForm.values?.category} placeholder='category' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <input type='text' name='image' value={productForm.values?.image} placeholder='image' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <button>Edit product</button>
        </form>
    </div>
  )
}

export default EditProduct