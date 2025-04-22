import React, { useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router'
import { useEditblogMutation, useGetBlogDetailsQuery } from '../../services/blog'

function Editblog() {
   const {bid} = useParams()
   const {data,isLoading, refetch} = useGetBlogDetailsQuery(bid)
const navigator = useNavigate()
const [efn] =  useEditblogMutation()
   const blogpost = useFormik({
        initialValues: {},
        onSubmit: (values) => {
            efn(values).then((res) => {
                refetch()
                navigator('/blog')
            })
        }
    })
    useEffect(()=> {
        blogpost.setValues(data)
    }, [data])
  return (
    <div className='box'>
        <h1 style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: '1px', padding: '5px', color: 'dodgerblue'}}>Edit Blog post</h1>
        <form className='blog-post' onSubmit={blogpost.handleSubmit}>
            <input type='text' name='title'  placeholder='title' onChange={blogpost.handleChange} value={blogpost.values?.title || ''}/>
            <br/>
            <input type='text' name='slug' placeholder='slug' onChange={blogpost.handleChange} value={blogpost.values?.slug || ''}/>
            <br/>
            <input type='text' name='content' placeholder='content' onChange={blogpost.handleChange} value={blogpost.values?.content|| ''}/>
            <br/>
            <input type='text' name='excerpt'  placeholder='excerpt' onChange={blogpost.handleChange} value={blogpost.values?.excerpt|| ''}/>
            <br/>
            <input type='text' name='author' placeholder='author' onChange={blogpost.handleChange} value={blogpost.values?.author || ''}/>
            <br/>
            <input type='text' name='image' placeholder='image'  onChange={blogpost.handleChange} value={blogpost.values?.image || ''}/>
            <br/>    
            <button type='submit'>edit blog post</button>
        </form>
    </div>
  )
}

export default Editblog