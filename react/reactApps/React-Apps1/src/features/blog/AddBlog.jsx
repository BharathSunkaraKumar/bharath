import React from 'react'
import './blog.css'
import { Formik, useFormik } from 'formik'
import { useAddBlogPostMutation } from '../../services/blog'
import { useNavigate } from 'react-router'

function AddBlog() {
    const [addfn] = useAddBlogPostMutation()
    const navigate = useNavigate()
    const blogpost = useFormik({
        initialValues: {
            title: '',
            slug: '',
            content: '',
            excerpt: '',
            author: " ",
            image: " "
        },
        onSubmit: (values) => {
            console.log(values)
            addfn(values).then((res)=>{
                navigate('/blog')
            })
        }
    })
  return (
    <div className='box'>
        <h1 style={{textAlign: 'center', fontWeight: 'bold', letterSpacing: '1px', padding: '5px', color: 'dodgerblue'}}>Add Blog</h1>
        <form className='blog-post' onSubmit={blogpost.handleSubmit}>
            <input type='text' name='title' placeholder='title' onChange={blogpost.handleChange} value={blogpost.values.title}/>
            <br/>
            <input type='text' name='slug' placeholder='slug' onChange={blogpost.handleChange} value={blogpost.values.slug}/>
            <br/>
            <input type='text' name='content' placeholder='content' onChange={blogpost.handleChange} value={blogpost.values.content}/>
            <br/>
            <input type='text' name='excerpt' placeholder='excerpt' onChange={blogpost.handleChange} value={blogpost.values.excerpt}/>
            <br/>
            <input type='text' name='author' placeholder='author' onChange={blogpost.handleChange} value={blogpost.values.author}/>
            <br/>
            <input type='text' name='image' placeholder='image' onChange={blogpost.handleChange} value={blogpost.values.image}/>
            <br/>    
            <button type='submit'>Add blog post</button>
        </form>
        <button onClick={()=>{navigate('/blog')}} style={{padding: '5px', width: '104px', height: '35px', margin: '5px', background: 'tomato', border:'none', borderRadius:'5px'}}>cancel</button>
    </div>
  )
}

export default AddBlog