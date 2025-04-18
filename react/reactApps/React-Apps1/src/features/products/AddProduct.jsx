import React from 'react'
import { Formik, useFormik } from 'formik'
import { useAddProductMutation } from '../../services/products'
function AddProduct() {
    const [addprod] =  useAddProductMutation()
    const productForm = useFormik({
        initialValues: {
            "title": "",
            "price": 0,
            "description": "",
            "category": "",
            "image": "",
            "rating": {
                "rate": 0,
                "count": 0
            }
        },
        onSubmit : (values) => {
            addprod(values)
        }
    })
  return (
    <div className='box'>
        <h1>AddProduct</h1>
        <form onSubmit={productForm.handleSubmit}>
            <input type='text' name='title' placeholder='title' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <input type='text' name='price' placeholder='price' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <input type='text' name='description' placeholder='description' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <input type='text' name='category' placeholder='category' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <input type='text' name='image' placeholder='image' onChange={productForm.handleChange} onBlur={productForm.handleBlur}/>
            <br/>
            <button>Add product</button>
        </form>
    </div>
  )
}

export default AddProduct